console.log("Spaceship-homework-siacob");

class Spaceship {
    
    constructor(color, engine) {
     
      this.color = spaceshipChoices;
      this.engine = engine;
      this.runningEngine = false;
    }
  
    turn(direction) {
      if (this.runningEngine) {
        console.log("The spaceship is turning", direction);
      } else {
        console.log("The spaceship is not running, turn the engine on");
      }
    }
  
    startEngine() {
      console.log(this);
      console.log("The engine is starting");
      this.runningEngine = true;
    }
  }
  
  const spaceship1 = new Spaceship(); 
  console.log(spaceship1);
  console.log(spaceship1.color);
  spaceship1.startEngine();
  console.log(spaceship1);
  console.log(Spaceship.color);

document.getElementById("generate-starship").addEventListener("click", () => {
    console.log("generate-starship");
    const newSpaceship = new StarShip();
  });