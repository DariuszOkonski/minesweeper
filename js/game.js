import { Cell } from './Cell.js';
import { UI } from './UI.js';

class Game {
    #config = {
        easy: {
            rows: 8,
            cols: 8,
            mines: 10
        },
        medium: {
            rows: 16,
            cols: 16,
            mines: 40
        },
        hard: {
            rows: 16,
            cols: 30,
            mines: 99
        }
    }

    #numberOfRows = null;
    #numberOfCols = null;
    #numberOfMines = null;

    #cells = [];

    initializeGame() {
        this.#newGame()
    }

    #newGame(rows = this.#config.easy.rows, cols = this.#config.easy.cols, mines = this.#config.easy.mines) {
        this.#numberOfRows = rows;
        this.#numberOfCols = cols;
        this.#numberOfMines = mines;

        this.#generateCells();
    }

    #generateCells() {
        for(let row = 0; row < this.#numberOfRows; row++) {
            this.#cells[row] = []

            for(let col = 0; col < this.#numberOfCols; col++) {
                this.#cells[row].push(new Cell(row, col));
            }
        }
    }
}

window.onload = function() {
    const game = new Game()
    game.initializeGame()
}