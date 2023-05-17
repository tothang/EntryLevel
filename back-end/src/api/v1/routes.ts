import express from 'express';
import sessionController from "@server/api/v1/session/session.controller";
const router = express.Router();

router.get('/sessions', sessionController.getSessions);

export = router;