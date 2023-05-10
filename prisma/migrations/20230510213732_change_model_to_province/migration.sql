-- CreateTable
CREATE TABLE "Provinces" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "capital" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "language" TEXT[],
    "top_cities" TEXT[],
    "immigrationRanking" INTEGER NOT NULL,

    CONSTRAINT "Provinces_pkey" PRIMARY KEY ("id")
);
