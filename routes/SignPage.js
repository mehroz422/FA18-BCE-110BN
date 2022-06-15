import express from 'express';

import { AddUser, GetUsers } from '../controllers/SignPage.js';

const router = express.Router();

router.get("/",GetUsers);

router.post("/",AddUser);


export default router; 