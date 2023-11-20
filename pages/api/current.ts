import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Allow only get request
        if (req.method !== "GET") {
            return res.status(405).end();
        }

        // extract the current user from serverAuth

        const { currentUser } = await serverAuth(req, res);

        // return the current user

        return res.status(200).json(currentUser)

    } catch (error) {
        console.log(error)
        return res.status(500).end();
    }
}