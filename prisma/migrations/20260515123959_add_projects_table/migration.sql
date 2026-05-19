/*
  Warnings:

  - You are about to drop the column `budget` on the `Projects` table. All the data in the column will be lost.
  - You are about to drop the column `timeline` on the `Projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "budget",
DROP COLUMN "timeline";
