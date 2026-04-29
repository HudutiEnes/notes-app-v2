let notes = [];

const createNote = (req, res) => {
  const { title, content } = req.body;

  // Log incoming data
  console.log("POST /api/notes", req.body);

  // Basic validation
  if (!title || !content) {
    const err = new Error("Title and content are required");
    err.status = 400;
    throw err;
  }

  // Mock response (replace with DB logic later)
  const newNote = {
    id: Date.now().toString(),
    title,
    content,
  };

  notes.push(newNote);

  res.status(201).json({
    message: "Note created successfully.",
    note: newNote,
  });
};

const getNotesID = (req, res) => {
  const { id } = req.params;
  console.log("GET api/notes/:id", id);

  const note = notes.find((n) => n.id == id);

  if (!note) {
    const err = new Error("Note not found");
    err.status = 404;
    throw err;
  }

  res.status(200).json({
    message: `Fetched note with ID:${id}`,
    note,
  });
};

const getNotes = (req, res) => {
  console.log("GET api/notes", req.query);
  res.status(200).json({
    message: "Fetched all notes",
    notes: notes,
  });
};

const updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const note = notes.find((n) => n.id === id);
  if (!note) {
    return next(new Error("Note not found"));
  }
  if (!note || !content) {
    return next(new Error("Title and content are required"));
  }

  note.title = title;
  note.content = content;

  res.status(200).json({
    message: "Note updated successfully",
    note,
  });
};

const deleteNote = (req, res) => {
  const { id } = req.params;
  const note = notes.find((n) => n.id === id);
  if (!note) {
    const err = new Error("Note not found");
    err.status = 404;
    err.throw;
  }

  notes.filter((n) => n.id !== id);
  res.status(200).json({
    message: "Note deleted successfully",
  });
};

module.exports = {
  getNotes,
  getNotesID,
  createNote,
  updateNote,
  deleteNote,
};
