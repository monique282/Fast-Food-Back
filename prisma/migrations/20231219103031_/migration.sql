/*
  Warnings:

  - The primary key for the `request` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "followUp" DROP CONSTRAINT "followUp_requestId_fkey";

-- AlterTable
ALTER TABLE "request" DROP CONSTRAINT "request_pkey",
ADD COLUMN     "idR" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ADD CONSTRAINT "request_pkey" PRIMARY KEY ("idR");
DROP SEQUENCE "request_id_seq";

-- AddForeignKey
ALTER TABLE "followUp" ADD CONSTRAINT "followUp_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "request"("idR") ON DELETE RESTRICT ON UPDATE CASCADE;
