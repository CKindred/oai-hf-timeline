import { useId } from "react";
import { TimelineEventCard } from "@/components/TimelineEventCard";
import type { TimelineEvent, TimelinePhase } from "@/data/timelineEvents";
import { groupEventsByPhase } from "@/lib/groupEventsByPhase";

interface TimelineProps {
  events: TimelineEvent[];
  phases: TimelinePhase[];
}

export const Timeline = ({ events, phases }: TimelineProps) => {
  const groups = groupEventsByPhase(events, phases);

  return (
    <div className="flex flex-col gap-10">
      {groups.map((group) => (
        <TimelinePhaseSection key={group.phase.id} phase={group.phase} events={group.events} />
      ))}
    </div>
  );
};

interface TimelinePhaseSectionProps {
  phase: TimelinePhase;
  events: TimelineEvent[];
}

const TimelinePhaseSection = ({ phase, events }: TimelinePhaseSectionProps) => {
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
          <TimelineEventCard key={event.id} event={event} />
        ))}
      </ol>
    </section>
  );
};
