const UPSTREAM = "https://freeinternet.bot/n0WQuU-4c2yRgWwL";
const UA = "v2raytun/android";

export async function onRequest(context) {
  try {
    const resp = await fetch(UPSTREAM, { headers: { "User-Agent": UA } });
    const body = await resp.text();
    return new Response(body, {
      status: resp.status,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    return new Response("proxy error", { status: 502 });
  }
}