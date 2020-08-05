import { decorate, observable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = [];
  loading = false;

  fetchNote = async () => {
    try {
      const res = await axios.get("http://localhost:8000/notes");
      this.notes = res.data;
      this.loading = true;
    } catch (error) {
      console.error("NoteStore -> fetchNote -> error", error);
    }
  };

  createNote = async (newNote) => {
    try {
      const formData = new FormData();
      for (const key in newNote) formData.append(key, newNote[key]);
      const res = await axios.post("http://localhost:8000/notes", formData);
      this.notes.push(res.data);
    } catch (error) {
      console.error("NoteStore -> createNote -> error", error);
    }
  };

  deleteNote = async (noteId) => {
    try {
      await axios.delete(`http://localhost:8000/notes/${noteId}`);
      this.notes = this.notes.filter((note) => note.id !== noteId);
    } catch (error) {
      console.error("NoteStore -> deleteNote -> error", error);
    }
  };

  updateNote = async (updatedNote, newNote) => {
    try {
      const formData = new FormData();
      for (const key in newNote) formData.append(key, newNote[key]);
      await axios.put(
        `http://localhost:8000/notes/${updatedNote.id}`,
        updatedNote
      );
      const note = this.notes.find((note) => note.id === updatedNote.id);
      for (const key in note) note[key] = updatedNote[key];
    } catch (error) {
      console.log("NoteStore -> updateNote -> error", error);
    }
  };
}

decorate(NoteStore, { notes: observable });

const noteStore = new NoteStore();
noteStore.fetchNote();
export default noteStore;
