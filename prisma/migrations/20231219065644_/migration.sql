/*
  Warnings:

  - You are about to drop the `FollowUp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FollowUp" DROP CONSTRAINT "FollowUp_requestId_fkey";

-- DropTable
DROP TABLE "FollowUp";

-- DropTable
DROP TABLE "Request";

-- CreateTable
CREATE TABLE "requests" (
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

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "followUp" (
    "id" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "requestId" INTEGER NOT NULL,

    CONSTRAINT "followUp_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "followUp" ADD CONSTRAINT "followUp_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
