class Board {
    public threeCellArray: Array<ThreeCell>;
    public cellArray: Array<Cell>;
    public constructor(threeCellArray: Array<ThreeCell>, cellArray: Array<Cell>) {
        this.threeCellArray = threeCellArray;
        this.cellArray = cellArray;
    }
    public print(): void {
        let err: Error = new Error();
        try {
            document.write("<br/>");
            document.write("-----------<br/>");
            for (let rowCounter: number = 0; rowCounter < DIM; rowCounter++) {
                document.write(" | ");
                for (let columnCounter: number = 0; columnCounter < DIM; columnCounter++) {
                    document.write(`${this.threeCellArray[rowCounter].cellArray[columnCounter].cellContent}`);
                    document.write(" | ");
                }
                document.write("<br/>-----------<br/>");
            }
        }
        catch (err) {
        }
    }
}