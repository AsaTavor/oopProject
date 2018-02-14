class ThreeCell {
    public cellArray: Array<Cell>;
    public cellNumberArray: Array<number>;
    public xCount: number=0;
    public oCount: number=0;
    public constructor(cellNumberArray: Array<number>, cellFullArray: Array<Cell>) {
        this.cellNumberArray = cellNumberArray;
        this.cellArray = new Array<Cell>(3);
        this.cellArray[0] = cellFullArray[this.cellNumberArray[0]];
        this.cellArray[1] = cellFullArray[this.cellNumberArray[1]];
        this.cellArray[2] = cellFullArray[this.cellNumberArray[2]];
    }
    public fillThreeCell(xOrO: boolean, cellNumber: number): void {
        if (cellNumber == this.cellNumberArray[0] || cellNumber == this.cellNumberArray[1] || cellNumber == this.cellNumberArray[2]) {
            if (xOrO) this.xCount++;
            else this.oCount++;
        }
    }

}