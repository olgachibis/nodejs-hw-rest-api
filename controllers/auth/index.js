const { ctrlWraper } = require("../../helpers");
const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  register: ctrlWraper(register),
  login: ctrlWraper(login),
  getCurrent: ctrlWraper(getCurrent),
  logout: ctrlWraper(logout),
  updateAvatar: ctrlWraper(updateAvatar),
  verifyEmail: ctrlWraper(verifyEmail),
  resendVerifyEmail: ctrlWraper(resendVerifyEmail),
};