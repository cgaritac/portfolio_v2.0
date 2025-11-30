import { ContactForm, EarthCanvas, HOC } from "@/features"
import { SectionTitle, slideIn } from "@/shared"
import { motion } from "framer-motion"
import { FC } from "react"
import { useTranslation } from "react-i18next"

const Contact: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.article 
        variants={slideIn({ direction: "left", type: "tween", delay: 0.2, duration: 1 })} 
        className="flex-[0.75] bg-green-50/10 backdrop-blur-[2px] rounded-2xl p-8"
      >
        <header>
          <SectionTitle titleDescription={t("contact.titleDescription")} title={t("contact.title")} />
        </header>
        <ContactForm />
      </motion.article>

      <motion.aside 
        variants={slideIn({ direction: "right", type: "tween", delay: 0.2, duration: 1 })} 
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
        aria-label={t("contact.ariaLabelEarth")}
      >
        <EarthCanvas />
      </motion.aside>
    </div>
  )
}

export const ContactWithHOC = HOC({Component: Contact, idName: 'contact'})