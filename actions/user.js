"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("user not found");

  try {
    const result = await db.$transaction(
      async (tx) => {
        let IndustryInsight = await tx.IndustryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });

        if (!IndustryInsight) {
          const insights = await generateAIInsights(data.industry);

          IndustryInsight = await db.industryInsight.create({
            data: {
              industry: data.industry,
              ...insights,
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        }

        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        return { updatedUser, IndustryInsight };
      },
      { timeout: 10000 }
    );
    return { success: true, ...result };
  } catch (err) {
    throw new Error("Failed to update profile" + err.message);
  }
}

export async function getUserOnBoardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("user not found");

  try {
    const userr = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!userr?.industry,
    };
  } catch (err) {
    throw new Error("Failed to check onboarding status");
  }
}
