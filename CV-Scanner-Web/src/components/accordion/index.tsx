/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"

type AccodionComponent = {
    header: string,
    body: React.ReactNode,
    key: number | string,
    initializeOpenned: boolean
}

interface IAccordionProps {
    components: AccodionComponent[]
}

export default function Accordion({ components } : IAccordionProps) {
    const [itensOpened, setItensOpened] = useState<Record<any, boolean>>(() => {
        const itens: Record<any, boolean> = {}
        
        for(let i= 0; i < components.length; i++) {
            const comp = components[i]

            itens[`${comp.key}`] = !!comp.initializeOpenned
        }

        return itens
    })

    return <>
        {components?.length && <div id="accordion-open" data-accordion="open">
            {components.map( comp =><>
                <h2 id={`${comp.key}`}>
                    <button type="button" className="bg-dark flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" 
                        onClick={() => setItensOpened(prev => ({...prev, [comp.key]: !prev[comp.key]}))}
                    >
                        <span className="flex items-center">{comp.header}</span>
                        <svg data-accordion-icon className={`w-3 h-3 ${itensOpened[comp.key]? '': 'rotate-180' } shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                </h2>
                <div id={`${comp.key}`} className={`${itensOpened[comp.key]? '': 'hidden'}`}>
                    {comp.body}
                </div>
            </>)}
        </div>}
    </>
}