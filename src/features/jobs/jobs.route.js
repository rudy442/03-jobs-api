import express from 'express';
const router = express.Router();

import * as jobsController from './jobs.controller.js';

router
  .route('/')
  .get(jobsController.getUsersJobs)
  .post(jobsController.create);

router
  .route('/:id')
  .get(jobsController.get)
  .put(jobsController.update)
  .delete(jobsController.remove);

export default router;
