import { FC } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "@/shared"

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export const FeedbackCard: FC<FeedbackCardProps> = ({ index, testimonial, name, designation, company, image }) => {
  return (
    <motion.div 
    variants={fadeIn({ direction: "up", type: "spring", delay: index * 0.5, duration: 0.75 })}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white text-[18px] tracking-wider">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">              
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">{designation} of {company}</p>
          </div>
          <img src={image} alt={`feedback by ${name}`} className="w-10 h-10 rounded-full object-cover" />
        </div>
      </div>
    </motion.div>
  )
}