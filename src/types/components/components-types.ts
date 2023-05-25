import { ElementType, ReactNode } from "react";
import { ICompany } from "../redux/redux-types";

interface LinkActivity {
  [key: string]: string | number | NestedLinkActivity;
}

interface NestedLinkActivity {
  [key: string]: string | number;
}

export interface IMobileNavigationProps {
  isLinkActive: (path: string) => LinkActivity;
}

export interface IFullNavigationProps {
  isLinkActive: (path: string) => LinkActivity;
}

export interface ISectionProps {
  children: ReactNode;
}

export interface IFullSidebarProps {
  children: ReactNode;
}

export interface ICompaniesListProps {
  children: ReactNode;
}

export interface ICompaniesItemsProps {
  companies: ICompany[] | null;
  companyId: string;
  handleItemClick: (idFromCompanyCard: string) => void;
}

export interface IMyTitleProps {
  hidden?: boolean;
  text: string;
  as: ElementType<any>;
  variant?: any;
}

export interface IMobileSidebarProps {
  isSideBarOpen: boolean;
  sidebarHandler: () => void;
  children: ReactNode;
}
