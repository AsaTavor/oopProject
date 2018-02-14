var Cell = (function () {
    function Cell(cellNumber) {
        this._xFlag = false;
        this._oFlag = false;
        this.cellNumber = cellNumber;
        this.fullFlag = false;
        this.cellContent = this.forPrint();
    }
    Cell.prototype.fillCell = function (xOrO) {
        if (xOrO) {
            this.xFlag = true;
            this.cellContent = "X";
        }
        else {
            this.oFlag = true;
            this.cellContent = "O";
        }
        this.fullFlag = true;
    };
    Cell.prototype.forPrint = function () {
        if (this._xFlag)
            return "X";
        if (this._oFlag)
            return "O";
        else
            return this.cellNumber.toString();
    };
    Cell.prototype.setCell = function (xOrO) {
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
    };
    Object.defineProperty(Cell.prototype, "cellNumber", {
        get: function () {
            return this._cellNumber;
        },
        set: function (cellNumber) {
            if (cellNumber <= 8 && cellNumber >= 0) {
                this._cellNumber = cellNumber;
            }
            else {
                this._cellNumber = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "fullFlag", {
        get: function () {
            return this._fullFlag;
        },
        set: function (fullFlag) {
            this._fullFlag = fullFlag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "xFlag", {
        get: function () {
            return this._xFlag;
        },
        set: function (xFlag) {
            this._xFlag = xFlag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "oFlag", {
        get: function () {
            return this._oFlag;
        },
        set: function (oFlag) {
            this._oFlag = oFlag;
        },
        enumerable: true,
        configurable: true
    });
    return Cell;
}());
//# sourceMappingURL=cell.js.map