export enum SelectedPage {
    Home = "home",
    Features = "features",
    About = "about",
    Services = "services",
    FAQ = "faq",
    Portfolio = "portfolio",
    Contacts = "contacts",
    Footer = "footer",
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
  export interface FaqType {
    title: string;
    description: string;
  }