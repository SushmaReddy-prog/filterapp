noseX=0;
noseY=0;


function preload() {
  clown_nose = loadImage('https://i.postimg.cc/fTPSf0DV/images-removebg-preview.png');
  headband= loadImage("https://i.postimg.cc/CxpyfSdW/images-removebg-preview-2.png");
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400, 400);
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
    noseX = results[0].pose.nose.x-83;
    noseY = results[0].pose.nose.y-83;
    nose2x=results[0].pose.nose.x-83;
    nose2y = results[0].pose.nose.y-190;

  }
}

function draw() {
  image(video, 0, 0, 400, 400);
  image(clown_nose, noseX, noseY, 170, 170);
  image(headband, nose2x, nose2y, 200, 190);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
