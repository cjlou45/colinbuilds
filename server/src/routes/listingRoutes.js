import express from 'express';
import * as listingController from '../controllers/listingController.js';
import { requireAdmin } from '../../middleware/requireAdmin.js';

const router = express.Router();

router.get('/listings', listingController.getListings);
router.get('/listings/:id', listingController.getListing);
router.post('/listings', requireAdmin, listingController.createListing);
router.put('/listings/:id', requireAdmin, listingController.updateListing);
router.delete('/listings/:id', requireAdmin, listingController.deleteListing);

export default router;
