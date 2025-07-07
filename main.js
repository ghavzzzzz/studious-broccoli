noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
diff=0;

function setup(){

    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(300,200);
    canvas=createCanvas(550,550);
    canvas.position(950,150);
    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
 function draw(){
    background('#98f516');
    fill('#7FFFD4');
    stroke(' #FFD700');
    square(noseX,noseY,diff);
    document.getElementById("s_s").innerHTML = "Width And Height of a Square will be = " + diff +"px";

 }
function modelLoaded(){

    console.log("Model is Loaded");
}
function gotPoses(results){

    if(results.length > 0){

        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX =" + noseX + ", noseY =" + noseY);
                 
          rightWristX=results[0].pose.rightWrist.x;
          leftWristX=results[0].pose.leftWrist.x;
          diff= floor(rightWristX - leftWristX);
          console.log("rightWristX=" + rightWristX + "leftWristX=" + leftWristX + "diff=" + diff );      


    } 

}
