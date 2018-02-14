class Cell {
    private _cellNumber: number;
    private _fullFlag: boolean;
    private _xFlag: boolean=false;
    private _oFlag: boolean = false;
    public cellContent: string;
    public fillCell(xOrO:boolean): void {
        if (xOrO) {
            this.xFlag = true;
            this.cellContent = "X";
        }
        else {
            this.oFlag = true;
            this.cellContent = "O";
        }
        this.fullFlag = true;
    }
    public forPrint(): string {
        if (this._xFlag) return "X";
        if (this._oFlag) return "O";
        else return this.cellNumber.toString();
    }
    public constructor(cellNumber: number) {
        this.cellNumber = cellNumber;
        this.fullFlag = false;
        this.cellContent = this.forPrint();
    }
    public setCell(xOrO: boolean) {
        if (xOrO) {
            this.xFlag = true;
            this.oFlag = false;
        }
        else {
            this.xFlag = false;
            this.oFlag = true;
        }
        this.fullFlag = true;
        this.cellContent = this.forPrint();
    }
    
    public get cellNumber(): number {
        return this._cellNumber;
    }
    public set cellNumber(cellNumber: number) {
        if (cellNumber<=8&&cellNumber>=0) {
            this._cellNumber = cellNumber;
        }
        else {
            this._cellNumber = 0;
        }
    }
    public get fullFlag(): boolean {
        return this._fullFlag;
    }
    public set fullFlag(fullFlag: boolean) {
            this._fullFlag = fullFlag;
    }
    public get xFlag(): boolean {
        return this._xFlag;
    }
    public set xFlag(xFlag: boolean) {
        this._xFlag = xFlag;
    }
    public get oFlag(): boolean {
        return this._oFlag;
    }
    public set oFlag(oFlag: boolean) {
        this._oFlag = oFlag;
    }
}

