"use strict";
// // src/lib/auth.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
// import { betterAuth } from "better-auth";
// import { prismaAdapter } from "better-auth/adapters/prisma";
// import { prisma } from "./prisma";
// import nodemailer from "nodemailer";
// //nodemailer
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // Use true for port 465, false for port 587
//   auth: {
//     user: process.env.APP_USER,
//     pass: process.env.APP_PASS,
//   },
// });
// // Initialize better-auth with Prisma adapter
// export const auth = betterAuth({
//   database: prismaAdapter(prisma, {
//     provider: "postgresql", // or "mysql", "postgresql", ...etc
//   }),
//   trustedOrigins: [process.env.NEXT_PUBLIC_BASE_URL!], // Add your frontend URL here
//   user: {
//     additionalFields: {
//       role: {
//         type: "string",
//         defaultValue: "CUSTOMER",
//         required: false,
//       },
//       phone: {
//         type: "string",
//         required: false,
//       },
//       status: {
//         type: "string",
//         defaultValue: "ACTIVE",
//         required: false,
//       },
//     },
//   },
//   emailAndPassword: {
//     enabled: true,
//     autoSignIn: false,
//     requireEmailVerification: true,
//   },
//   emailVerification: {
//     sendOnSignUp: true,
//     autoSignInAfterVerification: true,
//     sendVerificationEmail: async ({ user, url, token }, request) => {
//       try {
//         // Implement your email sending logic here using your preferred email service
//         const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${token}`;
//         const htmlTemplate = `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
// </head>
// <body style="margin:0; padding:0; background:#f4f4f4; font-family:Arial, sans-serif;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
//     <tr>
//       <td align="center">
//         <table width="600" style="background:#ffffff; border-radius:10px; overflow:hidden;">
//           <!-- Header -->
//           <tr>
//             <td style="background:#4f46e5; color:#ffffff; text-align:center; padding:20px;">
//               <h1>FoodHub 🍱</h1>
//             </td>
//           </tr>
//           <!-- Body -->
//           <tr>
//             <td style="padding:30px; color:#333;">
//               <h2>Email Verification</h2>
//               <p>Hi ${user.name},</p>
//               <p>
//                 Thanks for signing up to <b>FoodHub</b>!  
//                 Please verify your email by clicking the button below.
//               </p>
//               <!-- Button -->
//               <div style="text-align:center; margin:30px 0;">
//                 <a href="${verificationLink}" 
//                    style="background:#4f46e5; color:#fff; padding:12px 25px; text-decoration:none; border-radius:6px; font-weight:bold;">
//                   Verify Email
//                 </a>
//               </div>
//               <p>If you didn’t create this account, you can ignore this email.</p>
//               <p>— FoodHub Team</p>
//             </td>
//           </tr>
//           <!-- Footer -->
//           <tr>
//             <td style="background:#f9f9f9; text-align:center; padding:15px; font-size:12px; color:#777;">
//               © 2026 FoodHub. All rights reserved.
//             </td>
//           </tr>
//         </table>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>
// `;
//         //implementing nodemailer according to nodemailer documentation
//         const info = await transporter.sendMail({
//           from: '"FoodHub" <FoodHub@gmail.com>',
//           to: user.email,
//           subject: "Please verify your email",
//           html: htmlTemplate, // HTML version of the message
//         });
//       } catch (error) {
//         console.error(error);
//         throw new Error("Failed to send verification email");
//       }
//     },
//   },
//   socialProviders: {
//     google: {
//       prompt: "select_account consent", // Prompt user to select an account
//       accessType: "offline", // Request offline access for refresh tokens
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     },
//   },
// });
const better_auth_1 = require("better-auth");
const prisma_1 = require("better-auth/adapters/prisma");
const prisma_2 = require("./prisma");
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASS,
    },
});
// Initialize better-auth with Prisma adapter
const frontendOrigin = process.env.FRONTEND_URL ??
    process.env.NEXT_PUBLIC_BASE_URL ??
    "http://localhost:3000";
const trustedOrigins = Array.from(new Set([
    "http://localhost:3000",
    "https://food-hub-client-nu.vercel.app",
    frontendOrigin,
    "https://foodhub-server-ld0k.onrender.com",
]));
exports.auth = (0, better_auth_1.betterAuth)({
    database: (0, prisma_1.prismaAdapter)(prisma_2.prisma, {
        provider: "postgresql",
    }),
    baseURL: {
        protocol: "auto",
        allowedHosts: ["localhost:3000", "food-hub-client-nu.vercel.app", "*.vercel.app"],
        fallback: frontendOrigin,
    },
    // ✅ trusted origins configuration
    trustedOrigins,
    // ✅ better-auth এর cookie configuration
    advanced: {
        trustedProxyHeaders: true,
        defaultCookieAttributes: {
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
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
            }
            catch (error) {
                console.error(error);
                throw new Error("Email send failed");
            }
        },
    },
    // ✅ social providers configuration
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});
//# sourceMappingURL=auth.js.map