import express from "express"; 
import multer from "multer";
import {checkAuth, login, logout, signup, updateProfile} from "../controllers/auth.controller.js"; 
import {protectRoute} from "../middleware/auth.middleware.js";

const router = express.Router();
const storage = multer.memoryStorage(); 
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB max

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put(
  "/update-profile",
  protectRoute,
  upload.single("profilePic"),
  updateProfile
);


router.get("/check", protectRoute, checkAuth); 

export default router; 