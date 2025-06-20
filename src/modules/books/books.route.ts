import { Router } from "express";
import { createBook } from "./books.controller";

const useRoute = Router()

useRoute.post("/books", createBook)

export default useRoute