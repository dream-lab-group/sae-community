import React from "react";

export type PageNavigationElementProps = {
  element: string;
  setUsedFilter: React.Dispatch<React.SetStateAction<string |undefined>>
};
