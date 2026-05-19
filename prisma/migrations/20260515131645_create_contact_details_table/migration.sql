/*
  Warnings:

  - You are about to drop the `ContactDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ContactDetails";

-- CreateTable
CREATE TABLE "contact-details" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "service" TEXT,
    "scope" TEXT,
    "fileUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact-details_pkey" PRIMARY KEY ("id")
);
