import { describe, expect, test } from "bun:test";
import { timelineEvents, timelinePhases } from "./timelineEvents";

describe("timelineEvents", () => {
  test("has at least one event", () => {
    expect(timelineEvents.length).toBeGreaterThan(0);
  });

  test("every event id is unique", () => {
    const ids = timelineEvents.map((event) => event.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test("every event references a defined phase", () => {
    const phaseIds = new Set(timelinePhases.map((phase) => phase.id));
    for (const event of timelineEvents) {
      expect(phaseIds.has(event.phaseId)).toBe(true);
    }
  });

  test("every event has at least one reported-by citation", () => {
    for (const event of timelineEvents) {
      expect(event.reportedBy.length).toBeGreaterThan(0);
    }
  });

  test("every citation with a URL uses https", () => {
    for (const event of timelineEvents) {
      for (const source of event.reportedBy) {
        if (source.url !== undefined) {
          expect(source.url.startsWith("https://")).toBe(true);
        }
      }
    }
  });

  test("every phase has at least one event", () => {
    const usedPhaseIds = new Set(timelineEvents.map((event) => event.phaseId));
    for (const phase of timelinePhases) {
      expect(usedPhaseIds.has(phase.id)).toBe(true);
    }
  });

  test("events are in chronological order by sortDate", () => {
    const sortDates = timelineEvents.map((event) => event.sortDate);
    const sorted = [...sortDates].sort();
    expect(sortDates).toEqual(sorted);
  });
});
