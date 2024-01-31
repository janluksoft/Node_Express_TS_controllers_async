//controllers/PagesController

export class CDataTab {

    private aCounter: number;
    private aCountAb: number;
    private aCountLog: number;

    constructor() { 
        this.aCounter = 0;
        this.aCountAb = 0;
        this.aCountLog = 0;
    }

    public getTable2(): any {
        const tnames =  [
            {name: 'Isabella',sex: 'woman', age: 19},
            {name: 'Helena',sex: 'woman', age: 24},
            {name: 'Aleksandra',sex: 'woman', age: 20},
            {name: 'Peter',sex: 'man', age: 25},
            {name: 'Gregory',sex: 'man', age: 33},
            {name: 'Adam',sex: 'man', age: 27}
            ];
        return(tnames);
    }

    public getTable(): any {
        const tnames =  [
            {name: 'Emma',sex: 'woman', age: 25},
            {name: 'Amelia',sex: 'woman', age: 26},
            {name: 'Isabella',sex: 'woman', age: 19},
            {name: 'Helena',sex: 'woman', age: 24},
            {name: 'Elizabeth',sex: 'woman', age: 19},
            {name: 'Aleksandra',sex: 'woman', age: 20},
            {name: 'Peter',sex: 'man', age: 25},
            {name: 'Mark',sex: 'man', age: 28},
            {name: 'Dawid',sex: 'man', age: 31},
            {name: 'Gregory',sex: 'man', age: 33},
            {name: 'Tom',sex: 'man', age: 34},
            {name: 'Adam',sex: 'man', age: 27}
            ];
        return(tnames);
    }

    public addAndGetCountLog = (xnAdd: number) => {
        this.aCountLog += xnAdd;
        return(this.aCountLog);
    };

    public getTable3(): any {
        const tnames =  [
            {name: 'Emma',sex: 'woman', age: 25},
            {name: 'Amelia',sex: 'woman', age: 26},
            {name: 'Isabella',sex: 'woman', age: 19},
            {name: 'Helena',sex: 'woman', age: 24},
            {name: 'Elizabeth',sex: 'woman', age: 19},
            {name: 'Aleksandra',sex: 'woman', age: 20},
            {name: 'Veronica',sex: 'woman', age: 25},
            {name: 'Susan',sex: 'woman', age: 20},
            {name: 'Peter',sex: 'man', age: 25},
            {name: 'Mark',sex: 'man', age: 28},
            {name: 'Dawid',sex: 'man', age: 31},
            {name: 'Gregory',sex: 'man', age: 33},
            {name: 'Tom',sex: 'man', age: 34},
            {name: 'Olaf',sex: 'man', age: 36},
            {name: 'Hans',sex: 'man', age: 31},
            {name: 'Adam',sex: 'man', age: 27},
            {name: 'Emma',sex: 'woman', age: 25},
            {name: 'Amelia',sex: 'woman', age: 26},
            {name: 'Isabella',sex: 'woman', age: 19},
            {name: 'Helena',sex: 'woman', age: 24},
            {name: 'Elizabeth',sex: 'woman', age: 19},
            {name: 'Aleksandra',sex: 'woman', age: 20},
            {name: 'Veronica',sex: 'woman', age: 25},
            {name: 'Susan',sex: 'woman', age: 20},
            {name: 'Peter',sex: 'man', age: 25},
            {name: 'Mark',sex: 'man', age: 28},
            {name: 'Dawid',sex: 'man', age: 31},
            {name: 'Gregory',sex: 'man', age: 33},
            {name: 'Tom',sex: 'man', age: 34},
            {name: 'Olaf',sex: 'man', age: 36},
            {name: 'Hans',sex: 'man', age: 31},
            {name: 'Adam',sex: 'man', age: 27}
            ];
        return(tnames);
    }

}
