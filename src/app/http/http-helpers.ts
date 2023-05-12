import { NextApiResponse } from "next";

export function success(res: NextApiResponse, data: unknown) {
    res.status(200).json({ data })
}