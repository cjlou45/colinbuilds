import express from 'express'

import { S3Client } from '@aws-sdk/client-s3'
import * as imageService from '../services/imageService'
import dotenv from 'dotenv'

dotenv.config()

export async function createImage(req, res) {
  const image = await imageService.createListing(req.body);
  console.log("req.file", req.file);
  res.status(201).json(image);
}