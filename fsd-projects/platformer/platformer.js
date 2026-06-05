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

    // TODO 1
    //toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(0, 400, 80, 20, "#000000");
      createPlatform(200, 600, 20, 20, "#FFB6C1");
      createPlatform(350, 600, 20, 20, "#FF7F7F");
      createPlatform(500, 700, 50, 20, "#FFD580");
      createPlatform(750, 570, 50, 20, "#f5f5c1");
      createPlatform(900, 440, 95, 20, "#90EE90");
      createPlatform(700, 350, 70, 20, "#49bce3");
      createPlatform(500, 250, 50, 20, "#CBC3E3");
      createPlatform(750, 150, 95, 20, "white");
      createPlatform(1000, 180, 45, 20, "#000000");
    // TODO 3 - Create Collectables

      createCollectable("database",1000,150);
      createCollectable("max",150,550);
      createCollectable("diamond",600,600);
      createCollectable("grace",600,100);   
    // TODO 4 - Create Cannons
       createCannon("bottom",250,700);
       createCannon("bottom",1100,70);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
