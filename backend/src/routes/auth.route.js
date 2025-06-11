import express from "express"; 
import multer from "multer";
import {checkAuth, login, logout, signup, updateProfile} from "../controllers/auth.controller.js"; 
import {protectRoute} from "../middleware/auth.middleware.js";

const router = express.Router();
const storage = multer.memoryStorage(); 
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB max

// Upload route
router.put("/update-profile", upload.single("profilePic"), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).send("No file uploaded");

  const base64 = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;

  res.status(200).json({ message: "Profile updated", image: base64 });
});


router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

//check if they're authenticated 
router.put("/update-profile", protectRoute, updateProfile); 

router.get("/check", protectRoute, checkAuth); 

export default router; 