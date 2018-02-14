var Game = (function () {
    function Game() {
        this.gameOverFlag = false;
        this.cellArray = new Array(9);
        for (var i = 0; i < 9; i++) {
            this.cellArray[i] = new Cell(i);
        }
        this.threeCellArray = new Array(8);
        this.threeCellArray[0] = new ThreeCell([0, 1, 2], this.cellArray);
        this.threeCellArray[1] = new ThreeCell([3, 4, 5], this.cellArray);
        this.threeCellArray[2] = new ThreeCell([6, 7, 8], this.cellArray);
        this.threeCellArray[3] = new ThreeCell([0, 3, 6], this.cellArray);
        this.threeCellArray[4] = new ThreeCell([1, 4, 7], this.cellArray);
        this.threeCellArray[5] = new ThreeCell([2, 5, 8], this.cellArray);
        this.threeCellArray[6] = new ThreeCell([0, 4, 8], this.cellArray);
        this.threeCellArray[7] = new ThreeCell([2, 4, 6], this.cellArray);
        this.board = new Board(this.threeCellArray, this.cellArray);
        while (!(this.gameOverFlag)) {
            this.board.print();
            this.printButton();
            break;
        }
    }
    Game.prototype.printButton = function () {
        3;
        document.write("<br/><button onclick=\"game.play()\">Next Move</button></a><br/>");
    };
    Game.prototype.checkIfWin = function () {
        for (var i = 0; i < this.threeCellArray.length; i++) {
            if (this.threeCellArray[i].oCount == 3 || this.threeCellArray[i].xCount == 3)
                return true;
        }
        return false;
    };
    Game.prototype.computerPlay = function () {
        Game.moves++;
        for (var i = 0; i < this.threeCellArray.length; i++) {
            if (this.threeCellArray[i].oCount == 2 && this.threeCellArray[i].xCount == 0) {
                for (var j = 0; j < DIM; j++) {
                    if (this.threeCellArray[i].cellArray[j].fullFlag == false) {
                        this.threeCellArray[i].fillThreeCell(false, this.threeCellArray[i].cellArray[j].cellNumber);
                        this.threeCellArray[i].cellArray[j].fillCell(false);
                        return;
                    }
                }
            }
        }
        for (var i = 0; i < this.threeCellArray.length; i++) {
            if (this.threeCellArray[i].oCount == 0 && this.threeCellArray[i].xCount == 2) {
                for (var j = 0; j < DIM; j++) {
                    if (this.threeCellArray[i].cellArray[j].fullFlag == false) {
                        this.threeCellArray[i].fillThreeCell(false, this.threeCellArray[i].cellArray[j].cellNumber);
                        this.threeCellArray[i].cellArray[j].fillCell(false);
                        return;
                    }
                }
            }
        }
        for (var i = 0; i < this.cellArray.length; i++) {
            if (this.cellArray[i].fullFlag == false) {
                this.cellArray[i].fillCell(false);
                this.threeCellArray[0].fillThreeCell(false, i);
                this.threeCellArray[1].fillThreeCell(false, i);
                this.threeCellArray[2].fillThreeCell(false, i);
                this.threeCellArray[3].fillThreeCell(false, i);
                this.threeCellArray[4].fillThreeCell(false, i);
                this.threeCellArray[5].fillThreeCell(false, i);
                this.threeCellArray[6].fillThreeCell(false, i);
                this.threeCellArray[7].fillThreeCell(false, i);
                return;
            }
        }
        /////////////////////////////////stopped here
    };
    Game.prototype.play = function () {
        var ocupidFlag = false;
        var cellNumber;
        if (!this.gameOverFlag) {
            Game.moves++;
            while (true) {
                cellNumber = Number(prompt("Enter your move"));
                if (!cellNumber && cellNumber != 0) {
                    alert("Not a number");
                    continue;
                }
                if (cellNumber < 0 || cellNumber > 8) {
                    alert("Out of range [0,8]");
                    continue;
                }
                if (this.cellArray[cellNumber].fullFlag) {
                    alert("This cell is full");
                    continue;
                }
                break;
            }
            this.cellArray[cellNumber].fillCell(true);
            for (var i = 0; i < this.threeCellArray.length; i++) {
                this.threeCellArray[i].fillThreeCell(true, cellNumber);
            }
            this.board.print();
            this.printButton();
            if (this.checkIfWin()) {
                alert("You win");
                document.write("<br/><br/>You win<br/><br/>");
                this.gameOverFlag = true;
                return;
            }
            this.computerPlay();
            this.board.print();
            if (Game.moves == 10) {
                alert("No one wins");
                document.write("<br/><br/>No one win<br/><br/>");
                this.gameOverFlag = true;
                return;
            }
            if (this.checkIfWin()) {
                document.write("<br/><br/>You loose<br/><br/>");
                alert("You loose");
                this.gameOverFlag = true;
                return;
            }
            this.printButton();
        }
    };
    return Game;
}());
Game.moves = 0;
//# sourceMappingURL=game.js.map