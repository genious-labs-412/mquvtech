/*
  Warnings:

  - You are about to drop the `ProjectBlock` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProjectBlock" DROP CONSTRAINT "ProjectBlock_projectId_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "content" JSONB;

-- DropTable
DROP TABLE "ProjectBlock";

-- DropEnum
DROP TYPE "BlockType";
