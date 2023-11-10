import { Label } from "@/components/ui/label";
import { CityModel } from "@core/domain/models";
import { Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { LabelWithEmoji } from "components/Emoji";
import { Progressbar } from "components/Progressbar";
import { ChangeEvent } from "react";

export type CityOverViewTableProps = {
  cityData: CityModel
  allCitiesNames: string[]
  disabledCities: (string)[]
  replaceCityBy: (cityToReplace: string, replacementCity: string) => void
}
export function CityOverViewTable(props: CityOverViewTableProps) {
  const { cityData, allCitiesNames, replaceCityBy, disabledCities } = props

  const scores = cityData.cityOverview?.scores ?? []
  const currentSelectedCity = cityData.name

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const cityToBeReplaced = currentSelectedCity
    const newlySelectedCity = e.target.value
    replaceCityBy(cityToBeReplaced, newlySelectedCity)
  }

  const sortedScores = scores.sort((a, b) => b.position - a.position)

  return (
    <Table aria-label="City Overview Table" >
      <TableHeader>
        <TableColumn className="text-center">
          <Select
            disabledKeys={disabledCities}
            className="max-w-xs"
            defaultSelectedKeys={[currentSelectedCity]}
            onChange={handleChange}
          >
            {allCitiesNames.map((cityName) => (
              <SelectItem
                className="text-lg"
                key={cityName} value={cityName}>
                {cityName}
              </SelectItem>
            ))}
          </Select>
        </TableColumn>
        <TableColumn className="text-center">
          <Label className="text-base">Score</Label>
        </TableColumn>
      </TableHeader>
      <TableBody className="flex-row">
        {sortedScores?.map(score => {
          return (
            <TableRow key={score.id}>
              <TableCell className="w-fit">
                <LabelWithEmoji emojiProps={{ symbol: score.emoji, label: 'score name' }} >
                  {score.name}
                </LabelWithEmoji>
              </TableCell>
              <TableCell>
                <Progressbar progress={score.score * 100} />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  );
} 