/*
  Warnings:

  - Added the required column `idcode` to the `code` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "code" ADD COLUMN     "idcode" INTEGER NOT NULL;
