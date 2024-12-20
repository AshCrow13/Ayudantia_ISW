"use strict";
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 
const envFilePath = path.resolve(__dirname, ".env");

dotenv.config({ path: envFilePath });

export const PORT = process.env.PORT; 
export const HOST = process.env.HOST;
export const DATABASE = process.env.DATABASE;
export const DB_USERNAME = process.env.DB_USERNAME;
export const PASSWORD = process.env.PASSWORD;

