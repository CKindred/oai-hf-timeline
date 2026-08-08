import { Timeline } from "@/components/Timeline";
import { timelineEvents, timelinePhases } from "@/data/timelineEvents";

export const App = () => {
  return (
    <div className="min-h-screen bg-muted/40 text-foreground">
      <main className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-12 sm:px-6">
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            OpenAI &ndash; Hugging Face Incident Timeline
          </h1>
          <p className="text-sm text-muted-foreground">
            A chronological reconstruction of events from May&ndash;August 2026. Select any event
            to see more detail and its source. This page is purely informational and presents no
            opinion or analysis of its own.
          </p>
        </header>
        <Timeline events={timelineEvents} phases={timelinePhases} />
      </main>
    </div>
  );
};
