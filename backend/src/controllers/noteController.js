const Note = require("../models/Note");

const uploadNote = async (req, res) => {
  try {
    const { title, subject, category, uploader } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "File is required" });
    }

    const note = await Note.create({
      title,
      subject,
      category,
      uploader,
      fileName: req.file.originalname,
      filePath: req.file.path,
      status: "pending",
    });

    res.status(201).json({
      message: "Note uploaded and waiting for admin approval",
      note,
    });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

const getApprovedNotes = async (req, res) => {
  try {
    const notes = await Note.find({ status: "approved" }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch notes", error: error.message });
  }
};

const getPendingNotes = async (req, res) => {
  try {
    const notes = await Note.find({ status: "pending" }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch pending notes", error: error.message });
  }
};

const approveNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { status: "approved" },
      { new: true }
    );

    res.json({ message: "Note approved", note });
  } catch (error) {
    res.status(500).json({ message: "Approval failed", error: error.message });
  }
};

const rejectNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { status: "rejected" },
      { new: true }
    );

    res.json({ message: "Note rejected", note });
  } catch (error) {
    res.status(500).json({ message: "Reject failed", error: error.message });
  }
};

module.exports = {
  uploadNote,
  getApprovedNotes,
  getPendingNotes,
  approveNote,
  rejectNote,
};