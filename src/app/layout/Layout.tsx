import { FC } from "react";
import { PropsWithChildren } from "react";
import { HeaderComponent, FooterComponent } from "@/shared";
import { Navbar, Hero } from "@/widgets";

type LayoutProps = PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative z-0 bg-primary">
            <HeaderComponent>
                <Navbar />
                <Hero />
            </HeaderComponent>
            {children}
            <FooterComponent />
        </div>
    )
}