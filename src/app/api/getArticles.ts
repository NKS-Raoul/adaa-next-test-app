import { NextApiRequest, NextApiResponse } from "next"

// eslint-disable-next-line import/no-anonymous-default-export
export default (res: NextApiResponse, req: NextApiRequest) => {
    res.status(200).json({ name: 'Raoul' })
}