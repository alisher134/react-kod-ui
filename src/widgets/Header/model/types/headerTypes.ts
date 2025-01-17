export interface ICourseNavigation {
  title: string;
  items: ICourseNavigationItem[];
}

export interface ICourseNavigationItem {
  title: string;
  items: ICourseNavigationSection[];
}

export interface ICourseNavigationSection {
  section: string;
  logo: string;
  items: ICourseNavigationSubItem[];
}

export interface ICourseNavigationSubItem {
  title: string;
  link: string;
}

export interface INavigation {
  title: string;
  items: INavigationItem[];
}

export interface INavigationItem {
  title: string;
  link: string;
}
