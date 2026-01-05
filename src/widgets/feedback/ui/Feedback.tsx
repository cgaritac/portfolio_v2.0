import { Carousel, HOC } from "@/features"
import { SectionTitle, styles } from "@/shared"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { FeedbackCard } from "../components"
import { useTestimonials } from "../hooks"

const Feedback: FC = () => {
  const { t } = useTranslation();
  const testimonials = useTestimonials();

  return (
    <section className="mt-12 bg-green-50/10 rounded-[20px]" aria-labelledby="feedback-title">
      <header className={`${styles.padding} bg-green-100/10 rounded-2xl min-h-[300px] fade-bottom`}>
        <SectionTitle titleDescription={t("feedback.titleDescription")} title={t("feedback.title")} />
      </header>

      <div className={`${styles.paddingX} -mt-20 pb-14`} role="list" aria-label={t("feedback.ariaLabelTestimonials")}>
        <Carousel
          scrollAmount={350}
          ariaLabelPrev={t("feedback.ariaLabelPrev")}
          ariaLabelNext={t("feedback.ariaLabelNext")}
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={`testimonial-${index}`}
              role="listitem"
              className="snap-center shrink-0 first:ml-auto last:mr-auto"
            >
              <FeedbackCard
                index={index}
                testimonial={testimonial.testimonial}
                name={testimonial.name}
                designation={testimonial.designation}
                company={testimonial.company}
                image={testimonial.image}
              />
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export const FeedbackWithHOC = HOC({Component: Feedback, idName: 'feedback'})