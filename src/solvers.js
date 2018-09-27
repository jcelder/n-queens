/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});

  var findSolution = (piecesPlaced) => {
    for (var i = 0; i < n; i++) {
      solution.togglePiece(piecesPlaced, i);
      piecesPlaced++;
      if (piecesPlaced === n && !solution.hasAnyRooksConflicts()) {
        return solution;
      } else if (solution.hasAnyRooksConflicts()) {
        piecesPlaced--;
        solution.togglePiece(piecesPlaced, i);
      } else {
        if (findSolution(piecesPlaced)) {
          return solution;
        }
      }
    }
  };
  findSolution(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutions = [];
  var solutionCount = 0;


  var findAllSolutions = (board = new Board({n}), piecesPlaced = 0) => {
    for (var i = 0; i < n; i++) {
      // var board = new Board({n});
      // var piecesPlaced = piecesPlacedArg;
      // Object.assign(passedBoard, board);
      board.togglePiece(piecesPlaced, i);
      piecesPlaced++;
      if (piecesPlaced === n && !board.hasAnyRooksConflicts()) {
        solutionCount++;
        board.togglePiece(piecesPlaced - 1, i);
        return;
      } else if (board.hasAnyRooksConflicts()) {
        piecesPlaced--;
        board.togglePiece(piecesPlaced, i);
      } else {
        findAllSolutions(board, piecesPlaced);
        piecesPlaced--;
        board.togglePiece(piecesPlaced, i);
      }
    }
  };

  findAllSolutions();

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
