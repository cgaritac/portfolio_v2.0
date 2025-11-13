import { FooterComponent, HeaderComponent } from "@/shared";
import { Hero, Navbar } from "@/widgets";
import { FC, PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <HeaderComponent>
                <Navbar />
                <Hero />
            </HeaderComponent>
            {children}
            <FooterComponent />
        </>
    )
}