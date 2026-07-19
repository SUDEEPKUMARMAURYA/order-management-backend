const authScheduler = (req, res, next) => {
  const secretKey = req.headers["x-secret-key"];

  if (!secretKey) {
    return res.status(401).json({
      success: false,
      message: "Secret key is required",
    });
  }

  if (secretKey !== process.env.SECRET_KEY) {
    return res.status(401).json({
      success: false,
      message: "Invalid secret key",
    });
  }

  next();
};

module.exports = authScheduler;