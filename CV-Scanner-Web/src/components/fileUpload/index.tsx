import { useRef, useState } from "react";
import Button from "../button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = { 
    file: null | File;
    handleChangeFile: (file : null | File, fileRef: React.MutableRefObject< HTMLInputElement | null>) => void; 
    resetAfterChange?: boolean; 
    abortSignal?: AbortController | null;
    disabled?: boolean; 
}

export default function FileUpload({ file, handleChangeFile, resetAfterChange, abortSignal, disabled } : Props) {
    const [fileAux, setFileAux] = useState<File | null>(file)
    const fileRef = useRef<null | HTMLInputElement>(null)

    async function handleChangeFileAux(event: React.ChangeEvent<HTMLInputElement>) {
        if(!event.target.files){
            return
        }

        const selectedFile = event.target.files[0];

        if(!selectedFile) {
            return
        }

        setFileAux(selectedFile)

        await handleChangeFile(selectedFile, fileRef)

        if(resetAfterChange && fileRef?.current?.files?.length){
            setFileAux(null)
            fileRef.current.files = null
        }
    }

    return <div className="flex flex-col gap-2 border-2 border-purple-700 p-2">
        {!resetAfterChange && file?.name || fileAux?.name && <div className="flex gap-6 items-center">
            {fileAux?.name && <span>Arquivo: <b>{fileAux?.name}</b></span>}
            <Button 
                onClick={() => {
                    handleChangeFile(null, fileRef);

                    setFileAux(null)

                    if(fileRef.current?.files?.length){
                        fileRef.current.files = null
                    }

                    if(abortSignal){
                        abortSignal.abort()
                    }

                }}
            >
                <FontAwesomeIcon icon={faXmark} />
            </Button>
        </div>}

        <small className="text-danger font-bold">Extensões aceitas: .pdf</small>

        <Button 
            onClick={() => fileRef?.current?.click()}
            variant="solid-purple"
            text="subir cv"
            disabled={disabled}
        />

        <input 
            type="file" 
            accept=".pdf," 
            className="hidden"
            onChange={handleChangeFileAux}
            ref={fileRef}
            key={file?.name?? fileAux?.name}
            placeholder="subir cv"
        />
    </div>
}