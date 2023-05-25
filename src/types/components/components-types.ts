import { ElementType, ReactNode } from "react";

import { ICompany } from "../redux/redux-types";

// Universal types
export interface IChildrenProps {
  children: ReactNode;
}

// Common components

export interface IMyTitleProps {
  hidden?: boolean;
  text: string;
  as: ElementType<any>;
  variant?: any;
}

export interface IMobileSidebarProps extends IChildrenProps {
  isSideBarOpen: boolean;
  sidebarHandler: () => void;
}

export interface IMyButtonProps {
  text: string;
  onClick: () => void;
  styles?: { [key: string]: string };
}

export interface IMySectionProps extends IChildrenProps {
  styles?: { [key: string]: string };
}

// Navigation

interface LinkActivity {
  [key: string]: string | number | NestedLinkActivity;
}

interface NestedLinkActivity {
  [key: string]: string | number;
}

export interface INavigationProps {
  isLinkActive: (path: string) => LinkActivity;
}

// Companies

export interface ICompaniesItemsProps {
  companies: ICompany[] | null;
  companyId: string;
  handleItemClick: (idFromCompanyCard: string) => void;
}

// Products
