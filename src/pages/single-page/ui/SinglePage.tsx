import { FC } from "react";
import { AboutWithHOC, ExperienceWithHOC, TechWithHOC, Works, Feedback, Contact, Stars } from "@/widgets";

export const SinglePage: FC = () => {
    return (
        <main>
            <AboutWithHOC />
            <ExperienceWithHOC />
            <TechWithHOC />
            <Works />
            <Feedback />
            <section className="relative z-0">
                <Contact />
                <Stars />
            </section>
        </main>
    )
}