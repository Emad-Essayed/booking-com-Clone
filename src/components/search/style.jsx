export const valuesStyle = (isListPage) => {
  return {
    fontFamily: "inherit",
    fontSize: { xs: "1rem", lg: "0.875rem" },
    fontWeight: { xs: 700, lg: isListPage ? 400 : 500 },
    color: { xs: "#333", lg: "#2f2e2e" },
    opacity: 1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: { xs: "clip", lg: "ellipsis" },
  };
};

export const labelsStyle = (isListPage) => {
  return {
    fontFamily: "inherit",
    fontSize: { xs: "0.875rem", lg: isListPage ? "0.75rem" : "0.875rem" },
    fontWeight: { xs: isListPage ? 500 : 400, lg: 400 },
    color: { xs: isListPage ? "#262626" : "#444", lg: "#2f2e2e" },
    opacity: 1,
  };
};

export const borderedBox = {
  border: { xs: "1px solid #cd8900 !important", lg: "0 !important" },
  borderRadius: 0.75,
  overflow: "hidden",
};
