type CardContentProps = {
    children: React.ReactNode;
}

type ICardProps = React.HTMLAttributes<HTMLDivElement> & CardContentProps;

export default function Card({ children, ...rest} : ICardProps) {
    const defaultClass = "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    return <div className={defaultClass} {...rest}>{children}</div>
}