var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9db9e11b-4cef-4953-8dcf-9afe823c9abe"],"propsByKey":{"9db9e11b-4cef-4953-8dcf-9afe823c9abe":{"name":"pond","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"qKb5Ec85iVhuEg0mT5ZniMYA0Lxw6v5F","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9db9e11b-4cef-4953-8dcf-9afe823c9abe.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(15, 200, 10, 60);
var wall2 = createSprite(40, 170, 60, 10);
var wall3 = createSprite(40, 225, 60, 10);
var wall4 = createSprite(73, 145, 10, 60);
var wall5 = createSprite(200, 110, 261, 10);
var wall6 = createSprite(385, 200, 10, 60);
var wall7 = createSprite(360, 170, 60, 10);
var wall8 = createSprite(360, 225, 60, 10);
var wall9 = createSprite(327, 145, 10, 60);
var wall10 = createSprite(327, 250, 10, 60);
var wall11 = createSprite(200, 110, 261, 10);
var wall12 = createSprite(200, 285, 261, 10);
var wall13 = createSprite(70, 255, 10, 60);

var frog = createSprite(48, 198, 20, 20);
frog.shapeColor = "green";

var pond = createSprite(355, 197);
pond.setAnimation("pond");
pond.scale = 0.5;

var crab1 = createSprite(123, 145, 15, 15);
crab1.velocityY = 8;
crab1.shapeColor = "red";

var crab2 = createSprite(193, 256, 15, 15);
crab2.velocityY = 8;
crab2.shapeColor = "red";

var crab3 = createSprite(272, 145, 15, 15);
crab3.velocityY = 8;
crab3.shapeColor = "red";

function draw() {
  if (crab1.isTouching(wall11)) 
  crab1.bounceOff(wall11);
  if (crab2.isTouching(wall11)) {
  crab2.bounceOff(wall11);
  }
  if (crab3.isTouching(wall11)) {
    crab3.bounceOff(wall11);
  }
  
  if (crab1.isTouching(wall12)) {
    crab1.bounceOff(wall12);
  }
  if (crab2.isTouching(wall12)) {
    crab2.bounceOff(wall12);
  }
  if (crab3.isTouching(wall12)) {
    crab3.bounceOff(wall12);
  }
  
  if (keyDown("left")) {
    frog.x = frog.x + -3;
  }
  if (keyDown("right")) {
    frog.x = frog.x + 3;
  }
  if (frog.isTouching(crab1)) {
    frog.x = 48;
    frog.y = 198;
  }
  if (frog.isTouching(crab2)) {
     frog.x = 48;
    frog.y = 198;
  }
  if (frog.isTouching(crab3)) {
     frog.x = 48;
    frog.y = 198;
  }
  if (frog.isTouching(pond)) {
    crab3.velocityY = 0;
    crab2.velocityY = 0;
    crab1.velocityY = 0;
    frog.visible = false;
  }
  background ("cyan");
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
