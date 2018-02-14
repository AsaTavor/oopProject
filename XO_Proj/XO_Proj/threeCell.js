var ThreeCell = (function () {
    function ThreeCell(cellNumberArray, cellFullArray) {
        this.xCount = 0;
        this.oCount = 0;
        this.cellNumberArray = cellNumberArray;
        this.cellArray = new Array(3);
        this.cellArray[0] = cellFullArray[this.cellNumberArray[0]];
        this.cellArray[1] = cellFullArray[this.cellNumberArray[1]];
        this.cellArray[2] = cellFullArray[this.cellNumberArray[2]];
    }
    ThreeCell.prototype.fillThreeCell = function (xOrO, cellNumber) {
        if (cellNumber == this.cellNumberArray[0] || cellNumber == this.cellNumberArray[1] || cellNumber == this.cellNumberArray[2]) {
            if (xOrO)
                this.xCount++;
            else
                this.oCount++;
        }
    };
    return ThreeCell;
}());
//# sourceMappingURL=threeCell.js.map