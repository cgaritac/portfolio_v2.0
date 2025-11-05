import { PropsWithChildren } from "react";
import { HeaderComponent, FooterComponent } from "@/widgets";

type LayoutProps = PropsWithChildren;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative z-0 bg-primary">
            <HeaderComponent/>
            {children}
            <FooterComponent />
        </div>
    )
}