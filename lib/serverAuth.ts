import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth";

import prismadb from '@/lib/prismadb';
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
    // get session information
    const session = await getServerSession(req, res, authOptions);

    // check if session exist
    if (!session?.user?.email) {
        throw new Error("Not signed in")
    };

    // if it exists, find the current user
    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        }
    });

    // handle error for when current user is not found

    if (!currentUser) {
        throw new Error("Not signed in");
    };

    // return the current user
    return { currentUser }
}

export default serverAuth; 