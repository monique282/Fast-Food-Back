/*
  Warnings:

  - You are about to drop the column `Float` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `String` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `imagem` on the `products` table. All the data in the column will be lost.
  - Added the required column `description` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prince` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "Float",
DROP COLUMN "String",
DROP COLUMN "imagem",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "prince" INTEGER NOT NULL;
