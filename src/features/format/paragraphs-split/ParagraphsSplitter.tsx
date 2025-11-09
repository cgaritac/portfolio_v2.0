interface ParagraphsSplitProps {
    text: string;
    className?: string;
}

export const ParagraphSplitter = ({ text, className }: ParagraphsSplitProps) => {
    return text.split('\n')
        .filter(paragraph => paragraph.trim() !== '')
        .map((paragraph, index) => (
            <p key={index} className={`${className}`}>{paragraph.trim()}</p>
        ));
}