/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `request` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "code_idcode_key";

-- CreateIndex
CREATE UNIQUE INDEX "request_code_key" ON "request"("code");
