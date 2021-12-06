noseX=0;
noseY=0;
leftEarxx=0;
rightEaryy=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/V69mXW6Q/Happy-New-Year-PNG-File.png');
  clown_nose1 = loadImage('https://i.postimg.cc/G37hKzKd/Pink-Brush-Feminine-Beauty-Makeup-Logo.jpg');
  
}
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded() {
  console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-80;
    noseY = results[0].pose.nose.y-80;
    leftEarxx=results[0].pose.leftEar.x-50;
    rightEaryy=results[0].pose.rightEar.y-100;
  }
}
function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 80, 80);
  image(clown_nose1, leftEarxx, rightEaryy, 100, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
