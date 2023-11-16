import { compareSync, genSaltSync, hashSync } from "bcryptjs";

// hash password
export const hashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash
}

export const checkHashPassword = (password: string, hashPassword: string) => {
    return compareSync(password, hashPassword)
}


