import express from 'express';
import * as imageController from '../controllers/imageController.js';
import { requireAdmin } from '../../middleware/requireAdmin.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

router.post('/images', requireAdmin, upload.single('image'), imageController.createImage);

export default router;