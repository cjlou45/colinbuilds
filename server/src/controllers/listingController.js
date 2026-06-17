import * as listingService from '../services/listingService.js';

export async function getListings(req, res) {
  const listings = await listingService.getAllListings();
  res.json(listings);
}

export async function getListing(req, res) {
  const listing = await listingService.getListingById(req.params.id);
  if (!listing) return res.status(404).json({ error: 'Listing not found' });
  res.json(listing);
}

export async function createListing(req, res) {
  const listing = await listingService.createListing(req.body);
  res.status(201).json(listing);
}

export async function updateListing(req, res) {
  const listing = await listingService.updateListing(req.params.id, req.body);
  res.json(listing);
}

export async function deleteListing(req, res) {
  await listingService.deleteListing(req.params.id);
  res.status(204).send();
}
