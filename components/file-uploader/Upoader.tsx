"use client";
import { useCallback } from "react";
import {useDropzone} from "react-dropzone";
import { Card } from '@/components/ui/card';
import { cn } from "@/lib/utils";


export function Uploader() {
      const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
     const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop });

   
  return (
    <Card {...getRootProps()}
     className={cn(
        "relative border-2 border-dashed transition-colors duration-200 ease-in-out w-full h-64",
        isDragActive ? "bprder-primary bg-primary/10 border-solid" :
        "border-border hover:border-primary"
        )}
        >
      <input {...getInputProps()} />
      
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </Card>
  )
}