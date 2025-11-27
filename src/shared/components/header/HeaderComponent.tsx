import { PropsWithChildren, FC } from "react";

type HeaderComponentProps = PropsWithChildren;

export const HeaderComponent: FC<HeaderComponentProps> = ({ children }) => {
    return (
        <header className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
            {children}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-b from-transparent to-primary" />
        </header>
    )
}