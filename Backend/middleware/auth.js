import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    let { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: "Login first" });
    }
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (!tokenDecode) {
      return res.json({ success: false, message: "User not Found" });
    }
    req.body.userId = tokenDecode;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

export default authUser;
