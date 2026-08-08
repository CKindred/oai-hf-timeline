import type { TimelineEvent, TimelinePhase } from "@/data/timelineEvents";

export interface PhaseGroup {
  phase: TimelinePhase;
  events: TimelineEvent[];
}

export const groupEventsByPhase = (
  events: TimelineEvent[],
  phases: TimelinePhase[],
): PhaseGroup[] => {
  return phases.map((phase) => ({
    phase,
    events: events.filter((event) => event.phaseId === phase.id),
  }));
};
