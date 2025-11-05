import { FC } from "react";
import { About, Experience, Tech, Works, Feedback, Contact, Stars } from "@/widgets";

export const SinglePage: FC = () => {
    return (
        <main>
            <About />
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