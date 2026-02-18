
import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  link: string;
  delay: number;
  icon: LucideIcon;
}

export interface HistoryEra {
  id: string;
  title: string;
  years: string;
  description: string;
  image: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface MediaItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
}
