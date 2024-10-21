import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { hashString } from "./index.js";
import Verification from "../models/emailVerification.js"
// import sendVerificationEmail from "../utils/sendEmail.js";

dotenv.config();

const { AUTH_EMAIL, AUTH_PASSWORD, APP_URL } = process.env;

let transporter = nodemailer.createTransport({
    // host: "smtp-mail.outlook.com",
    // service: "gmail",
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,

    auth: {
        user: AUTH_EMAIL,
        pass: AUTH_PASSWORD,
    },
});

export const sendVerificationEmail = async (user, res) => {

    const { _id, email, firstName } = user;
    
    const token = _id + uuidv4();
    
    const link = APP_URL + "users/verify/" + _id + "/" + token;
    
    // Mail options
    const mailOptions = {
        from: AUTH_EMAIL,
        to: email,
        subject: "Email Verification",
        html: `<div
        style='font-family: Arial, sans-sarif; font-size: 20px; color: #333; background-color: #f7f7f7; padding: 20px; border-radius: 5px;'>
        <h1 style="color: rgb(8, 56, 188)">Please verify your email address</h1>
        <hr>
        <h4>Hi ${firstName},</h4>
        <p>
            Please verify your email address so we can confirm your account.
            <br>
        <p>This link expires in 1 hour</b></p>
        <br>
        <a href=${link}
            style="color: #fff; padding: 14px; text-decoration: none; background-color: #000;">
            Email Address</a>
        </p>
        <div style="margin-top: 20px;">
            <h5>Best Regards,</h5>
            <h5>Team Driz</h5>
        </div>
    </div>`,
    };

    try {
        const hashedToken = await hashString(token);

        const newVerifiedEmail = await Verification.create({
            userId: _id,
            token: hashedToken,
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000,
        });


        // try {
        //     await transporter.sendMail(mailOptions);
        //     res.status(201).send({
        //         success: "PENDING",
        //         message: "Verification email has been sent to your email address. Check your email to verify your account"
        //     });
        // } catch (err) {
        //     console.log("Error sending email:", err.message || err.response);
        //     res.status(404).json({ message: "Something went wrong first" });
        // }

        if (newVerifiedEmail) {
            transporter
                .sendMail(mailOptions)
                .then(() => {
                    res.status(201).send({
                        success: "PENDING",
                        message:
                            "Verification email has been sent to your email address.  Check your email to verify your account"
                    });
                })
                .catch((err) => {
                    // console.log(err);
                    console.log("Error sending email:", err.message || err.response);
                    res.status(404).json({ message: "Something went wrong first" });
        
                });
            }
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "Something went wrong later" });
    }
};
