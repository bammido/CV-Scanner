type DescriptionContentProps = {
    children: React.ReactNode;
    text?: string;
} | {
    text: string;
    children?: React.ReactNode;
}

type DescriptionProps = React.ParamHTMLAttributes<HTMLParagraphElement> & DescriptionContentProps;

export default function Description({ text, children, ...rest} : DescriptionProps) {
    const defaultClass = "mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center"
    return <p className={defaultClass} {...rest}>{children || text}</p>
}