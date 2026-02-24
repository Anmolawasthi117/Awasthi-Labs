import { useEffect, useState } from "react";
import { fetchSpotifyStatus, SpotifyStatus } from "@/lib/api";
import { Music2 } from "lucide-react";

export const SpotifyCard = () => {
  const [status, setStatus] = useState<SpotifyStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSpotifyStatus().then((res) => {
      setStatus(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      <div className="flex items-center gap-2 text-zinc-500">
        <Music2 className="w-5 h-5 text-green-500" />
        <span className="text-sm font-medium">Currently Vibing to</span>
      </div>

      {loading ? (
        <div className="h-16 w-full mt-4 bg-zinc-900 border border-zinc-800 rounded-md animate-pulse"></div>
      ) : status?.isPlaying ? (
        <div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/50">
          {status.albumArt ? (
            <img src={status.albumArt} alt="Album Art" className="w-12 h-12 rounded-md object-cover shadow-md" />
          ) : (
            <div className="w-12 h-12 rounded-md bg-zinc-800 flex items-center justify-center">
              <Music2 className="w-5 h-5 text-zinc-500" />
            </div>
          )}
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-medium text-zinc-200 truncate">{status.songName}</span>
            <span className="text-xs text-zinc-500 truncate">{status.artistName}</span>
          </div>
          {/* Animated equalizer bars */}
          <div className="ml-auto flex items-end gap-[2px] h-4">
            <div className="w-1 bg-green-500 rounded-sm animate-[bounce_1s_infinite_ease-in-out]"></div>
            <div className="w-1 bg-green-500 rounded-sm animate-[bounce_1s_infinite_ease-in-out_0.2s]"></div>
            <div className="w-1 bg-green-500 rounded-sm animate-[bounce_1s_infinite_ease-in-out_0.4s]"></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800 border-dashed justify-center text-zinc-500 text-sm">
          Not playing anything right now.
        </div>
      )}
    </div>
  );
};
