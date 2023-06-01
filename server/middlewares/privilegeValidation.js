function validateAdminRole(req, res, next) {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        status: "failed",
        message: "You are not authorized to access this resource.",
      });
    }
  } catch (error) {
    return res.status(401).json({
      error: "Unauthorized Access",
    });
  }
  next(); 
}

module.exports = validateAdminRole;
