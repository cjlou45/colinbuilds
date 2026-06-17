import express from 'express';
import * as listingController from '../controllers/listingController.js';

const router = express.Router();

router.get('/listings', listingController.getListings);
router.get('/listings/:id', listingController.getListing);
router.post('/listings', listingController.createListing);
router.put('/listings/:id', listingController.updateListing);
router.delete('/listings/:id', listingController.deleteListing);

export default router;
