import { useMemo } from "react";
import { ICVResume } from "../..";
import Accordion from "../../../../components/accordion";
import Title from "../../../../components/title";
import Highlight from "../../../../components/highlight";
import Button from "../../../../components/button";

export default function CVResume({ resume, resetResume }: { resume: ICVResume, resetResume: () => void}) {
    const memoResume = useMemo(()=> resume.data.categories.map(cat => {
        const averageScoreCategory = cat.itens.reduce((accumulator, next) => accumulator + next.values.score, 0) / cat.itens.length

        return { ...cat, avg: averageScoreCategory}
    }), [resume])

    const avgSocreResume = memoResume.reduce((accumulator, next) => accumulator + next.avg, 0) / memoResume.length;

    return <div className="flex gap-14 relative">

        <div className="w-1/3 sticky left-0 top-0 border-r-2">
            {memoResume.map(category => <div>
                {category.description} {Math.floor(category.avg)}
                <ol className="text-blue-700 p-4">
                    {category.itens.map(item => <li>{item.item} {item.values.score}</li>)}
                </ol>
            </div>)}
        </div>

        <div className="grow">
            <div className="flex justify-end">
                <Button onClick={resetResume}>Avaliar outro currículo</Button>
            </div>
            <Title><Highlight>{Math.floor(avgSocreResume)} / 10</Highlight></Title>
            <Accordion 
                components={memoResume.map(category => ({ 
                    header: category.description, 
                    body: <div className="p-5 bg-gray-700">
                        <Accordion 
                            components={category.itens.map(item => ({ 
                                header: item.item, 
                                body: <div className="p-5">
                                    {item.values.observation}
                                </div>,
                                key: item.item,
                                initializeOpenned: true
                            }))}
                        />
                    </div>,
                    key: category.description,
                    initializeOpenned: true
                }))}
            />
        </div>

    </div>
} 