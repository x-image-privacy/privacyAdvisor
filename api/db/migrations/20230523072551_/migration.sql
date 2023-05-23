/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `CustomerSatisfactionSurvey` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CustomerSatisfactionSurvey_userId_key" ON "CustomerSatisfactionSurvey"("userId");
