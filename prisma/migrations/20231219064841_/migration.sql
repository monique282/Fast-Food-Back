/*
  Warnings:

  - You are about to drop the `_ProductToRequests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `requests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToRequests" DROP CONSTRAINT "_ProductToRequests_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToRequests" DROP CONSTRAINT "_ProductToRequests_B_fkey";

-- DropTable
DROP TABLE "_ProductToRequests";

-- DropTable
DROP TABLE "requests";

-- CreateTable
CREATE TABLE "Request" (
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

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FollowUp" (
    "id" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "requestId" INTEGER NOT NULL,

    CONSTRAINT "FollowUp_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FollowUp" ADD CONSTRAINT "FollowUp_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "Request"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
