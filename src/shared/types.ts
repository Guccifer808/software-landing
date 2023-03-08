export enum SelectedPage {
    Home = "home",
    Services = "services",
    About = "about",
    Portfolio = "portfolio",
    Blog = "blog",
    Contacts = "contacts",
  }

  export interface ServicesType {
    image: { [key: string]: string };
    title: string;
    action: string;
  }
  export interface BrandsType {
    image: { [key: string]: string };
    alt: string;
  }