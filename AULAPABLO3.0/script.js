function insertSquare(){

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    const squareSize = 50;

    const x = Math.random() * (canvas.width - squareSize);
    const y = Math.random() * (canvas.height - squareSize);

    ctx.fillStyle = 'blue' ; // cor do quadrado
    ctx.fillRect(x, y, squareSize, squareSize );

}