import { FC } from "react";
import { AboutWithHOC, ExperienceWithHOC, TechWithHOC, WorksWithHOC, FeedbackWithHOC, ContactWithHOC } from "@/widgets";
import { StarsCanvas } from "@/features";

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
                <StarsCanvas />
            </section>
        </main>
    )
}