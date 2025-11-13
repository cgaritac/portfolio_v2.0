import { FooterComponent, HeaderComponent, StructuredData } from "@/shared";
import { Hero, Navbar } from "@/widgets";
import { FC, PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

// Structured data for the portfolio website
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CGC Portfolio",
  "url": "https://cgarita.web.app",
  "description": "Portfolio of Carlos Garita Campos - Full Stack Developer specializing in React, TypeScript, .NET, Python, and modern web technologies.",
  "author": {
    "@type": "Person",
    "name": "Carlos Garita Campos",
    "email": "cgaritac@gmail.com",
    "url": "https://cgarita.web.app",
    "sameAs": [
      "https://www.linkedin.com/in/carlos-garita-campos-44881a111"
    ]
  }
};

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <StructuredData data={websiteStructuredData} />
            <HeaderComponent>
                <Navbar />
                <Hero />
            </HeaderComponent>
            {children}
            <FooterComponent />
        </>
    )
}