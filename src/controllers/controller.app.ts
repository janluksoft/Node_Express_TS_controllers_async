import {CDataTab} from './data';
//import cDTab from './data.js';
import { Request, Response, NextFunction } from 'express';

export class CControllerApp {

    private cDTab: CDataTab;
    private aCountLog: number;

    constructor() { 
        this.aCountLog = 0;
        this.cDTab = new CDataTab();
    }

    //===== Routing of pages ==================================
    //user makes request type Post
    public store = async (req: Request, res: Response) => {

        const jDataLog = {
            Host: req.body.nHost,
            DataBase: req.body.nDataBase,
            Port: req.body.nPort,
            User: req.body.nUser,
            Pass: req.body.nPass,
        }

        const sUser = req.body.nUser;
        const sPass = req.body.nPass;
        let bLoginOk = false;
        if ((sUser === 'Mark') && (sPass === 'abcde'))
            bLoginOk = true;
    
        res.render('log', {
            zPageTitle: 'Node Login page',
            zbIsTable: bLoginOk,
            zCount: this.cDTab.addAndGetCountLog(5),
            ztNames: this.cDTab.getTable(),
            zbIsStart: false,
        });
    };
}
