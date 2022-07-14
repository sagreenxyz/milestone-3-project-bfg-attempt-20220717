/*
  Warnings:

  - Added the required column `price` to the `equipment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "equipment" ADD COLUMN     "price" TEXT NOT NULL;
