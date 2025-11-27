import { FooterComponent, HeaderComponent, StructuredData } from "@/shared";
import { Hero, Navbar } from "@/widgets";
import { FC, PropsWithChildren } from "react";
import { WEBSITE_STRUCTURED_DATA } from "../data";

type LayoutProps = PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <StructuredData data={WEBSITE_STRUCTURED_DATA} />
            <HeaderComponent>
                <Navbar />
                <Hero />
            </HeaderComponent>
            {children}
            <FooterComponent />
        </>
    )
}