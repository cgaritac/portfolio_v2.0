import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

type RouterProviderProps = PropsWithChildren;

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}