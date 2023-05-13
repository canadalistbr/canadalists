-- CreateTable
CREATE TABLE "ProvincesOverview" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "capital" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "language" TEXT[],
    "top_cities" TEXT[],
    "immigration_ranking" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "ProvincesOverview_pkey" PRIMARY KEY ("id")
);
