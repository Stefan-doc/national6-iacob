console.log("Starship Generator");

const possibleChoices = ["blue-spaceship.png", "green-spaceship.png", "red-spaceship.png"];
const spaceshipChoices = possibleChoices[Math.floor(Math.random() * 3)];

class StarShip {
    constructor() {
      this.runningEngine = false;
      this.position = 0;
      this.width = 50;
      this.height = 50;
      this.generateHtmlRef();
      this.setStartEngine();
      this.setMoveCar();
    }
  
    generateHtmlRef() {
      this.ref = document.createElement("img");
      this.ref.src = spaceshipChoices;
      this.ref.classList.add("spaceship");
      document.body.appendChild(this.ref);
    }
  
    setStartEngine() {
      this.ref.addEventListener("click", () => {
        this.startEngine();
      });
    }
  
    startEngine() {
      if (!this.runningEngine) {
        this.runningEngine = true;
        console.log("Engine is starting");
        this.ref.classList.add("spaceship--start");
      }
    }
  
    setMoveCar() {
      document.addEventListener("keydown", (event) => {
        console.log(event);
        if (this.runningEngine) {
          this.moveCar(event.key);
        }
      });
    }
  
    moveCar(direction) {
      if (direction === "ArrowRight") {
        this.position += 5;
        this.ref.style.marginLeft = `${this.position}px`;
      } else if (direction === "ArrowLeft") {
        this.position -= 5;
        this.ref.style.marginLeft = `${this.position}px`;
      }
      if (direction === "ArrowUp") {
        this.position -= 5;
        this.ref.style.marginTop = `${this.position}px`;
      } else if (direction === "ArrowDown") {
        this.position += 5;
        this.ref.style.marginTop = `${this.position}px`;
      }
    }
}