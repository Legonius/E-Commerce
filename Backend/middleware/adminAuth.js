import "dotenv/config";
import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  const { token } = req.headers;
  try {
    if (token) {
      const validToken = jwt.verify(token, process.env.JWT_SECRET);
      if (validToken === process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
        return next();
      }
    }
    return res
      .status(403)
      .json({ success: false, message: "Not Authorize, login again" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default adminAuth;
