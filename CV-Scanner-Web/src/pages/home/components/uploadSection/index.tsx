import { useRef, useState } from "react";
import { ICVResume } from "../..";
import Description from "../../../../components/description";
import FileUpload from "../../../../components/fileUpload";
import Highlight from "../../../../components/highlight";
import Title from "../../../../components/title";
import { cvScannerApi } from "../../../../service/api/cvScannerApi";
import InfiniteBar from "../../../../components/infiniteBar";

export default function UploadSection({ handleCVResume }: { handleCVResume: (resume: ICVResume) => void}) {
  const abortControllerRef = useRef<AbortController | null>(null);
  const [isLoading, setIsloading] = useState(false)

  async function handleChangeFile(file : null | File) {
    setIsloading(true)

    try {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const controller = new AbortController();
      abortControllerRef.current = controller;

      if(!file) {
        return
      }

      const formData = new FormData();
      formData.append('file', file);

      const result = await cvScannerApi.post<ICVResume>('api/cvResume', formData,  { signal: controller.signal });

      if(!result.data){
        return
      }

      handleCVResume(result.data);
    } finally {
      setIsloading(false)
    }
  }

    return <div className="flex flex-col gap-2">
    <Title>Quer um currículo que se <Highlight>destaque</Highlight>?</Title>
    <Description>Faça o teste agora e receba um feedback completo.</Description>
    {isLoading && <InfiniteBar />}
    <div className="self-center">
      <FileUpload 
        resetAfterChange={true}
        file={null}
        handleChangeFile={handleChangeFile}
        abortSignal={abortControllerRef.current}
        disabled={isLoading}
      />
    </div>
  </div>
}