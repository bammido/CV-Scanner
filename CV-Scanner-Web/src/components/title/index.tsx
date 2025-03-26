type TitleContentProps = {
    children: React.ReactNode;
    text?: string;
} | {
    text: string;
    children?: React.ReactNode;
}

type ITitleProps = React.HTMLAttributes<HTMLHeadingElement> & TitleContentProps & { variant?: 'h1' | 'h2' };

export default function Title({ text, children, variant, ...rest} : ITitleProps) {
    const defaultClass = "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center"
    
    let className = ""

    switch(variant){
        case "h1":
             className = defaultClass
             break
        case "h2":
            className = "text-4xl font-extrabold dark:text-white text-center"
            break
        default: 
            className = defaultClass
            break
    }
    
    return <h1 className={className} {...rest}>{children || text}</h1>
}