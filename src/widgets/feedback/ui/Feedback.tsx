import { HOC } from "@/features"
import { SectionTitle, styles } from "@/shared"
import { FC } from "react"
import { FeedbackCard } from "../components"
import { TESTIMONIALS } from "../content"

const Feedback: FC = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <header className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <SectionTitle titleDescription="What other say" title="Testimonials." />
      </header>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`} role="list">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={`testimonial-${index}`} role="listitem">
            <FeedbackCard 
              index={index} 
              testimonial={testimonial.testimonial} 
              name={testimonial.name} 
              designation={testimonial.designation} 
              company={testimonial.company} 
              image={testimonial.image} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export const FeedbackWithHOC = HOC({Component: Feedback, idName: 'feedback'})