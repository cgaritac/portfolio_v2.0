import { styles, textVariant } from "@/shared";
import { motion } from "framer-motion";

interface SectionTitleProps {
    titleDescription: string;
    title: string;
}

export const SectionTitle = ({ titleDescription, title }: SectionTitleProps) => {
    const titleId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-title';
    
    return (
        <motion.div variants={textVariant({ delay: 0.1 })}>
            <p className={styles.sectionSubText}>
                {titleDescription}
            </p>
            <h2 id={titleId} className={styles.sectionHeadText}>
                {title}
            </h2>
        </motion.div>
    )
}