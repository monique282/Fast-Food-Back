-- CreateEnum
CREATE TYPE "categories" AS ENUM ('FOLLOW', 'SNACKS', 'DRINK', 'DESSERT', 'COMBOO');

-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
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
CREATE TABLE "request" (
    "idR" SERIAL NOT NULL,
    "id" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "counter" INTEGER NOT NULL,
    "observationText" TEXT NOT NULL,
    "total" TEXT NOT NULL,
    "nameClient" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "ready" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "request_pkey" PRIMARY KEY ("idR")
);

-- CreateTable
CREATE TABLE "followUp" (
    "idP" SERIAL NOT NULL,
    "id" INTEGER NOT NULL,
    "item" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "requestId" INTEGER NOT NULL,

    CONSTRAINT "followUp_pkey" PRIMARY KEY ("idP")
);

-- CreateTable
CREATE TABLE "code" (
    "id" SERIAL NOT NULL,
    "idcode" INTEGER NOT NULL,

    CONSTRAINT "code_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ComboToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "messages_text_key" ON "messages"("text");

-- CreateIndex
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");

-- CreateIndex
CREATE UNIQUE INDEX "request_code_key" ON "request"("code");

-- CreateIndex
CREATE UNIQUE INDEX "_ComboToProduct_AB_unique" ON "_ComboToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_ComboToProduct_B_index" ON "_ComboToProduct"("B");

-- AddForeignKey
ALTER TABLE "followUp" ADD CONSTRAINT "followUp_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "request"("idR") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComboToProduct" ADD CONSTRAINT "_ComboToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "combo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComboToProduct" ADD CONSTRAINT "_ComboToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
