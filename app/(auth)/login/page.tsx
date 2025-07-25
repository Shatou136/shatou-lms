"use client";
import { auth } from "@/lib/auth";
import { LoginForm } from "./_components/LoginForm";

export default function Loginpage() { 
const session= await auth.api.getsession

    
    return (
        <LoginForm />;
    )
}