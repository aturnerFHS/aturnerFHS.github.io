$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(10, 675, 250, 20, "pink");
    createPlatform(300, 545, 150, 20, "pink");
    createPlatform(445, 650, 90, 20, "pink");
    createPlatform(415, 425, 20, 150, "pink");
    createPlatform(480, 410, 225, 20, "pink");
    createPlatform(690, 590, 275, 20, "pink");



    // TODO 3 - Create Collectables
    createCollectable("diamond", 175, 670);
    createCollectable("diamond", 730, 375);
    createCollectable("diamond", 990, 575);



    
    // TODO 4 - Create Cannons
    createCannon("bottom", 610, 740);
    createCannon("top", 200, 540);
    createCannon("top", 1100, 350);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
