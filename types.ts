import { LucideIcon } from 'lucide-react';

export interface ModuleItem {
  week: string;
  dates: string;
  title: string;
  focus: string;
  icon: LucideIcon;
}

export interface MentorArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  icon: LucideIcon;
}