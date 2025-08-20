import { ReactNode } from "react";
import { Navbar } from "./_component/Navbar";

export default function LayoutPublic({children}: { children: ReactNode }) {
    return (
        <div>
            <Navbar />
            <main className="container mx-auto md:px-6 lg:px-8">{children}</main>
        </div>
    )
}