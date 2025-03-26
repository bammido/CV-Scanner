import Card from "../../../../components/card";
import Gradient from "../../../../components/gradient";
import Highlight from "../../../../components/highlight";
import Title from "../../../../components/title";

export default function DetailsSection() {
    return <div className="flex gap-6 flex-col items-center grow bg-slate-300 dark:bg-gray-700 py-4 px-2">

    <Title variant="h2"><Highlight>Otimize</Highlight> seu currículo para passar nos sistemas de seleção automatizada.</Title>
    
    <p>Nosso verificador de currículos utiliza <Highlight>inteligência artificial</Highlight> para analisar seu documento e identificar áreas que podem ser <Highlight>aprimoradas</Highlight>. Ele avalia:</p>
    
    <ul className="flex flex-col gap-16 md:flex-row">
    <Card>
        <li className="flex flex-col gap-4">
        <Title variant="h2"><Gradient>Compatibilidade com ATS</Gradient></Title> 
        <p>Verifica se seu currículo está formatado corretamente e contém as palavras-chave certas para passar pelos filtros automáticos das empresas.</p>
        </li>
    </Card>

    <Card>
        <li className="flex flex-col gap-4">
        <Title variant="h2"><Gradient>Qualidade do Conteúdo</Gradient></Title>
        <p>Analisa a clareza, concisão e impacto do seu texto, além de identificar suas conquistas e habilidades mais relevantes.</p>
        </li>
    </Card>
    </ul>
    <p><b>Com nosso verificador, você aumenta suas chances de ser selecionado para as entrevistas e de conseguir o emprego dos seus sonhos.</b></p>
</div>
}