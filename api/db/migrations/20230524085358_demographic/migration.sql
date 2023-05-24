-- CreateTable
CREATE TABLE "Demographic" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "education" INTEGER NOT NULL,
    "technology" INTEGER NOT NULL,
    "privacy" INTEGER NOT NULL,

    CONSTRAINT "Demographic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Demographic_userId_key" ON "Demographic"("userId");

-- AddForeignKey
ALTER TABLE "Demographic" ADD CONSTRAINT "Demographic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
