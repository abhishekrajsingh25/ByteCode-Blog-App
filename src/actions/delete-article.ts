"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteArticle = async (articleId: string) => {
  // Delete related Likes
  await prisma.like.deleteMany({
    where: { articleId },
  });

  // Delete related Comments
  await prisma.comment.deleteMany({
    where: { articleId },
  });

  await prisma.articles.delete({
    where: {
      id: articleId,
    },
  });
  revalidatePath("/dashboard");
};
