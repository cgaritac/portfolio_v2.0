import { FC } from "react";
import { AboutWithHOC, ExperienceWithHOC, TechWithHOC, WorksWithHOC, FeedbackWithHOC, ContactWithHOC, StarsWithHOC } from "@/widgets";

export const SinglePage: FC = () => {
    return (
        <main>
            <AboutWithHOC />
            <ExperienceWithHOC />
            <TechWithHOC />
            <WorksWithHOC />
            <FeedbackWithHOC />
            <section className="relative z-0">
                <ContactWithHOC />
                <StarsWithHOC />
            </section>
        </main>
    )
}