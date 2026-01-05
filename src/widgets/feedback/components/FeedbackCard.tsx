import { fadeIn } from "@/shared";
import { motion } from "framer-motion";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export const FeedbackCard: FC<FeedbackCardProps> = ({ index, testimonial, name, designation, company, image }) => {
  const { t } = useTranslation();

  return (
    <motion.article
      variants={fadeIn({ direction: "up", type: "spring", delay: index * 0.5, duration: 0.75 })}
      className="bg-green-100/15 backdrop-blur-md xs:p-10 p-4 rounded-3xl xs:w-[320px] w-[190px] min-h-[380px]"
    >
      <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Service" className="hidden">
        <span itemProp="name">Full Stack Development Services</span>
        <span itemProp="description">Web development and software engineering services</span>
        <span itemProp="provider" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">Carlos Garita Campos</span>
        </span>
      </div>

      <blockquote className="mt-1">
        <p className="text-white font-black xs:text-[48px] text-[32px] leading-none" aria-hidden="true">"</p>
        <p itemProp="reviewBody" className="text-white xs:text-[18px] text-[14px] tracking-wider xs:min-h-[230px] min-h-[210px]">{testimonial}</p>
        <footer className="xs:mt-7 mt-4 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <cite itemProp="author" itemScope itemType="https://schema.org/Person" className="text-white font-medium xs:text-[16px] text-[12px] not-italic">
              <span className="blue-text-gradient">@</span>
              <span itemProp="name">{name}</span>
            </cite>
            <p className="mt-1 text-secondary xs:text-[12px] text-[10px]">{designation} of {company}</p>
          </div>
          <img
            src={image}
            alt={t(`feedback.testimonials.${name}.imageAlt`)}
            title={t(`feedback.testimonials.${name}.imageTitle`)}
            className="w-10 h-10 rounded-full object-cover"
          />
        </footer>
      </blockquote>
    </motion.article>
  )
}