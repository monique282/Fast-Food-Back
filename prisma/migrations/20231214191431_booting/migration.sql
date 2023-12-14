/*
  Warnings:

  - A unique constraint covering the columns `[text]` on the table `messages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "messages_text_key" ON "messages"("text");
