import axios from "axios";

export default async function handler(req, res) {
  const { url } = req.query;
  const idMatch = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  if (!idMatch) return res.status(400).json({ error: "Invalid YouTube URL" });
  const videoId = idMatch[1];

  const key = process.env.YOUTUBE_API_KEY;
  const api = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,status&id=${videoId}&key=${key}`;

  try {
    const { data } = await axios.get(api);
    if (!data.items.length)
      return res.status(404).json({ error: "Video not found" });
    const v = data.items[0];
    const snippet = v.snippet;
    const details = v.contentDetails;
    const status = v.status;

    // ---- Risk Scoring Logic ----
    let score = 0;
    if (details.licensedContent) score += 60;
    if (status.license === "youtube") score += 20;
    if (/official|vevo|records|music/i.test(snippet.channelTitle)) score += 30;
    if (/music|song|album|by|soundtrack/i.test(snippet.description))
      score += 20;
    if (snippet.channelTitle.length > 20) score += 10;
    const risk =
      score < 30
        ? "Safe / Creative Commons"
        : score < 60
        ? "Check Attribution"
        : "Copyrighted / Rights Managed";

    res.json({
      id: videoId,
      title: snippet.title,
      channel: snippet.channelTitle,
      license: status.license,
      score,
      risk,
      thumbnail: snippet.thumbnails.medium.url,
    });
  } catch (err) {
    res.status(500).json({ error: "API error", details: err.message });
  }
}
