canvas=document.getElementById('canvas2');
ctx=canvas.getContext("2d");
car_x=10;
car_y=10;
car_width=100;
car_height=100;
car2_x= 10;
car2_y= 110;
background_img="racebg.jpg";
car_img="car1.png";
car2_img="car2.png";

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_img;   // load image

    car_imgTag = new Image(); //defining a variable with a new image
    car_imgTag.onload = uploadcar; // setting a function, onloading this variable
    car_imgTag.src = car_img;   // load image

    car2_imgTag = new Image(); //defining a variable with a new image
    car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable
    car2_imgTag.src = car2_img;   // load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }

        if(keyPressed == '87')
        {
            up2();
            console.log("up2");
        }
        if(keyPressed == '83')
        {
            down2();
            console.log("down2");
        }
        if(keyPressed == '65')
        {
            left2();
            console.log("left2");
        }
        if(keyPressed == '68')
        {
            right2();
            console.log("right2");
        }
}

function up()
{
    if(car_y >=0)
    {
        car_y = car_y - 10;
        console.log("When up arrow is pressed,  x = " + car_x + " | y = " +car_y);
         uploadBackground();
         uploadcar();
         uploadcar2();
    }
}
function down()
{
    if(car_y <=500)
    {
        car_y =car_y + 10;
        console.log("When down arrow is pressed,  x = " + car_x + " | y = " +car_y);
        uploadBackground();
         uploadcar();
         uploadcar2();
    }
}
function left()
{
    if(car_x >= 0)
    {
        car_x =car_x - 10;
        console.log("When left arrow is pressed,  x = " + car_x + " | y = " + car_y);
        uploadBackground();
         uploadcar();
         uploadcar2();
    }
}
function right()
{
    if(car_x <= 700)
    {
        car_x = car_x + 10;
        console.log("When right arrow is pressed,  x = " + car_x + " | y = " + car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
   }
}




function up2()
{
    if(car2_y >=0)
    {
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
         uploadBackground();
         uploadcar2();
         uploadcar();
    }
}
function down2()
{
    if(car2_y <=500)
    {
        car2_y =car2_y+ 10;
        console.log("When down arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
         uploadcar2();
         uploadcar();
    }
}
function left2()
{
    if(car2_x >= 0)
    {
        car2_x =car2_x - 10;
        console.log("When left arrow is pressed,  x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
         uploadcar2();
         uploadcar();
    }
}
function right2()
{
    if(car2_x <= 700)
    {
        car2_x = car2_x + 10;
        console.log("When right arrow is pressed,  x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar();
   }
}