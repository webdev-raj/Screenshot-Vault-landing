import { NextRequest, NextResponse } from 'next/server';

const CATEGORIES = ['receipt', 'chat', 'social_post', 'job_listing', 'article', 'code', 'other'];

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== 'string' || !text.trim()) {
      return NextResponse.json({ category: 'other', title: '', tags: [] });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Analyze this screenshot text and respond with ONLY a JSON object, no markdown, no explanation, in this exact shape:
{"category": "one of: ${CATEGORIES.join(', ')}", "title": "a short 4-8 word descriptive title", "tags": ["2 to 4 short lowercase keyword tags"]}

Text: """${text.slice(0, 1000)}"""`,
                },
              ],
            },
          ],
        }),
      }
    );

    if (res.status === 429) {
      return NextResponse.json({ error: 'rate_limited' }, { status: 429 });
    }

    const data = await res.json();
    let raw = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
    raw = raw.replace(/^```json\s*/i, '').replace(/```$/, '').trim();

    const parsed = JSON.parse(raw);
    const category = CATEGORIES.includes(parsed.category) ? parsed.category : 'other';
    const title = typeof parsed.title === 'string' ? parsed.title.slice(0, 60) : '';
    const tags = Array.isArray(parsed.tags)
      ? parsed.tags.slice(0, 4).map((t: string) => String(t).toLowerCase())
      : [];

    return NextResponse.json({ category, title, tags });
  } catch (err) {
    console.log('Classify API error:', err);
    return NextResponse.json({ category: 'other', title: '', tags: [] });
  }
}