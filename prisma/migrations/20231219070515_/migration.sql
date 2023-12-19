/*
  Warnings:

  - You are about to drop the `requests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "followUp" DROP CONSTRAINT "followUp_requestId_fkey";

-- DropTable
DROP TABLE "requests";

-- CreateTable
CREATE TABLE "request" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "counter" INTEGER NOT NULL,
    "observationText" TEXT NOT NULL,
    "total" TEXT NOT NULL,
    "nameClient" TEXT NOT NULL,
    "code" INTEGER NOT NULL,

    CONSTRAINT "request_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "followUp" ADD CONSTRAINT "followUp_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "request"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
