import { cn } from "@/lib/utils";
import { CloudUploadIcon, ImageIcon, XIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
import Image from "next/image";

export function RenderEmptyState({isDragActive}: {isDragActive: boolean}) {
    return(
<div className="text-center">

    <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-muted mb-4">
        <CloudUploadIcon className={cn(
            "size-6 text-muted-foreground",
             isDragActive && "text-primary" 
            )}
             />
    </div>
    <p className="text-base font-semibold text-foreground">
        Drop your files here or <span className="text-primary font-bold
        cursor-pointer">Click to upload</span> 
    </p>
    <Button type="buttton" className="mt-4">Select File</Button>
</div>
    )
}

export function RenderErrorState() {
    return (
        <div className="text-center">
        <div className="flex items-center mx-auto justify-center size-12 
        rounded-full bg-destructive/30 mb-4">
        <ImageIcon className={cn("size-6 text-destruvtive" )} />
        </div>

        <p className="text-base font-semibold">Upload Failed</p>
         <p className="text-xs mt-1 text-muted-foreground">Something went wrong</p>
         
         <Button type="button" className="mt-4">
            Retry File Selection
            </Button>
    
        </div>
    )
}

export function RenderUploadedState({ previewUrl }: {previewUrl: string }) {
    return (
         <div>
        <Image 
        src={previewUrl}
             alt="Uploaded File" 
             fill
              className="object-contain p-2" 
              />
              <Button variant="destructive" size="icon" className={cn(
                "absolute top-4 right-4" )}
                >
            <XIcon className="size-4" />
              </Button>
    </div>
 );
}


export function RenderUploadingState({
    progess, file
}: {
    progrss: number;
    file: File;
}) 
    { 
        return (
            <div className="text-center flex justify-center items-center flex-col"
             >

            </div>
        )

}