var Board = (function () {
    function Board(threeCellArray, cellArray) {
        this.threeCellArray = threeCellArray;
        this.cellArray = cellArray;
    }
    Board.prototype.print = function () {
        var err = new Error();
        try {
            document.write("<br/>");
            document.write("-----------<br/>");
            for (var rowCounter = 0; rowCounter < DIM; rowCounter++) {
                document.write(" | ");
                for (var columnCounter = 0; columnCounter < DIM; columnCounter++) {
                    document.write("" + this.threeCellArray[rowCounter].cellArray[columnCounter].cellContent);
                    document.write(" | ");
                }
                document.write("<br/>-----------<br/>");
            }
        }
        catch (err) {
        }
    };
    return Board;
}());
//# sourceMappingURL=board.js.map