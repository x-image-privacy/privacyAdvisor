/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `resetToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `resetTokenExpiresAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `imageNumber` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "imageNumber" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "resetToken",
DROP COLUMN "resetTokenExpiresAt";
