import { Badge } from "@/components/ui/badge";

export function getStatusBadge(status: SectionStatus) {
  switch (status) {
    case "active":
      return (
        <Badge
          variant="outline"
          className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/10"
        >
          Active
        </Badge>
      );

    case "draft":
      return (
        <Badge
          variant="outline"
          className="bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/10"
        >
          Draft
        </Badge>
      );

    case "disabled":
      return (
        <Badge
          variant="outline"
          className="bg-zinc-500/10 text-zinc-400 border-zinc-500/20 hover:bg-zinc-500/10"
        >
          Disabled
        </Badge>
      );
  }
}

export function getToneBadge(tone: Tone) {
  switch (tone) {
    case "strict":
      return (
        <Badge
          variant="outline"
          className="bg-transparent text-zinc-200 border-zinc-500/40 hover:bg-transparent"
        >
          Strict
        </Badge>
      );

    case "neutral":
      return (
        <Badge
          variant="outline"
          className="bg-transparent text-zinc-200 border-zinc-500/40 hover:bg-transparent"
        >
          Neutral
        </Badge>
      );

    case "friendly":
      return (
        <Badge
          variant="outline"
          className="bg-transparent text-zinc-200 border-zinc-500/40 hover:bg-transparent"
        >
          Friendly
        </Badge>
      );

    case "empathetic":
      return (
        <Badge
          variant="outline"
          className="bg-transparent text-zinc-200 border-zinc-500/40 hover:bg-transparent"
        >
          Empathetic
        </Badge>
      );
  }
}
