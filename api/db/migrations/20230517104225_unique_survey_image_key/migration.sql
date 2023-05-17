/*
  Warnings:

  - A unique constraint covering the columns `[userId,imageId,hasInterface]` on the table `ImageSurvey` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ImageSurvey_userId_imageId_hasInterface_key" ON "ImageSurvey"("userId", "imageId", "hasInterface");
