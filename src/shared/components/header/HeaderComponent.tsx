import { PropsWithChildren, FC } from "react";

type HeaderComponentProps = PropsWithChildren;

export const HeaderComponent: FC<HeaderComponentProps> = ({ children }) => {
    return (
        <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            {children}
        </header>
    )
}