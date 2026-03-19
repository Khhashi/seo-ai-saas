"use client";

import React, { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { AlertTriangle, Loader2, Printer } from "lucide-react";
import { SeoReport } from "@/lib/seo-schema";
import {
  SummaryHeader,
  SourceDistributionChart,
  CompetitorStrengthCard,
  AdditionalAnalysisGrid,
  KeyInsightsGrid,
  KeywordsAnalysisGrid,
  RecommendationsCard,
  KeyMetricsGrid,
  OverallScoreCard,
  AIChatUpsellCard,
} from "./ui";
import { useUser } from "@clerk/nextjs";
import AIChat from "@/components/AIChat";

export default function ReportSummary({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const { user, isLoaded } = useUser();
  const [isPreparing, setIsPreparing] = useState(false);

  const job = useQuery(api.scrapingJobs.getJobBySnapshotId, {
    snapshotId: id,
    userId: user?.id || "skip",
  });

  const seoReport = job?.seoReport as SeoReport | undefined;
  const isPro = String((user?.publicMetadata as any)?.plan).toLowerCase() === "pro";

  const handlePrint = () => {
    setIsPreparing(true);
    // Venter 1 sekund for å sikre at alle visuelle elementer er klare
    setTimeout(() => {
      window.print();
      setIsPreparing(false);
    }, 1000);
  };

  if (!isLoaded || job === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (!seoReport) {
    return (
      <div className="p-20 text-center bg-slate-50 min-h-screen">
        <AlertTriangle className="w-12 h-12 mx-auto text-amber-500 mb-4" />
        <h2 className="text-xl font-bold">Rapport ikke funnet</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20 print:bg-white print:pb-0">
      <style jsx global>{`
        @media print {
          @page { 
            margin: 1.5cm; 
            size: A4 portrait; 
          }
          body { 
            margin: 0 !important; 
            padding: 0 !important; 
            background: white !important; 
            -webkit-print-color-adjust: exact !important; 
          }
          /* Fjerner alt som dytter innholdet ned og lager tom side */
          .no-print, .no-print-header { 
            display: none !important; 
            height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .report-sheet { 
            box-shadow: none !important; 
            border: none !important; 
            max-width: 100% !important; 
            width: 100% !important; 
            margin: 0 !important; 
            padding: 0 !important;
          }
          .avoid-break { 
            break-inside: avoid !important; 
            page-break-inside: avoid !important; 
            margin-bottom: 2rem !important; 
            display: block;
          }
          /* Sørger for at første side starter helt øverst */
          .first-page-header {
            padding-top: 0 !important;
          }
        }
      `}</style>

      {/* Header som kun vises på web */}
      <div className="no-print-header">
        <SummaryHeader seoReport={seoReport} />
      </div>

      {/* Mindre Print-knapp med AI-gradient */}
      <div className="max-w-5xl mx-auto px-6 py-6 flex justify-end no-print">
        <button
          onClick={handlePrint}
          disabled={isPreparing}
          className={`px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all shadow-lg active:scale-95 ${
            isPreparing 
              ? "bg-slate-200 text-slate-500 cursor-not-allowed" 
              : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right text-white shadow-indigo-100"
          }`}
        >
          {isPreparing ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Printer className="w-4 h-4" />
          )}
          <span>Print & Export PDF</span>
        </button>
      </div>

      {/* Rapport-dokument */}
      <div className="report-sheet max-w-[900px] mx-auto bg-white shadow-2xl overflow-hidden border border-slate-100">
        
        {/* SIDE 1: Header og Score starter helt øverst */}
        <div className="p-12 border-b border-slate-100 first-page-header">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight italic uppercase">
                {seoReport?.domain}
              </h1>
              <p className="text-slate-400 text-[10px] font-bold tracking-widest mt-1">
                SEO STATUS REPORT • {new Date().toLocaleDateString('no-NO')}
              </p>
            </div>
            <div className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-md font-bold text-[10px] uppercase tracking-widest border border-indigo-100">
              PRO ANALYSIS
            </div>
          </div>
          
          <div className="avoid-break">
            <OverallScoreCard seoReport={seoReport} />
          </div>
          
          <div className="mt-10 avoid-break">
            <KeyMetricsGrid seoReport={seoReport} />
          </div>
        </div>

        {/* Markedsposisjon */}
        <div className="p-12 border-b border-slate-50 bg-slate-50/30 print:bg-white">
          <h2 className="text-lg font-bold text-slate-800 mb-8 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-600 rounded-full" />
            Market Position & Structure
          </h2>
          <div className="avoid-break">
            <SourceDistributionChart seoReport={seoReport} />
          </div>
          <div className="mt-12 avoid-break">
            <CompetitorStrengthCard seoReport={seoReport} />
          </div>
        </div>

        {/* Detaljert analyse - Hver blokk unngår å bli splittet mellom sider */}
        <div className="p-12 space-y-16">
          <div className="avoid-break"><RecommendationsCard seoReport={seoReport} /></div>
          <div className="avoid-break"><KeywordsAnalysisGrid seoReport={seoReport} /></div>
          <div className="avoid-break"><KeyInsightsGrid seoReport={seoReport} /></div>
          <div className="avoid-break"><AdditionalAnalysisGrid seoReport={seoReport} /></div>
          
          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-slate-100 flex justify-between items-center text-slate-400">
            <span className="text-[10px] font-bold uppercase tracking-widest">Prepared for {seoReport?.domain}</span>
            <span className="text-[10px] font-medium italic">© {new Date().getFullYear()} SEO AI SAAS</span>
          </div>
        </div>
      </div>

      {/* AI Chat (Kun på skjerm) */}
      <div className="max-w-5xl mx-auto px-6 mt-12 no-print">
        {isPro ? (
          <div className="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-white/10">
            <div className="bg-indigo-600 p-4 text-white font-bold text-sm flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
              Expert AI Assistant
            </div>
            <AIChat seoReportId={id} />
          </div>
        ) : (
          <AIChatUpsellCard />
        )}
      </div>
    </div>
  );
}