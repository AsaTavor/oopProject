var Cell = (function () {
    function Cell() {
    }
    Object.defineProperty(Cell.prototype, "cellNumber", {
        get: function () {
            return this._cellNumber;
        },
        set: function (cellNumber) {
            if (cellNumber <= 9 && cellNumber >= 0) {
                this._cellNumber = cellNumber;
            }
            else {
                this._cellNumber = 30;
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
    Object.defineProperty(Cell.prototype, "XFlag", {
        get: function () {
            return this._XFlag;
        },
        set: function (XFlag) {
            this._XFlag = XFlag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "OFlag", {
        get: function () {
            return this._OFlag;
        },
        set: function (OFlag) {
            this._OFlag = OFlag;
        },
        enumerable: true,
        configurable: true
    });
    return Cell;
}());
//# sourceMappingURL=app.js.map