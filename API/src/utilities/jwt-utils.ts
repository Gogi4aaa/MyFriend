import jwt from "jsonwebtoken";

export const generateToken = async (props: any) => {
  // expires after 7 days
  const age = 1000 * 10;

  return jwt.sign({
      sub: props.sub,
    }, process.env.JWT_SECRET_KEY!,
    {expiresIn: age});

}