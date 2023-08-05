const express = require("express");

const { schemas } = require("../../models/user");

const { validataBody, authenticate, upload } = require("../../middlewars");

const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validataBody(schemas.registerSchema), ctrl.register);

router.post("/login", validataBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;