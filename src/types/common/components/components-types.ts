import { ReactNode } from "react";

interface LinkActivity {
  [key: string]: string | number | NestedLinkActivity;
}

interface NestedLinkActivity {
  [key: string]: string | number;
}

export interface ISmallNavigationProps {
  isLinkActive: (path: string) => LinkActivity;
}

export interface IFullNavigationProps {
  isLinkActive: (path: string) => LinkActivity;
}

export interface ISectionProps {
  children: ReactNode;
}
