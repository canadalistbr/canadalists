/*
  Warnings:

  - You are about to drop the `ProvincesOverview` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ProvincesOverview";

-- CreateTable
CREATE TABLE "Provinces" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "capital" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "language" TEXT[],
    "top_cities" TEXT[],
    "immigration_ranking" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "Provinces_pkey" PRIMARY KEY ("id")
);
