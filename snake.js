let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");

    let cell = 50;
    let snakeCells = [[0, 0]];
    let direction = "right";
    let gameOver = false;
    let score = 0;
    let food = generateRandomCell();

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp" && direction !== "down") direction = "up";
      else if (e.key === "ArrowDown" && direction !== "up") direction = "down";
      else if (e.key === "ArrowLeft" && direction !== "right") direction = "left";
      else if (e.key === "ArrowRight" && direction !== "left") direction = "right";
    });

    let id = setInterval(() => {
      update();
      draw();
    }, 150);

    function update() {
      let headX = snakeCells[snakeCells.length - 1][0];
      let headY = snakeCells[snakeCells.length - 1][1];

      let newX, newY;

      if (direction === "right") {
        newX = headX + cell;
        newY = headY;
        if (newX >= canvas.width) gameOver = true;
      } else if (direction === "left") {
        newX = headX - cell;
        newY = headY;
        if (newX < 0) gameOver = true;
      } else if (direction === "up") {
        newX = headX;
        newY = headY - cell;
        if (newY < 0) gameOver = true;
      } else {
        newX = headX;
        newY = headY + cell;
        if (newY >= canvas.height) gameOver = true;
      }

      snakeCells.push([newX, newY]);

      // Agar food khaya
      if (newX === food[0] && newY === food[1]) {
        food = generateRandomCell();
        score++;
      } else {
        snakeCells.shift(); // tail remove
      }

      // Apne aap se takraaya
      for (let i = 0; i < snakeCells.length - 1; i++) {
        if (snakeCells[i][0] === newX && snakeCells[i][1] === newY) {
          gameOver = true;
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (gameOver) {
        clearInterval(id);
        ctx.fillStyle = "red";
        ctx.font = "40px sans-serif";
        ctx.fillText("Game Over!", 450, 250);
        ctx.fillStyle = "white";
        ctx.font = "25px sans-serif";
        ctx.fillText(Final Score: ${score}, 470, 300);
        return;
      }

      // Snake draw
      for (let c of snakeCells) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(c[0], c[1], cell, cell);   // ✅ fix
        ctx.strokeStyle = "black";
        ctx.strokeRect(c[0], c[1], cell, cell); // ✅ fix
      }

      // Food draw
      ctx.fillStyle = "red";
      ctx.fillRect(food[0], food[1], cell, cell);

      // Score
      ctx.fillStyle = "white";
      ctx.font = "20px sans-serif";
      ctx.fillText(Score: ${score}, 50, 50);
    }
    function generateRandomCell() {
      let x = Math.round((Math.random() * (canvas.width - cell)) / cell) * cell;
      let y = Math.round((Math.random() * (canvas.height - cell)) / cell) * cell;
      return [x, y];
    }