import { prisma } from '../db/prisma.js';

export async function getAllListings() {
  return prisma.listing.findMany({
    include: { images: true },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getListingById(id) {
  return prisma.listing.findUnique({
    where: { id },
    include: { images: true },
  });
}

export async function createListing(data) {
  return prisma.listing.create({ data });
}

export async function updateListing(id, data) {
  return prisma.listing.update({
    where: { id },
    data,
  });
}

export async function deleteListing(id) {
  return prisma.listing.delete({ where: { id } });
}
 