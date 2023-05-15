-- CreateTable
CREATE TABLE "ProvinceOverview" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "province_id" INTEGER NOT NULL,

    CONSTRAINT "ProvinceOverview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProvinceScores" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "emoji" TEXT NOT NULL,
    "overview_id" INTEGER NOT NULL,

    CONSTRAINT "ProvinceScores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProvinceOverview_province_id_key" ON "ProvinceOverview"("province_id");

-- AddForeignKey
ALTER TABLE "ProvinceOverview" ADD CONSTRAINT "ProvinceOverview_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "Provinces"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProvinceScores" ADD CONSTRAINT "ProvinceScores_overview_id_fkey" FOREIGN KEY ("overview_id") REFERENCES "ProvinceOverview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
