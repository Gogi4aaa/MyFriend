import bcrypt from "bcrypt";
export const hashPassword = async (password: string, number: number) => {
  return await bcrypt.hash(password, number);
}
export const comparePassword = async (password: string, hash: any) => {
  return await bcrypt.compare(password, hash)
}
