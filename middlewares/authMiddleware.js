const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.sendStatus(401);
  const accessToken = authHeader.split(" ")[1];

  jwt.verify(accessToken, process.env.ACCESS_SECRET_TOKEN, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = {
      id: decoded.id,
      fullname: decoded.fullname,
      email: decoded.email,
      username: decoded.username,
    };
    next();
  });
};

module.exports = authMiddleware;
