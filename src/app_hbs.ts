import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser'; //[npm install body-parser --save]
import hbs from 'hbs'; 
//import {default as hbs} from "hbs"; //this work

import { pRouter } from './routes/routerts';

import path from 'path';

export class CApplication {

  private app_express: Express; // = express(); //Node.Express - the most popular framework for creating web applications 
  private port: number;

  constructor() {
    this.port = 3000;
    this.app_express = express();
    this.setPort();

    //--- Path of folders -------------
    let sPublic: string = __dirname + '/public'; //it's wrong
    sPublic = path.join(__dirname, '../public');

    const sPartial: string = path.join(__dirname, '../views/partials');

    console.log(`__dirname: [${__dirname}]`);
    console.log(`sPublic: [${sPublic}]`);

    //--- Hbs engine ---------
    this.app_express.set('view engine', 'hbs'); //view engine hbs
    hbs.registerPartials(sPartial); //activation folder partials

    //--- Dir -------------
    this.app_express.use(express.static(sPublic));

    //--- bodyParser to POST method ---------
    this.app_express.use(bodyParser.json());
    this.app_express.use(bodyParser.urlencoded({ extended: true }));
    
    this.app_express.use(pRouter);

  }

  private setPort(){
    this.port = 3000;
    this.app_express.set('host', process.env.HOST || 'localhost' );
    this.app_express.set('port', process.env.PORT || this.port );//3000 8080
  }

  public async startServer() {
    const host: string = this.app_express.get('host');
    const port: number = this.app_express.get('port');
    this.app_express.listen(port, host, () => {
      console.log(`Server started at http://${host}:${port}`);
    });
  }
}
