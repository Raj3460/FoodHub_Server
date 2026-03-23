// src/lib/auth.ts

import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

//nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

// Initialize better-auth with Prisma adapter
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  trustedOrigins: [process.env.NEXT_PUBLIC_BASE_URL!], // Add your frontend URL here
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "CUSTOMER",
        required: false,
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
        required: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      try {
        // Implement your email sending logic here using your preferred email service
        const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${token}`;
        const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body style="margin:0; padding:0; background:#f4f4f4; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
    <tr>
      <td align="center">

        <table width="600" style="background:#ffffff; border-radius:10px; overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background:#4f46e5; color:#ffffff; text-align:center; padding:20px;">
              <h1>FoodHub 🍱</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; color:#333;">
              <h2>Email Verification</h2>

              <p>Hi ${user.name},</p>

              <p>
                Thanks for signing up to <b>FoodHub</b>!  
                Please verify your email by clicking the button below.
              </p>

              <!-- Button -->
              <div style="text-align:center; margin:30px 0;">
                <a href="${verificationLink}" 
                   style="background:#4f46e5; color:#fff; padding:12px 25px; text-decoration:none; border-radius:6px; font-weight:bold;">
                  Verify Email
                </a>
              </div>

              <p>If you didn’t create this account, you can ignore this email.</p>

              <p>— FoodHub Team</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9; text-align:center; padding:15px; font-size:12px; color:#777;">
              © 2026 FoodHub. All rights reserved.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

        //implementing nodemailer according to nodemailer documentation
        const info = await transporter.sendMail({
          from: '"FoodHub" <FoodHub@gmail.com>',
          to: user.email,
          subject: "Please verify your email",
          html: htmlTemplate, // HTML version of the message
        });
      } catch (error) {
        console.error(error);
        throw new Error("Failed to send verification email");
      }
    },
  },
  socialProviders: {
    google: {
      prompt: "select_account consent", // Prompt user to select an account
      accessType: "offline", // Request offline access for refresh tokens
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
