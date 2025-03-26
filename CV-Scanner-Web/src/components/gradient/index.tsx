type GradientContentProps = {
    children: React.ReactNode;
    text?: string;
} | {
    text: string;
    children?: React.ReactNode;
}

type IGradientProps = React.HTMLAttributes<HTMLSpanElement> & GradientContentProps;

export default function Gradient({ text, children, ...rest} : IGradientProps) {
    const defaultClass = "text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
    return <span className={defaultClass} {...rest}>{children || text}</span>
}