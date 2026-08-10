import { ChevronsDown, ChevronsUp } from "lucide-react";
import { useId, useState } from "react";
import { TimelineEventCard } from "@/components/TimelineEventCard";
import { Button } from "@/components/ui/button";
import type { TimelineEvent, TimelinePhase } from "@/data/timelineEvents";
import { groupEventsByPhase } from "@/lib/groupEventsByPhase";

interface TimelineProps {
  events: TimelineEvent[];
  phases: TimelinePhase[];
}

export const Timeline = ({ events, phases }: TimelineProps) => {
  const groups = groupEventsByPhase(events, phases);
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const allOpen = openIds.size === events.length;
  const allClosed = openIds.size === 0;

  const expandAll = () => setOpenIds(new Set(events.map((event) => event.id)));
  const collapseAll = () => setOpenIds(new Set());

  const setEventOpen = (id: string, isOpen: boolean) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (isOpen) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={expandAll}
          disabled={allOpen}
          className="hover:bg-background hover:text-foreground hover:shadow-md"
        >
          <ChevronsDown aria-hidden="true" />
          Expand all
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={collapseAll}
          disabled={allClosed}
          className="hover:bg-background hover:text-foreground hover:shadow-md"
        >
          <ChevronsUp aria-hidden="true" />
          Collapse all
        </Button>
      </div>
      <div className="flex flex-col gap-10">
        {groups.map((group) => (
          <TimelinePhaseSection
            key={group.phase.id}
            phase={group.phase}
            events={group.events}
            openIds={openIds}
            onEventOpenChange={setEventOpen}
          />
        ))}
      </div>
    </div>
  );
};

interface TimelinePhaseSectionProps {
  phase: TimelinePhase;
  events: TimelineEvent[];
  openIds: Set<string>;
  onEventOpenChange: (id: string, open: boolean) => void;
}

const TimelinePhaseSection = ({
  phase,
  events,
  openIds,
  onEventOpenChange,
}: TimelinePhaseSectionProps) => {
  const headingId = useId();

  if (events.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId} className="mb-4 text-lg font-semibold text-foreground">
        {phase.name}
      </h2>
      <ol className="relative flex flex-col gap-4 before:absolute before:top-2 before:bottom-2 before:left-4 before:w-px before:bg-border">
        {events.map((event) => (
          <TimelineEventCard
            key={event.id}
            event={event}
            open={openIds.has(event.id)}
            onOpenChange={(isOpen) => onEventOpenChange(event.id, isOpen)}
          />
        ))}
      </ol>
    </section>
  );
};
