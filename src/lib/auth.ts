// src/lib/auth.ts





import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

// Initialize better-auth with Prisma adapter
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),


  // ✅ trusted origins configuration
  trustedOrigins: [
    "http://localhost:3000",
    "https://food-hub-client-nu.vercel.app",
    "https://foodhub-server-ld0k.onrender.com",
  ],


// ✅ better-auth এর cookie configuration
  advanced: {
    defaultCookieAttributes: {
      sameSite: "none",
      secure: true,
      httpOnly: true,
    },
  },

  // ✅ user model configuration with additional fields
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "CUSTOMER",
      },
      phone: {
        type: "string",
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
      },
    },
  },

// ✅ email and password configuration
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },

  // ✅ email verification configuration with custom email template
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, token }) => {
      try {
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
            <td style="background:#f97316; color:#ffffff; text-align:center; padding:30px;">
              <h1 style="margin:0; font-size:28px;">FoodHub 🍱</h1>
              <p style="margin:5px 0 0; font-size:14px; opacity:0.9;">Delicious food, delivered fast</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 30px; color:#333;">
              <h2 style="color:#f97316; margin-top:0;">Verify Your Email</h2>
              <p style="font-size:16px;">Hi <strong>${user.name}</strong>,</p>
              <p style="font-size:15px; line-height:1.6;">
                Welcome to <strong>FoodHub</strong>! 🎉<br/>
                Please verify your email address to complete your registration and start ordering delicious food.
              </p>

              <!-- Button -->
              <div style="text-align:center; margin:35px 0;">
                <a href="${verificationLink}"
                   style="background:#f97316; color:#ffffff; padding:14px 32px; text-decoration:none; border-radius:8px; font-size:16px; font-weight:bold; display:inline-block;">
                  ✅ Verify Email
                </a>
              </div>

              <p style="font-size:13px; color:#666;">
                Or copy this link to your browser:<br/>
                <a href="${verificationLink}" style="color:#f97316; word-break:break-all;">${verificationLink}</a>
              </p>

              <hr style="border:none; border-top:1px solid #eee; margin:30px 0;"/>

              <p style="font-size:13px; color:#999;">
                If you didn't create a FoodHub account, you can safely ignore this email.
                This link will expire in <strong>24 hours</strong>.
              </p>

              <p style="font-size:14px;">— The FoodHub Team 🍱</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9; text-align:center; padding:20px; font-size:12px; color:#999;">
              © 2026 FoodHub. All rights reserved.<br/>
              <a href="${process.env.NEXT_PUBLIC_BASE_URL}" style="color:#f97316; text-decoration:none;">Visit FoodHub</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

        await transporter.sendMail({
          from: '"FoodHub 🍱" <noreply@foodhub.com>',
          to: user.email,
          subject: "✅ Verify your FoodHub email",
          html: htmlTemplate,
        });
      } catch (error) {
        console.error(error);
        throw new Error("Email send failed");
      }
    },
  },

  // ✅ social providers configuration
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});