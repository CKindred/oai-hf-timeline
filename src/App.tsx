import { ExternalLink } from "lucide-react";
import { SiSubstack } from "react-icons/si";
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
            A chronology of events from May&ndash;August 2026. Click the
            drop-downs to see more detail.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>Based on (not my work):</span>
            <a
              href="https://airiskexplorer.substack.com/p/two-months-inside-openai-a-timeline"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#FF6719]/25 bg-[#FF6719]/10 px-3 py-1 text-xs font-medium text-[#B34700] transition-shadow hover:bg-[#FF6719]/15 hover:shadow-sm focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <SiSubstack aria-hidden="true" className="size-3.5 shrink-0" />
              Two Months Inside OpenAI: A Timeline of the Hugging Face Breach
              <ExternalLink aria-hidden="true" className="size-3.5 shrink-0" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </header>
        <Timeline events={timelineEvents} phases={timelinePhases} />
      </main>
      <footer className="mx-auto max-w-3xl px-4 pb-8 text-center text-sm text-muted-foreground sm:px-6">
        Website by{" "}
        <a
          href="https://www.linkedin.com/in/callumkindred/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          Callum Kindred
          <span className="sr-only">
            {" "}
            (opens LinkedIn profile in a new tab)
          </span>
        </a>
      </footer>
    </div>
  );
};
