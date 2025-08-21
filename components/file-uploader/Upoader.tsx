"use client";
import { useCallback, useState } from "react";
import {FileRejection, useDropzone} from "react-dropzone";
import { Card, CardContent } from '@/components/ui/card';
import { cn } from "@/lib/utils";
import { RenderEmptyState } from "./RenderState";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';
import { size } from "zod";

interface UploaderState {
  id: string | null;
  file: File | null;
  uploading: boolean;
  progress: number;
  key?: string;
  isDeleting: boolean;
  error: boolean;
  objectUrl?: string;
  fileType: "image" | "video";
}

export function Uploader() {

const [fileState, setFileState] = useState<UploaderState>({
  error: true,
  file: null,
  id: null,
  uploading: false,
  progress: 0,
  isDeleting: false,
  fileType: "image",
});

async function uploadFile(file: File) {
  setFileState((prev) => ({
   ...prev,
   uploading: true,
   progress: 0,
  }));
  

try {
  //1. Get presigned URL

  const preSignedResponse = await fetch("/api/s3/upload", {
    method: "POST",
    headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
      fileNName: file.name,
      contentType: file.type,
      size: file.size,
      isImage: true,
      }),
  });

  if(!preSignedResponse.ok) {
    toast.error("Failed to get presigned URL");
    setFileState((prev) => ({
   ...prev,
   uploading: false,
   progress: 0,
   error: true,
  }));

  return;
  
  }

  const { presignedUrl, key } = await preSignedResponse.json();

  await new promise((resolve, reject) => {
    const  
  })}
 
} catch {}


}

      const onDrop = useCallback((acceptedFiles: File[]) => {
  
   if(acceptedFiles.length > 0) {
    const file = acceptedFiles[0];
    
    setFileState({
      file: file,
      uploading: false,
      progress: 0,
      objectUrl: URL.createObjectURL(file),
      error: false,
      id:  uuidv4(),
      isDeleting: false,
      fileType: "image",
    });
   }
   
  }, []);

function rejectedFiles(fileRejection: FileRejection[]) {
 if(fileRejection.length) {
  const tooManyFiles = fileRejection.find(
    (rejection) => rejection.errors[0].code === "too-many-files");

    const fileSizeToBig = fileRejection.find((rejection) =>
    rejection.errors[0].code === "file-to-large ");

if(tooManyFiles) {
  toast.error("Too many files selected, maxis 1");
  if(fileSizeToBig) {
    toast.error("File Size exceed the limit")
  }
}
}
}

     const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {"image/*": [] },
        maxFiles: 1,
        multiple: false,
        maxSize: 5*1024*1024,
        onDropRejected: rejectedFiles,
       });

   
  return (
    <Card {...getRootProps()}
     className={cn(
        "relative border-2 border-dashed transition-colors duration-200 ease-in-out w-full h-64",
        isDragActive ? "bprder-primary bg-primary/10 border-solid" :
        "border-border hover:border-primary"
        )}
        >
     <
     CardContent className="flex items-center justify-center h-full w-full p-4">
          <input {...getInputProps()} />
          < RenderEmptyState isDragActive={isDragActive} />
     </CardContent>
    </Card>
  )
}