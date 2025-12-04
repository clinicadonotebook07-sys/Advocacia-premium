import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Lawyer {
  id: string;
  name: string;
  role: string;
  oab: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}