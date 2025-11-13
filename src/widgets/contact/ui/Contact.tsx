import { ContactForm, EarthCanvas, HOC } from "@/features"
import { SectionTitle, slideIn } from "@/shared"
import { motion } from "framer-motion"
import { FC } from "react"

const Contact: FC = () => {  
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.article 
        variants={slideIn({ direction: "left", type: "tween", delay: 0.2, duration: 1 })} 
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <header>
          <SectionTitle titleDescription="Get in touch" title="Contact." />
        </header>
        <ContactForm />
      </motion.article>

      <motion.aside 
        variants={slideIn({ direction: "right", type: "tween", delay: 0.2, duration: 1 })} 
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
        aria-label="3D Earth visualization"
      >
        <EarthCanvas />
      </motion.aside>
    </div>
  )
}

export const ContactWithHOC = HOC({Component: Contact, idName: 'contact'})