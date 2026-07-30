import { create } from "zustand";

interface ReportStore {
  report: any;
  setReport: (report: any) => void;
}

export const useReportStore = create<ReportStore>((set) => ({
  report: null,

  setReport: (report) =>
    set({
      report,
    }),
}));