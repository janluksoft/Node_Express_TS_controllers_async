//controllers/PagesController

import {CDataTab} from './data';
//import cDTab from './data.js';
import { Request, Response, NextFunction } from 'express';
//const datajs = require('./Data.js');

export class CControllerPages {

    private cDTab: CDataTab;
    private aCounter: number;
    private aCountAb: number;
    private aCountLog: number;

    constructor() { 
        this.aCounter = 0;
        this.aCountAb = 0;
        this.aCountLog = 0;
        this.cDTab = new CDataTab();
    }

    //===== Routing of pages ==================================
    //user makes request type get
    public home = async (xrequest: Request, xresponse: Response) => {
        xresponse.render('table2', {
            zPageTitle: 'Node Main Page',
            zbIsTable: false,
            zCount: this.aCounter,
            ztNames: [],
        });
        this.aCounter++;
    };

    public table = async (xrequest: Request, xresponse: Response) => {
        xresponse.render('table2', {
            zPageTitle: 'Node Table page',
            zbIsTable: true,
            zCount: this.cDTab.addAndGetCountLog(2),
            ztNames: this.cDTab.getTable(), //datajs.getTable(),
        });
        this.aCountAb++;
        //return();
    };

    public log = async (xrequest: Request, xresponse: Response) => {
        xresponse.render('log', {
            zPageTitle: 'Node Table page',
            zCount: 1, //datajs.addAndGetCountLog(1),// aCountLog,
            ztNames: [], //datajs.getTable(),
            zbIsTable: true,
            zbIsStart: true,
        });
        this.aCountLog++;
    };

    public about = async (xrequest: Request, xresponse: Response) => {
        xresponse.render('about');
    };
}
