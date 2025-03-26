type ButtonContentProps = {
    children: React.ReactNode;
    text?: string;
} | {
    text: string;
    children?: React.ReactNode;
}

type ButtonType = {
    variant?: 'default' | 'dark' | 'solid-purple' | 'outlined-purple';
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonContentProps & ButtonType;

export default function Button({variant, children, text, ...rest}: ButtonProps) {
    let className = ''
    
    switch(variant) {
        case 'dark':
            className = "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            break
        case 'solid-purple':
            className = "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            break
        case 'outlined-purple':
            className = "focus:outline-none border-purple-700 border-2 text-gray-900 hover:bg-purple-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:text-white dark:hover:bg-purple-400 dark:focus:ring-purple-900"
            break
        default:
            className = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            break
    }

    return <button className={`${className} ${rest.disabled? 'opacity-50 cursor-not-allowed' : ''}`} {...rest} >{children || text}</button>
}