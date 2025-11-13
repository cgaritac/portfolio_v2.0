import { HOC } from "@/features"
import { SectionTitle, styles } from "@/shared"
import { FC } from "react"
import { FeedbackCard } from "../components"
import { TESTIMONIALS } from "../content"

const Feedback: FC = () => {
  return (
    <section className="mt-12 bg-black-100 rounded-[20px]" aria-labelledby="feedback-title">
      <header className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <SectionTitle titleDescription="What other say" title="Testimonials." />
      </header>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`} role="list" aria-label="Client testimonials">
        {TESTIMONIALS.map((testimonial, index) => (
          <article key={`testimonial-${index}`} role="listitem" itemScope itemType="https://schema.org/Review">
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
      </div>
    </section>
  )
}

export const FeedbackWithHOC = HOC({Component: Feedback, idName: 'feedback'})