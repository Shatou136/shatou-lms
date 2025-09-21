import { AdminCourseType } from "@/app/data/admin/admin-get-courses";
import { Card } from "@/components/ui/card";
import { useConstructUrl } from "@/hooks/use-construct-url";
import Image from "next/image";

interface iAppProps {
    data: AdminCourseType;
}

export function AdminCourseCard({data}: iAppProps) {
    const thumbnailUrl = useConstructUrl(data.fileKey)
    return (
        <Card className="group relative">
            {/* {absolute dropdown} */}

            <div></div>
            <Image src={thumbnailUrl} alt="Thumbnail Url" width={600} height={400}/>
        </Card>
    )
}

