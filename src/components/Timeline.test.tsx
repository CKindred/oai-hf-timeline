import { afterEach, describe, expect, test } from "bun:test";
import { cleanup, fireEvent, render } from "@testing-library/react";
import type { TimelineEvent, TimelinePhase } from "@/data/timelineEvents";
import { Timeline } from "./Timeline";

afterEach(() => {
  cleanup();
});

const phases: TimelinePhase[] = [
  { id: "initial-evaluation", name: "Phase One" },
];

const events: TimelineEvent[] = [
  {
    id: "event-1",
    dateLabel: "1 Jan",
    sortDate: "2026-01-01",
    phaseId: "initial-evaluation",
    title: "First Event",
    summary: "Summary of the first event.",
    reportedBy: [{ name: "Test Source", url: "https://example.com/1" }],
  },
  {
    id: "event-2",
    dateLabel: "2 Jan",
    sortDate: "2026-01-02",
    phaseId: "initial-evaluation",
    title: "Second Event",
    summary: "Summary of the second event.",
    reportedBy: [{ name: "Test Source", url: "https://example.com/2" }],
  },
];

describe("Timeline expand/collapse all", () => {
  test("expand all opens every card, collapse all closes them", () => {
    const { getByRole, getAllByRole } = render(
      <Timeline events={events} phases={phases} />,
    );
    const cardTriggers = () => getAllByRole("button", { name: /Event$/ });

    for (const trigger of cardTriggers()) {
      expect(trigger).toHaveAttribute("aria-expanded", "false");
    }

    fireEvent.click(getByRole("button", { name: "Expand all" }));
    for (const trigger of cardTriggers()) {
      expect(trigger).toHaveAttribute("aria-expanded", "true");
    }

    fireEvent.click(getByRole("button", { name: "Collapse all" }));
    for (const trigger of cardTriggers()) {
      expect(trigger).toHaveAttribute("aria-expanded", "false");
    }
  });

  test("buttons disable once their action has nothing left to do", () => {
    const { getByRole } = render(<Timeline events={events} phases={phases} />);
    const expandAllButton = getByRole("button", {
      name: "Expand all",
    }) as HTMLButtonElement;
    const collapseAllButton = getByRole("button", {
      name: "Collapse all",
    }) as HTMLButtonElement;

    expect(collapseAllButton.disabled).toBe(true);

    fireEvent.click(expandAllButton);
    expect(expandAllButton.disabled).toBe(true);
    expect(collapseAllButton.disabled).toBe(false);
  });

  test("individually opening every card also disables expand all", () => {
    const { getByRole, getAllByRole } = render(
      <Timeline events={events} phases={phases} />,
    );
    const expandAllButton = getByRole("button", {
      name: "Expand all",
    }) as HTMLButtonElement;

    for (const trigger of getAllByRole("button", { name: /Event$/ })) {
      fireEvent.click(trigger);
    }

    expect(expandAllButton.disabled).toBe(true);
  });

  test("closing a single card via its own trigger only affects that card", () => {
    const { getByRole, getAllByRole } = render(
      <Timeline events={events} phases={phases} />,
    );
    const collapseAllButton = getByRole("button", {
      name: "Collapse all",
    }) as HTMLButtonElement;

    fireEvent.click(getByRole("button", { name: "Expand all" }));
    const [firstTrigger, secondTrigger] = getAllByRole("button", {
      name: /Event$/,
    });
    if (!firstTrigger || !secondTrigger) {
      throw new Error("Expected two card triggers");
    }

    fireEvent.click(firstTrigger);

    expect(firstTrigger).toHaveAttribute("aria-expanded", "false");
    expect(secondTrigger).toHaveAttribute("aria-expanded", "true");
    expect(collapseAllButton.disabled).toBe(false);
  });
});
