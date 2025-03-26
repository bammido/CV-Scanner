import { useState } from "react";
import Header from "../../components/header";
import DetailsSection from "./components/detailsSection";
import UploadSection from "./components/uploadSection";
import CVResume from "./components/cvResume";

interface IResumeCategoryItemValues {
  score: number;
  value: boolean;
  observation: string;
}

interface IResumeCategoryItem {
    item: string;
    values: IResumeCategoryItemValues
}

interface IResumeCategory {
    description: string;
    itens: IResumeCategoryItem[]
}

export interface ICVResume {
  data: {
    categories: IResumeCategory[]
  }
}

export default function Home() {
  const [cvResume, setCvResume] = useState<ICVResume | null>(null)

  function resetResume(){
    setCvResume(null)
  }
  
  return <div className="pt-20 flex flex-col">
    <Header />
    <div className="flex flex-col p-8 pt-20 gap-14">
        {!cvResume && <>
          <UploadSection handleCVResume={(resume: ICVResume) => setCvResume(resume)} />
          <DetailsSection />
        </>}
        {cvResume && <CVResume resetResume={resetResume} resume={cvResume} />}
    </div>

  </div>
}