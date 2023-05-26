import { ElementType, ReactNode } from "react";

import { IProduct } from "../redux/redux-types";

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
  onClick?: () => void;
  styles?: { [key: string]: string };
  type?: "button" | "reset" | "submit" | undefined;
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
  // companies: ICompany[] | null;
  currentCompanyId: string;
  handleItemClick: (companyIdFromItem: string) => void;
}

// Products

export interface IProductsListProps {
  products: IProduct[] | null;
}
