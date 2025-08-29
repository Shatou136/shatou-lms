import { AdminCourseType } from "@/app/data/admin/admin-get-courses";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface iAppProps {
    data: AdminCourseType;
}

export function AdminCourseCard({data}: iAppProps) {
    return (
        <Card className="group relative">
            {/* {absolute dropdown} */}

            <div></div>
            <Image src={data.fileKey} alt="Thumbnail Url" width={600} height={400}/>
        </Card>
    )
}