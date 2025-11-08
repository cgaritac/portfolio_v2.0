import { FC } from "react";
import { AboutWithHOC, ExperienceWithHOC, Tech, Works, Feedback, Contact, Stars } from "@/widgets";

export const SinglePage: FC = () => {
    return (
        <main>
            <AboutWithHOC />
            <ExperienceWithHOC />
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