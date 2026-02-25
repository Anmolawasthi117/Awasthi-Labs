const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1`;
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token || "",
    }),
  });

  return response.json();
};

const getTopSpotifyData = async () => {
  const tokenParams = await getAccessToken();
  const access_token = tokenParams.access_token;

  if (!access_token) {
    return { tracksRes: null, artistsRes: null };
  }

  const [tracksRes, artistsRes] = await Promise.all([
    fetch(TOP_TRACKS_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    }),
    fetch(TOP_ARTISTS_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    }),
  ]);

  return {
      tracksRes,
      artistsRes
  };
};

export default async function handler(req, res) {
  try {
    const { tracksRes, artistsRes } = await getTopSpotifyData();

    if (!tracksRes || !artistsRes || !tracksRes.ok || !artistsRes.ok || tracksRes.status === 204 || artistsRes.status === 204) {
        return res.status(200).json({ topTrack: null, topArtist: null, error: "Failed to fetch top data" });
    }

    const [tracks, artists] = await Promise.all([
        tracksRes.json(),
        artistsRes.json()
    ]);

    const track = tracks.items[0];
    const artist = artists.items[0];

    // Data shapes
    const topTrack = track ? {
        songName: track.name,
        artistName: track.artists.map((_artist) => _artist.name).join(", "),
        albumArt: track.album.images[0]?.url,
        url: track.external_urls.spotify
    } : null;

    const topArtist = artist ? {
        name: artist.name,
        genres: artist.genres.slice(0, 2).join(", "),
        image: artist.images[0]?.url,
        url: artist.external_urls.spotify
    } : null;

    res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200"); // Cache for 1 day

    return res.status(200).json({
      topTrack,
      topArtist
    });
  } catch (error) {
    console.error("Spotify API error:", error);
    return res.status(200).json({ topTrack: null, topArtist: null, error: "Internal Server Error" });
  }
}
