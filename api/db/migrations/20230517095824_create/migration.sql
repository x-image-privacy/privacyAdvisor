-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "group" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submittedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "imageLocation" TEXT NOT NULL,
    "dataLocation" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageSurvey" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "imageId" INTEGER,
    "hasInterface" BOOLEAN NOT NULL,
    "privateRank" INTEGER NOT NULL,
    "publicElem" TEXT NOT NULL,
    "privateElem" TEXT NOT NULL,
    "satisfactionRank" INTEGER,
    "satisfactionElem" TEXT,

    CONSTRAINT "ImageSurvey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NetPromoterScore" (
    "id" SERIAL NOT NULL,
    "rank" INTEGER NOT NULL,
    "justification" TEXT NOT NULL,

    CONSTRAINT "NetPromoterScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerSatisfactionScore" (
    "id" SERIAL NOT NULL,
    "rank" INTEGER NOT NULL,
    "justification" TEXT NOT NULL,

    CONSTRAINT "CustomerSatisfactionScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserExperienceQuestionaireScore" (
    "id" SERIAL NOT NULL,
    "support" INTEGER NOT NULL,
    "complexity" INTEGER NOT NULL,
    "efficiency" INTEGER NOT NULL,
    "clarity" INTEGER NOT NULL,
    "motivation" INTEGER NOT NULL,
    "interest" INTEGER NOT NULL,
    "norm" INTEGER NOT NULL,
    "originality" INTEGER NOT NULL,

    CONSTRAINT "UserExperienceQuestionaireScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerSatisfactionSurvey" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "csatId" INTEGER,
    "npsId" INTEGER,
    "ueqId" INTEGER,

    CONSTRAINT "CustomerSatisfactionSurvey_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageSurvey" ADD CONSTRAINT "ImageSurvey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageSurvey" ADD CONSTRAINT "ImageSurvey_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerSatisfactionSurvey" ADD CONSTRAINT "CustomerSatisfactionSurvey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerSatisfactionSurvey" ADD CONSTRAINT "CustomerSatisfactionSurvey_csatId_fkey" FOREIGN KEY ("csatId") REFERENCES "CustomerSatisfactionScore"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerSatisfactionSurvey" ADD CONSTRAINT "CustomerSatisfactionSurvey_npsId_fkey" FOREIGN KEY ("npsId") REFERENCES "NetPromoterScore"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomerSatisfactionSurvey" ADD CONSTRAINT "CustomerSatisfactionSurvey_ueqId_fkey" FOREIGN KEY ("ueqId") REFERENCES "UserExperienceQuestionaireScore"("id") ON DELETE SET NULL ON UPDATE CASCADE;
