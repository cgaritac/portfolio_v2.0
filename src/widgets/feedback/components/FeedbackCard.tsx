import { fadeIn } from "@/shared";
import { motion } from "framer-motion";
import { FC } from "react";

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
    <motion.article 
      variants={fadeIn({ direction: "up", type: "spring", delay: index * 0.5, duration: 0.75 })}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <blockquote className="mt-1">
        <p className="text-white font-black text-[48px] leading-none" aria-hidden="true">"</p>
        <p className="text-white text-[18px] tracking-wider">{testimonial}</p>
        <footer className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <cite className="text-white font-medium text-[16px] not-italic">              
              <span className="blue-text-gradient">@</span>
              {name}
            </cite>
            <p className="mt-1 text-secondary text-[12px]">{designation} of {company}</p>
          </div>
          <img 
            src={image} 
            alt={`${name} profile picture`} 
            title={`${name} - ${designation} at ${company}`}
            className="w-10 h-10 rounded-full object-cover" 
          />
        </footer>
      </blockquote>
    </motion.article>
  )
}