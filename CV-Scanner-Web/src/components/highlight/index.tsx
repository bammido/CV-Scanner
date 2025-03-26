type HighlightContentProps = {
    children: React.ReactNode;
    text?: string;
} | {
    text: string;
    children?: React.ReactNode;
}

type HighlightProps = React.HTMLAttributes<HTMLSpanElement> & HighlightContentProps;

export default function Highlight({ text, children, ...rest} : HighlightProps) {
    const defaultClass = "text-blue-600 dark:text-blue-500"
    return <span className={defaultClass} {...rest}>{children || text}</span>
}