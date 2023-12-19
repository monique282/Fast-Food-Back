/*
  Warnings:

  - You are about to drop the column `code` on the `code` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "code_code_key";

-- AlterTable
ALTER TABLE "code" DROP COLUMN "code",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "code_pkey" PRIMARY KEY ("id");
