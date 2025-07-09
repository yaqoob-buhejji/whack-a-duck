function init(){
    //All code goes here
    const gridElem = document.querySelector('.grid')

    const cells = []
    const gridWidth = 10
    const numberofCells = gridWidth * gridWidth

    let duckPosition = 58

    function addDuck(){
        cells[duckPosition].classList.add('duck')
    }

    function removeDuck(){
        cells[duckPosition].classList.remove('duck')
    }

    function play(){
        setInterval(() =>{
            removeDuck()
            duckPosition = Math.floor(Math.random() * numberofCells)
            addDuck()
        }, 2000)
    }

    function createGrid(){
        //for every cell that we require create a div
        // apend this cell to our grid
        for (let i=0; i<100; i++){
            const cell = document.createElement('div')
            // cell.classList.add('duck')
            cell.textContent = i 
            cells.push(cell)          
            gridElem.appendChild(cell)

        }
        console.log(cells)
    }
    createGrid() 
    play()
    

}

document.addEventListener('DOMContentLoaded', init)