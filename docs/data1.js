export const BranchAusiris = [
  { label: "สาขาสีลม" },
  { label: "สาขาเชียงใหม่" },
  { label: "สาขาหาดใหญ่" },
  { label: "สาขาตึก" }
].map(BranchAusiriss => ({
  value: BranchAusiriss.label,
  label: BranchAusiriss.label
}));

export const groupedOptions = [
  {
    label: "สาขา",
    options: BranchAusiris
  }
];
