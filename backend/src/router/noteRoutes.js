const express = require("express");
const multer = require("multer");
const router = express.Router();

const {
  uploadNote,
  getApprovedNotes,
  getPendingNotes,
  approveNote,
  rejectNote,
} = require("../controllers/noteController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), uploadNote);

router.get("/approved", getApprovedNotes);

router.get("/pending", getPendingNotes);

router.put("/:id/approve", approveNote);

router.put("/:id/reject", rejectNote);

module.exports = router;