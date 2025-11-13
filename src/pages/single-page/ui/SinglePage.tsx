import { StarsCanvas } from "@/features";
import { AboutWithHOC, ContactWithHOC, ExperienceWithHOC, FeedbackWithHOC, TechWithHOC, WorksWithHOC } from "@/widgets";
import { FC } from "react";

export const SinglePage: FC = () => {
    return (
        <main className="relative z-0 bg-primary">
            <AboutWithHOC />
            <ExperienceWithHOC />
            <TechWithHOC />
            <WorksWithHOC />
            <FeedbackWithHOC />
            <section className="relative z-0" aria-label="Contact section">
                <ContactWithHOC />
                <StarsCanvas />
            </section>
        </main>
    )
}