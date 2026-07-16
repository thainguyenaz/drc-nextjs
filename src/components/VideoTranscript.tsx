import { videoTranscripts } from "@/data/video-transcripts";

// Renders nothing until a verbatim transcript exists in video-transcripts.ts.
// Native details/summary keeps the full text in the server-rendered HTML for
// crawlers while staying collapsed for visitors.
export default function VideoTranscript({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title?: string;
}) {
  const transcript = videoTranscripts[youtubeId];
  if (!transcript) return null;

  return (
    <details className="mt-6 rounded-lg border border-gray-200 bg-white">
      <summary className="cursor-pointer px-5 py-4 font-medium text-forest select-none">
        Read the full video transcript{title ? `: ${title}` : ""}
      </summary>
      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed space-y-4">
        {transcript.split(/\n\s*\n/).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </details>
  );
}
