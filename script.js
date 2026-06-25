const game = new Chess();

const board = Chessboard("board", {
    draggable: true,
    position: "start",

    pieceTheme:
    "https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png",

    onDrop: onDrop
});

function onDrop(source, target) {

    const move = game.move({
        from: source,
        to: target,
        promotion: "q"
    });

    if (move === null) {
        return "snapback";
    }

    window.setTimeout(aiMove, 400);
}

function aiMove() {

    const moves = game.moves();

    if (moves.length === 0) {
        alert("Game Over!");
        return;
    }

    const randomMove =
        moves[Math.floor(Math.random() * moves.length)];

    game.move(randomMove);

    board.position(game.fen());
}

function restartGame() {

    game.reset();

    board.start();
}