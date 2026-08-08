import { describe, expect, test } from "bun:test";
import { timelineEvents, timelinePhases } from "@/data/timelineEvents";
import { groupEventsByPhase } from "./groupEventsByPhase";

describe("groupEventsByPhase", () => {
  test("produces one group per phase, in phase order", () => {
    const groups = groupEventsByPhase(timelineEvents, timelinePhases);
    expect(groups.map((group) => group.phase.id)).toEqual(
      timelinePhases.map((phase) => phase.id),
    );
  });

  test("every event appears in exactly one group", () => {
    const groups = groupEventsByPhase(timelineEvents, timelinePhases);
    const totalGrouped = groups.reduce((sum, group) => sum + group.events.length, 0);
    expect(totalGrouped).toBe(timelineEvents.length);
  });

  test("each group only contains events matching its phase", () => {
    const groups = groupEventsByPhase(timelineEvents, timelinePhases);
    for (const group of groups) {
      for (const event of group.events) {
        expect(event.phaseId).toBe(group.phase.id);
      }
    }
  });
});
