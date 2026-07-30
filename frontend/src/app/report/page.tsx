"use client";

import ReportHeader from "@/components/dashboard/ReportHeader";
import ScoreSection from "@/components/dashboard/ScoreSection";
import SummaryCard from "@/components/dashboard/SummaryCard";
import ReccomendationSection from "@/components/dashboard/RecommendationSection";
import { useReportStore } from "@/store/reportStore";



export default function ReportPage() {

  const report = useReportStore((state) => state.report);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-8 py-12 space-y-8">

        <ReportHeader />

        <ScoreSection report={report}/>

        <SummaryCard summary={report.summary} />

        <ReccomendationSection recommendations={report.recommendations}/>

      </div>
    </main>
  );
}