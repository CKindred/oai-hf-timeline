import { ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { TimelineEvent } from "@/data/timelineEvents";

interface TimelineEventCardProps {
  event: TimelineEvent;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TimelineEventCard = ({ event, open, onOpenChange }: TimelineEventCardProps) => {
  return (
    <li className="relative pl-10">
      <span
        aria-hidden="true"
        className="absolute left-2.5 top-4 h-3 w-3 rounded-full border-2 border-primary bg-background"
      />
      <Collapsible open={open} onOpenChange={onOpenChange}>
        <Card className="gap-0 overflow-hidden py-0 shadow-sm transition-shadow hover:shadow-md">
          <CollapsibleTrigger className="group flex w-full items-start justify-between gap-4 p-4 text-left transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
            <CardHeader className="min-w-0 flex-1 gap-1.5 p-0">
              <time
                dateTime={event.sortDate}
                className="inline-flex w-fit items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {event.dateLabel}
              </time>
              <h3 className="text-base leading-none font-semibold sm:text-lg">{event.title}</h3>
            </CardHeader>
            <ChevronDown
              aria-hidden="true"
              className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <CardContent className="flex flex-col gap-3 px-4 pb-4">
              <p className="text-sm leading-relaxed text-foreground">{event.summary}</p>
              <p className="text-xs text-muted-foreground">
                Reported by{" "}
                {event.reportedBy.map((source, index) => (
                  <span key={source.name}>
                    {index > 0 && ", "}
                    {source.url ? (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      >
                        {source.name}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      source.name
                    )}
                  </span>
                ))}
              </p>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </li>
  );
};
