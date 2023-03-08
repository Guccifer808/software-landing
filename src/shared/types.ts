export enum SelectedPage {
    Home = "home",
    Features = "features",
    Services = "services",
    About = "about",
    Portfolio = "portfolio",
    Blog = "blog",
    Contacts = "contacts",
  }

  export interface FeaturesType {
    image: { [key: string]: string };
    title: string;
    action: string;
  }
  export interface ServicesType {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  export interface BrandsType {
    image: { [key: string]: string };
    alt: string;
  }