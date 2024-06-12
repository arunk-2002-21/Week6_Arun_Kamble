import bcrypt from 'bcryptjs';

export const hashedPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};


export const comparePassword = async ( enteredPassword: string, hashedPassword: string) => {
    return bcrypt.compare(enteredPassword, hashedPassword);
}