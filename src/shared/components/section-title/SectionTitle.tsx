import { styles } from "@/shared/styles/styles"
import { textVariant } from "@/shared"
import { motion } from "framer-motion"

interface SectionTitleProps {
    titleDescription: string;
    title: string;
}

export const SectionTitle = ({ titleDescription, title }: SectionTitleProps) => {
    return (
        <motion.div variants={textVariant({ delay: 0.1 })}>
            <p className={styles.sectionSubText}>
                {titleDescription}
            </p>
            <h2 className={styles.sectionHeadText}>
                {title}
            </h2>
        </motion.div>
    )
}