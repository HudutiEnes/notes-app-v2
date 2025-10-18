const express = require("express");
const router = express.Router();

const {
  getNotes,
  getNotesID,
  updateNote,
  createNote,
  deleteNote,
} = require("../controllers/notesControllers");

router.get("/api/notes", getNotes);
router.get("/api/notes/:id", getNotesID);
router.post("/api/notes", createNote);
router.put("/api/notes/:id", updateNote);
router.delete("/api/notes/:id", deleteNote);

module.exports = router;
