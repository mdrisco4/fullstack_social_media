// import bcrypt from "bcrypt.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const hashString = async (useValue) => {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}


export const compareString = async (userPassword, password) => {
    const isMatch = await bcrypt.compare(userPassword, password);
    return isMatch;
}

// JASON WEBTOKEN
export function createJWT(id) {
    return JWT.sign({ userId: id }, porcess.env.JWT_SECRET_KEY, {
        expiresIn: "id",
    });
}