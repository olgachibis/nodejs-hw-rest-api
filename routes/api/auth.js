const express = require("express");

const { schemas } = require("../../models/user");

const { validataBody, authenticate } = require("../../middlewars");

const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validataBody(schemas.registerSchema), ctrl.register);

router.post("/login", validataBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;