import type { BrandConfig, CtaItem, NavItem, SocialLink } from '../_shared/types';
import { dataEs } from './locales/es';
import { dataEn } from './locales/en';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  featured?: boolean;
}

export interface MenuSection {
  category: string;
  items: MenuItem[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
}

export interface ScheduleRow {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface LocalData {
  brand: BrandConfig;
  nav: NavItem[];
  navCta?: CtaItem;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    backgroundImage: string;
    primaryCta: CtaItem;
    secondaryCta?: CtaItem;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    highlights: { value: string; label: string }[];
  };
  menu: {
    title: string;
    subtitle: string;
    sections: MenuSection[];
  };
  gallery: {
    title: string;
    subtitle: string;
    images: GalleryImage[];
  };
  hours: {
    title: string;
    subtitle: string;
    schedule: ScheduleRow[];
    note?: string;
  };
  location: {
    title: string;
    subtitle: string;
    address: string;
    cityRegion: string;
    directions: string;
    mapEmbedUrl: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email?: string;
    labels?: {
      whatsapp: string;
      phone: string;
    };
  };
  footer: {
    description: string;
    socials: SocialLink[];
    copyright: string;
  };
}

export const currentLocale = import.meta.env.PUBLIC_LOCALE === 'en' ? 'en' : 'es';
export const data: LocalData = currentLocale === 'en' ? dataEn : dataEs;
