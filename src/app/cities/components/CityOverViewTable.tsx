import { CityModel } from "@core/domain/models";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { LabelWithEmoji } from "components/Emoji";
import { Progressbar } from "components/Progressbar";

export type CityOverViewTableProps = {
  city?: CityModel
}
export function CityOverViewTable({ city }: CityOverViewTableProps) {
  const scores = city?.cityOverview?.scores ?? []
  const name = city?.name
  return (
    <Table aria-label="City Scores Overview" className='' >
      <TableHeader>
        <TableColumn>{name}</TableColumn>
        <TableColumn className="self-center">Score</TableColumn>
      </TableHeader>
      <TableBody className="flex-row">
        {scores?.map(score => {
          return (
            <TableRow key={score.id}>
              <TableCell>
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