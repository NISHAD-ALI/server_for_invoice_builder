import express from "express";
const router = express.Router()
import { getInvoices, saveToDb } from "../controllers/controller.js";
import { uploadFile } from "../middlewares/multer.js";

router.post('/saveToDB',uploadFile.single('logo'), (req, res) => saveToDb(req, res));
router.get('/getInvoices', (req, res) => getInvoices(req, res));


export default router