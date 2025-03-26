type MarkContentProps = {
    children: React.ReactNode;
    text?: string;
} | {
    text: string;
    children?: React.ReactNode;
}

type IMarkProps = React.HTMLAttributes<HTMLSpanElement> & MarkContentProps;

export default function Mark({ text, children, ...rest} : IMarkProps) {
    const defaultClass = "px-2 text-white bg-blue-600 rounded dark:bg-blue-500"
    return <mark className={defaultClass}{...rest}>{children || text}</mark>
}