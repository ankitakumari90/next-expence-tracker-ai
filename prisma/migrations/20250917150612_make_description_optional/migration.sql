/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Record" DROP CONSTRAINT "Record_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Record" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "category" SET DEFAULT 'Other';

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "image",
ADD COLUMN     "imageUrl" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Record" ADD CONSTRAINT "Record_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("clerkUserId") ON DELETE CASCADE ON UPDATE CASCADE;
