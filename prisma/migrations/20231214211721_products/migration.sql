-- CreateEnum
CREATE TYPE "categories" AS ENUM ('FOLLOWUP', 'DRINK', 'DESSERT', 'COMBO');

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "String" TEXT NOT NULL,
    "Float" INTEGER NOT NULL,
    "category" "categories" NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "combo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "combo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ComboToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ComboToProduct_AB_unique" ON "_ComboToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_ComboToProduct_B_index" ON "_ComboToProduct"("B");

-- AddForeignKey
ALTER TABLE "_ComboToProduct" ADD CONSTRAINT "_ComboToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "combo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComboToProduct" ADD CONSTRAINT "_ComboToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
