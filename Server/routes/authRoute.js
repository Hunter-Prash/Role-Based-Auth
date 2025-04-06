import express from 'express'

import { loginController, resetPasswordController, signUpController } from "../controllers/authController.js";

const router=express.Router()

router.post('/signup',signUpController)
router.post('/login',loginController)
router.post('/reset',resetPasswordController)

export default router;
