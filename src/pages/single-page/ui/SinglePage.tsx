import { StarsCanvas } from "@/features";
import { AboutWithHOC, ContactWithHOC, ExperienceWithHOC, FeedbackWithHOC, TechWithHOC, WorksWithHOC } from "@/widgets";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const SinglePage: FC = () => {
    const { t } = useTranslation();

    return (
        <main className="relative z-0 bg-primary">
            <AboutWithHOC />
            <ExperienceWithHOC />
            <TechWithHOC />
            <WorksWithHOC />
            <FeedbackWithHOC />
            <section className="relative z-0" aria-label={t("contact.ariaLabelSection")}>
                <ContactWithHOC />
                <StarsCanvas />
            </section>
        </main>
    )
}