/*
  Warnings:

  - The primary key for the `followUp` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "followUp" DROP CONSTRAINT "followUp_pkey",
ADD COLUMN     "idP" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ADD CONSTRAINT "followUp_pkey" PRIMARY KEY ("idP");
DROP SEQUENCE "followUp_id_seq";
