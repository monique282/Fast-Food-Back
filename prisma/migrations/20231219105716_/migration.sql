/*
  Warnings:

  - A unique constraint covering the columns `[idcode]` on the table `code` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "code_idcode_key" ON "code"("idcode");
