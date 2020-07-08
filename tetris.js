window.onload = main;

const M = 10;
const N = 5;
let matrix = [];
let randomJ = Math.floor(Math.random() * 5);
let wallI = 0;
let carCurrentJ = 2;
console.log(randomJ);
function main() {
    createMatrix();
    console.log(matrix);

    setCar();


    document.addEventListener("keydown", function(e) {
        if (e.code === 'Space') {
            setInterval(function(){
                startAlgorithm();
                }, 50) ;


        }
   });

    document.addEventListener("keydown", function(press){

        if(press.code === "ArrowLeft" && isOnMatrixLeft(carCurrentJ)) {
            moveCarLeft();
        }
        if (press.code === "ArrowRight" && isOnMatrixRight(carCurrentJ)){
            moveCarRight();
        }
    })

}

function createMatrix() {
    const table = document.getElementById('MATRIX');


    for (let i = 0; i < M; i++) {
        matrix[i] = [];
        let row = document.createElement('tr');
        table.appendChild(row);
        for (let j = 0; j < N; j++) {
            matrix[i][j] = 0;
            let cell = document.createElement('td');
            cell.id = 'cell_' + i + '_' + j;
           // console.log(cell.id);
            row.appendChild(cell);
        }
    }
}

function startAlgorithm() {

        let back = wallI - 1;
        let cell = 'cell_' + wallI + '_'+ randomJ;
        let cellBack = 'cell_' + back + '_'+ randomJ;
        if(wallI === 0){


            document.getElementById(cell).classList.add("Block");
        }else{
           matrix[wallI - 1][randomJ] = 0;
           document.getElementById(cell).classList.add("Block");
            document.getElementById(cellBack).classList.remove("Block");

        }
    wallI++
    if(wallI === 10){
        document.getElementById(cell).classList.remove("Block");
        randomJ = randomNum();
        wallI = 0;
      }
    }

function moveCarLeft(){
    let leftMove = carCurrentJ - 1;
    let left = 'cell_'+ 9 +'_'+ leftMove ;
    let rightDel = 'cell_'+ 9 +'_'+ carCurrentJ ;
    document.getElementById(left).classList.add('car');

    document.getElementById(rightDel).classList.remove('car');
    matrix[9][leftMove] = 1;
    matrix[9][carCurrentJ] = 0;
    carCurrentJ = leftMove;
   // console.log(matrix);
}

function moveCarRight(){
    let rightMove = carCurrentJ + 1;
    let right = 'cell_'+ 9 +'_'+ rightMove ;
    let leftDel = 'cell_'+ 9 +'_'+ carCurrentJ ;
    document.getElementById(right).classList.add('car');
    //console.log(matrix)
    document.getElementById(leftDel).classList.remove('car');
    matrix[9][rightMove] = 1;
    matrix[9][carCurrentJ] = 0;
    carCurrentJ = rightMove;
  //  console.log(matrix);
}


function isOnMatrixLeft(carCurrentJ) {

    return carCurrentJ >=0 && carCurrentJ < 10 && matrix[9][carCurrentJ - 1] === 0;
}
function isOnMatrixRight(carCurrentJ) {

    return carCurrentJ >=0 && carCurrentJ < 10 && matrix[9][carCurrentJ + 1] === 0;
}

function isFinished(curNum) {
      if (matrix[wallI][randomJ] === 1 ){
          return matrix[wallI][randomJ] === 0;
    }

}
 function setCar() {
    matrix [9][2] = 1;
    document.getElementById("cell_9_2").classList.add('car')
 }

 function randomNum(){
    return Math.floor(Math.random() * 5);

 }