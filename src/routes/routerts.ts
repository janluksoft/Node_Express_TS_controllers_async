import express, { Request, Response, Router, NextFunction } from 'express';
//const express = require('express');
//const router = express.Router();

import { CControllerPages } from '../controllers/controller.pages';
import { CControllerApp } from '../controllers/controller.app';

const router: Router = express.Router();

const cControllerP: CControllerPages = new CControllerPages(); //GET
const cControllerA: CControllerApp = new CControllerApp();     //POST

//AssignMent to EndPoints

  router.get('/', async (request: Request, response: Response, next: NextFunction) => 
  {
    await cControllerP.home(request, response);
  });

  router.get('/table', async (request: Request, response: Response) => 
             { await cControllerP.table(request, response); });
  
  router.get('/log', async (request: Request, response: Response) => 
             { await cControllerP.log(request, response); });
  
  router.get('/about', async (request: Request, response: Response) => 
             { await cControllerP.about(request, response); });
  

  router.post('/applications', async (request: Request, response: Response) => 
             { await cControllerA.store(request, response); });

export const pRouter: Router = router;