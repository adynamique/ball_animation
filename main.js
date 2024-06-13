let canvas = document.querySelector("canvas");
        let ctx = canvas.getContext("2d");

        /*the properties of the canvas SHOULD NOT be changed using the .style. property*/
        canvas.width=400;
        canvas.height=200;
        canvas.style.border="1px solid black";
        
        let ballradius = 10;
        function random_range(min, max){
            let rand = Math.random();
            let result = Math.floor(rand*(max-min)+min);
            return result;
        }

        let posY = random_range(1+ballradius,canvas.height-ballradius);
        let posX = random_range(1+ballradius,canvas.width-ballradius);
        //speed => the number of pixels wich the ball will be moved 
        let speedY = 4;
        let speedX = 5;
        /*acceleration => how much the speed will increase/decrease, 
        used to make ease-in/ease-out motions*/
        let acceleration=2;

        /*period of time in miliseconds/iterations*/
        let interval = setInterval(animate, 1000/31);

        ctx.strokeStyle="blue";

        function animate() {
            /*clears the entire canvas so the circle in the previous frame doesn't show up*/ 
            ctx.clearRect(0,0,canvas.width,canvas.height)
            /*code block that draws a new circle every time the funcion is called, 
            the last arguments in the arc function are radian angles */
            ctx.beginPath()
            ctx.arc(posX,posY,ballradius,0,Math.PI*2)
            ctx.stroke()
            ctx.closePath()

            /*reverse the vertical speed so the circle goes up/down when it hits the bottom/down*/
            if(1+posY+ballradius>=canvas.height||1+posY-ballradius<=0){
                speedY*=-1
            }
            /*reverse the horizontal speed so the circle goes righ/left when it hits the border*/
            if(1+posX+ballradius>=canvas.width||1+posX-ballradius<=0){
                speedX*=-1
            }

            // a bunch of instable code
            /*if(speedY==0 && 1+posY+ballradius>=canvas.height){acceleration=0;clearInterval(interval);
            }*/
            //speedY=speedY+=acceleration
            //end of the instable code

            //update the coordinates of the ball
            posY=posY+speedY;
            posX=posX+speedX
        }