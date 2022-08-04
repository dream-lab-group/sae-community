import React from "react";

export type PageNavigationElementProps = {
  element: string;
  setUsedFilter: React.Dispatch<React.SetStateAction<string |undefined>>
  activeTagFilter: string | undefined,
  setActiveTagFitler: React.Dispatch<React.SetStateAction<string |undefined>>
};
