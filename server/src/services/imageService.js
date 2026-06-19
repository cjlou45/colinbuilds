import { prisma } from '../db/prisma.js';

export async function createImage(data) {
  return prisma.image.create({ data });
}


 