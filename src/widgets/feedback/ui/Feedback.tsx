import { Carousel, HOC } from "@/features"
import { SectionTitle, styles } from "@/shared"
import { FC } from "react"
import { FeedbackCard } from "../components"
import { TESTIMONIALS } from "../content"

const Feedback: FC = () => {
  return (
    <section className="mt-12 bg-green-50/10 rounded-[20px]" aria-labelledby="feedback-title">
      <header className={`${styles.padding} bg-green-100/10 rounded-2xl min-h-[300px] fade-bottom`}>
        <SectionTitle titleDescription="What other say" title="Testimonials." />
      </header>
      <div className={`${styles.paddingX} -mt-20 pb-14`} role="list" aria-label="Client testimonials">
          <Carousel
          scrollAmount={350}
          ariaLabelPrev="Previous testimonials"
          ariaLabelNext="Next testimonials"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={`testimonial-${index}`}
              role="listitem"
              itemScope
              itemType="https://schema.org/Review"
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