interface ParagraphsSplitProps {
    text: string;
}

export const ParagraphSplitter = ({ text }: ParagraphsSplitProps) => {
    return text.split('\n')
        .filter(paragraph => paragraph.trim() !== '')
        .map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
        ));
}