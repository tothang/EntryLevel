import { Request, Response } from 'express';
import { getListSession } from "./session.service"

const getSessions = async (req: Request, res: Response) => {
    try {
        console.log(req);
        const { query } = req
        let result: [any] = await getListSession(query);
        return res.status(200).json({
            message: result
        });
    }catch (e) {
        console.log(e);
        return res.status(500).json({
            message: JSON.stringify(e)
        });
    }

};

export default { getSessions };