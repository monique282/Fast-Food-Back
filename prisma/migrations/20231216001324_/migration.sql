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

-- CreateTable
CREATE TABLE "_ComboToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "messages_text_key" ON "messages"("text");

-- CreateIndex
CREATE UNIQUE INDEX "requests_code_key" ON "requests"("code");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToRequests_AB_unique" ON "_ProductToRequests"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToRequests_B_index" ON "_ProductToRequests"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ComboToProduct_AB_unique" ON "_ComboToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_ComboToProduct_B_index" ON "_ComboToProduct"("B");

-- AddForeignKey
ALTER TABLE "_ProductToRequests" ADD CONSTRAINT "_ProductToRequests_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToRequests" ADD CONSTRAINT "_ProductToRequests_B_fkey" FOREIGN KEY ("B") REFERENCES "requests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComboToProduct" ADD CONSTRAINT "_ComboToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "combo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComboToProduct" ADD CONSTRAINT "_ComboToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
