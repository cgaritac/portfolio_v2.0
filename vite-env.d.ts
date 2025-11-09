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

declare module "@/widgets/experience/assets" {
  export const sibudigital: string;
  export const criticalmasslatam: string;
  export const factork: string;
}

declare module "@/widgets/about/assets" {
  export const backend: string;
  export const frontend: string;
  export const software: string;
  export const database: string;
}

declare module "@/widgets/works/assets" {
  export const github: string;
}

declare module "@/widgets/navbar/assets" {
  export const logo: string;
  export const close: string;
  export const menu: string;
}

declare module "@/widgets/tech/assets" {
  export const csharp: string;
  export const python: string;
  export const java: string;
  export const bootstrap: string;
  export const sql: string;
  export const dotnet: string;
  export const clerk: string;
  export const singleSpa: string;
  export const azure: string;
  export const adobe: string;
  export const angular: string;
  export const docker: string;
  export const figma: string;
  export const git: string;
  export const html: string;
  export const javascript: string;
  export const nodejs: string;
  export const reactjs: string;
  export const tailwind: string;
  export const typescript: string;
  export const threejs: string;
}