const jwt = require("jsonwebtoken");

const authentificationToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token manquant." });
  }

  jwt.verify(token, process.env.rtoken, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token invalide ou expiré." });
    }
    req.user = user;
    next();
  });
};

module.exports = authentificationToken;