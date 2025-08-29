
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { emailOTP } from "better-auth/plugins";
import { resend } from "./resend";
import env from "./env";
import { admin } from "better-auth/plugins";

 
export const auth = betterAuth({
 database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    socialProviders: {
        github: {
            clientId: env.AUTH_GITHUB_CLIENT_ID,
            clientSecret: env.AUTH_GITHUB_SECRET, 
        }
    },
    

    plugins: [
        emailOTP({
            async sendVerificationOTP({email, otp }) {
                   await resend.emails.send({
    from: 'ShatouLMS <onboarding@resend.dev>',
    to: [email],
    subject: "ShatouLMS - Verify your email",
    html:`<p>Your OTP is <strong>${otp}</strong></p>`,
  });

            },
        }),
        admin(),
    ],
});

