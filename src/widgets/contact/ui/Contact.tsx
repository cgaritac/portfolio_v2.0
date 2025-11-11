import { HOC } from "@/features"
import { FC } from "react"
import { motion } from "framer-motion"
import { slideIn, SectionTitle } from "@/shared"
import { EarthCanvas, ContactForm } from "@/features"

const Contact: FC = () => {  
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div 
        variants={slideIn({ direction: "left", type: "tween", delay: 0.2, duration: 1 })} 
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <SectionTitle titleDescription="Get in touch" title="Contact." />
        <ContactForm />
      </motion.div>

      <motion.div 
        variants={slideIn({ direction: "right", type: "tween", delay: 0.2, duration: 1 })} 
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export const ContactWithHOC = HOC({Component: Contact, idName: 'contact'})