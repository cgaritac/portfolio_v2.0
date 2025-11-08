/// <reference types="vite/client" />

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "react-vertical-timeline-component" {
  import type { ComponentType, CSSProperties, ReactNode } from "react";

  export interface VerticalTimelineProps {
    children?: ReactNode;
    className?: string;
    animate?: boolean;
    layout?: "1-column" | "2-columns";
  }

  export interface VerticalTimelineElementProps {
    children?: ReactNode;
    className?: string;
    contentStyle?: CSSProperties;
    contentArrowStyle?: CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: ReactNode;
    iconStyle?: CSSProperties;
    iconOnClick?: () => void;
    position?: "left" | "right";
    textClassName?: string;
    visible?: boolean;
  }

  export const VerticalTimeline: ComponentType<VerticalTimelineProps>;
  export const VerticalTimelineElement: ComponentType<VerticalTimelineElementProps>;
}

declare module "@/shared/assets" {
  export const logo: string;
  export const backend: string;
  export const frontend: string;
  export const software: string;
  export const database: string;
  export const github: string;
  export const menu: string;
  export const close: string;
  export const css: string;
  export const docker: string;
  export const figma: string;
  export const git: string;
  export const html: string;
  export const javascript: string;
  export const mongodb: string;
  export const nodejs: string;
  export const reactjs: string;
  export const redux: string;
  export const tailwind: string;
  export const typescript: string;
  export const threejs: string;
  export const carrent: string;
  export const jobit: string;
  export const tripguide: string;
}