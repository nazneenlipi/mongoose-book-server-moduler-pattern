import { Router } from "express";
import { bookDelete, bookUpdate, createBook, getBook, getBookByID } from "./books.controller";

const useRoute = Router()

useRoute.post("/api/books", createBook)
useRoute.get("/api/books", getBook)
useRoute.get("/api/books/:bookId", getBookByID)
useRoute.put("/api/books/:bookId", bookUpdate)
useRoute.delete("/api/books/:bookId", bookDelete)

export default useRoute