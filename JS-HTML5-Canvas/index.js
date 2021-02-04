const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');

/*Redefining the canvas size to be the same as the window*/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*Config for the line drawing*/
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.globalCompositeOperation = 'screen';

/*Theses variables are going to help with the mouse drawing*/
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

/*Function that draws*/
function draw(e){
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    lastX = e.offsetX;
    lastY = e.offsetY;

    hue++;

    if(ctx.lineWidth>=100 || ctx.lineWidth<=1){
        direction = !direction;
    }

    if(direction){
        ctx.lineWidth++;

    }else{
        ctx.lineWidth--;
    }

}

/*Controlling the mouse movement in the canvas area*/
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);