import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis"

type FormBody =  {
    name : string,
    phone : string,
    message : string
}

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    if (req.method != "POST") {
        return res.status(405).json({
            "message" : "Only POST Requests allowed"
        })
    }
    else {
        const body = req.body as FormBody

        const auth = new google.auth.GoogleAuth({
            credentials : {
                client_email : process.env.SHEETS_CLIENT_EMAIL,
                private_key: process.env.SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            },
            scopes : [
                "https://www.googleapis.com/auth/drive",
                "https://www.googleapis.com/auth/drive.file",
                "https://www.googleapis.com/auth/spreadsheets",
            ]
        })

        const sheets = google.sheets({
            auth, 
            version : 'v4'
        })

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId : process.env.SHEETS_ID,
            range : "A1:C1",
            valueInputOption : "USER_ENTERED",
            requestBody : {
                values : [
                    [body.name, body.phone, body.message]
                ] 
            }
        })

        return res.status(200).json({
            "message" : "Added to sheet",
            "data" : response.data
        })
    }
}