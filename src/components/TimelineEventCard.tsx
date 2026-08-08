import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { TimelineEvent } from "@/data/timelineEvents";

interface TimelineEventCardProps {
  event: TimelineEvent;
}

export const TimelineEventCard = ({ event }: TimelineEventCardProps) => {
  return (
    <li className="relative pl-10">
      <span
        aria-hidden="true"
        className="absolute left-2.5 top-4 h-3 w-3 rounded-full border-2 border-primary bg-background"
      />
      <Collapsible>
        <Card className="gap-0 py-0">
          <CollapsibleTrigger className="flex w-full flex-col items-start gap-1 rounded-t-xl p-4 text-left focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
            <CardHeader className="w-full gap-1 p-0">
              <time dateTime={event.sortDate} className="text-sm font-medium text-muted-foreground">
                {event.dateLabel}
              </time>
              <CardTitle className="text-base">{event.title}</CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="flex flex-col gap-3 px-4 pb-4">
              <p className="text-sm text-foreground">{event.summary}</p>
              <p className="text-xs text-muted-foreground">
                Reported by {event.reportedBy.join(", ")}
              </p>
              <a
                href={event.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1 text-sm font-medium text-primary underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                View source
                <ExternalLink aria-hidden="true" className="size-3.5" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </li>
  );
};
