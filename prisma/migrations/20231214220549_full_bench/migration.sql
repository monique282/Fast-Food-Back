/*
  Warnings:

  - Added the required column `imagem` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "imagem" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "requests" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "observation" TEXT NOT NULL,
    "ready" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToRequests" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "requests_code_key" ON "requests"("code");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToRequests_AB_unique" ON "_ProductToRequests"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToRequests_B_index" ON "_ProductToRequests"("B");

-- AddForeignKey
ALTER TABLE "_ProductToRequests" ADD CONSTRAINT "_ProductToRequests_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToRequests" ADD CONSTRAINT "_ProductToRequests_B_fkey" FOREIGN KEY ("B") REFERENCES "requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;
