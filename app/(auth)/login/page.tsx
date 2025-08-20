
// import { Session } from '../../../lib/generated/prisma/index';
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LoginForm } from "./_components/LoginForm";
import { auth } from "@/lib/auth";
;

export default async function Loginpage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if(session) {
        return redirect ("/");
    }
    return <LoginForm/>;
}