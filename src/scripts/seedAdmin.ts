// src/scripts/seedAdmin.ts
import { prisma } from "../lib/prisma";
import { UserRole } from "../middlewares/auth";

async function seedAdmin() {
  console.log("***** Admin Seeding Started....");

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminName = process.env.ADMIN_NAME || "Admin";
  // লোকাল ব্যাকএন্ডের URL (অথবা প্রোডাকশন URL)
  const baseUrl = process.env.BETTER_AUTH_URL || "http://localhost:5000";
  const signUpUrl = `${baseUrl}/api/auth/sign-up/email`;

  if (!adminEmail || !adminPassword) {
    console.error("❌ ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env");
    process.exit(1);
  }

  try {
    // চেক করুন অ্যাডমিন ইতিমধ্যে আছে কিনা
    const existingUser = await prisma.user.findUnique({
      where: { email: adminEmail },
    });
    if (existingUser) {
      console.log("⚠️ Admin already exists. Skipping creation.");
      return;
    }

    // BetterAuth সাইন-আপ কল – Origin হেডার সহ
    const response = await fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Origin": "http://localhost:5000",   // ← এই লাইনটি গুরুত্বপূর্ণ
      },
      body: JSON.stringify({
        name: adminName,
        email: adminEmail,
        password: adminPassword,
        role: UserRole.ADMIN,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Sign-up failed (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    const userId = data.user?.id;
    if (!userId) {
      throw new Error("No user ID returned from sign-up");
    }

    console.log("✅ Admin user created. Updating email verification...");

    await prisma.user.update({
      where: { id: userId },
      data: { emailVerified: true, role: UserRole.ADMIN },
    });

    console.log("🎉 Admin seeding completed successfully.");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seedAdmin();