import { HOC } from "@/features"
import { FC } from "react"
import { SectionTitle, styles } from "@/shared"
import { TESTIMONIALS } from "../content"
import { FeedbackCard } from "../components"

const Feedback: FC = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <SectionTitle titleDescription="What other say" title="Testimonials." />
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {TESTIMONIALS.map((testimonial, index) => (
          <FeedbackCard 
            key={`testimonial-${index}`} 
            index={index} 
            testimonial={testimonial.testimonial} 
            name={testimonial.name} 
            designation={testimonial.designation} 
            company={testimonial.company} 
            image={testimonial.image} 
          />
        ))}
      </div>
    </div>
  )
}

export const FeedbackWithHOC = HOC({Component: Feedback, idName: 'feedback'})