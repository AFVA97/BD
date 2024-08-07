import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const auth = (req, res, next) => {
  try {
    const { tokenusername } = req.cookies;
    
    if (!tokenusername)
      return res
        .status(401)
        .json({ message: "No tokenusername, authorization denied" });

    jwt.verify(tokenusername, TOKEN_SECRET, (error, user) => {
      if (error) {
        return res.status(401).json(["tokenusername is not valid" ]);
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
