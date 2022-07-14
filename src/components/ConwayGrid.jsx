import '../App.css';
import React from "react";
import { useState } from 'react';

const ALIVE = true 

function numAlive(lst) {
    return lst.filter(value => value === true).length
}

function modulo(n, d) { 
    return ((n % d) + d) % d
}

function createGrid(h, w) {

    return Array.from({length : h}, () => (
        Array.from({length: w}, () => !ALIVE)
    ))
}

const ConwayGrid = () => { 
    const gridSize = 5
    const [grid, setGrid] = useState(createGrid(gridSize, gridSize))
    const [evolving, setEvolving] = useState(false)

    if (evolving) {
        setTimeout(() => evolve(grid, setGrid), 500)
    }

    function handleCell (row, col){
        const curr = grid[row][col]
        const northNghbr = grid[modulo(row - 1, gridSize)][col]
        const southNghbr = grid[modulo(row + 1, gridSize)][col]
        const eastNghbr = grid[row][modulo(col - 1, gridSize)]
        const westNghbr = grid[row][modulo(col + 1, gridSize)]

        const neNghbr = grid[modulo(row - 1, gridSize)][modulo(col - 1, gridSize)]
        const nwNghbr = grid[modulo(row - 1, gridSize)][modulo(col + 1, gridSize)]
        const seNghbr = grid[modulo(row + 1, gridSize)][modulo(col - 1, gridSize)]
        const swNghbr = grid[modulo(row + 1, gridSize)][modulo(col + 1, gridSize)]

        const neighbors = [northNghbr, southNghbr, eastNghbr, westNghbr, neNghbr, nwNghbr, seNghbr, swNghbr]

        const aliveNghbrs = numAlive(neighbors)


        if (curr === ALIVE) {
            if (aliveNghbrs === 2 || aliveNghbrs === 3) {
                return ALIVE
            }
            else {
                return !ALIVE
            }
        }
        else {
            if (aliveNghbrs === 3) {
                return ALIVE
            }
            else { 
                return !ALIVE
            }
        }
    }

    function evolve (grid, f) { 

        const newGrid = grid.map((row, rowIdx) => 
            row.map((cell, colIdx) => handleCell(rowIdx, colIdx)))
        f(newGrid)
    };
    

    function handleClick(row, col) {
        let newGrid = [...grid]
        newGrid[row][col] = !newGrid[row][col]
        setGrid(newGrid)
    }


    const Cell = ({row, col}) => { 
        return ( 
            <div className='square' 
                style={{backgroundColor:`${grid[row][col] ? 'black' : 'transparent'}`}}
                onClick={() => handleClick(row, col)}> 
            </div>
        )}


    return (
        <>
            <button onClick={() => setEvolving(!evolving)}>{evolving ? 'pause' : 'start'}</button>
            {React.Children.toArray(grid.map((gridRow, gridIdx) =>  
                <div className='row'>
                    {React.Children.toArray(
                        gridRow.map((entry, entryIdx) => <Cell row ={gridIdx} col={entryIdx}/>
                        ))}
            </div>))}
        </>
    );
}

export default ConwayGrid