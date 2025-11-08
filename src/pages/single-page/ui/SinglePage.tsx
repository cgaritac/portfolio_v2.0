import { FC } from "react";
import { AboutWithHOC, Experience, Tech, Works, Feedback, Contact, Stars } from "@/widgets";

export const SinglePage: FC = () => {
    return (
        <main>
            <AboutWithHOC />
            <Experience />
            <Tech />
            <Works />
            <Feedback />
            <section className="relative z-0">
                <Contact />
                <Stars />
            </section>
        </main>
    )
}