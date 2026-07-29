import ReportHeader from "@/components/dashboard/ReportHeader";
import ScoreSection from "@/components/dashboard/ScoreSection";
import SummaryCard from "@/components/dashboard/SummaryCard";
import ReccomendationSection from "@/components/dashboard/RecommendationSection";

import { analyzeWebsite} from "@/lib/revamp";

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-8 py-12 space-y-8">

        <ReportHeader />

        <ScoreSection />

        <SummaryCard />

        <ReccomendationSection />

      </div>
    </main>
  );
}