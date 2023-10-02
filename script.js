const gameContainer = document.getElementById('game-container');
        const scoreElement = document.getElementById('score');
        const gameOverElement = document.getElementById('game-over');
        const restartButton = document.getElementById('restart-button');
        let score = 0;
        let misses = 0;
        let gameRunning = true;

        function createPixel() {
            if (!gameRunning) return;

            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.left = Math.random() * (gameContainer.clientWidth - 10) + 'px';
            pixel.style.top = Math.random() * (gameContainer.clientHeight - 10) + 'px';
            
            pixel.style.backgroundColor = randomColor();

            pixel.addEventListener('click', () => {
                if (!gameRunning) return;
                pixel.style.display = 'none';
                score++;
                updateScore();
                if(score>=5){
                    createLShape();
                }
                if(score>=10){
                    createAShape();
                }
                if(score>=15){
                    createWShape();
                }
                if(score>=20){
                    createOShape();
                }
                if(score>=30){
                    setInterval(createPixel, 500);
                }
            });

            gameContainer.appendChild(pixel);
        }

        function updateScore() {
            scoreElement.textContent = `Score: ${score}`;
        }

        function endGame() {
            gameRunning = false;
            gameOverElement.style.display = 'block';
        }

        function createLShape() {
            const lPixels = [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3],
                [0, 4],
                [1, 4],
                [2, 4],
                [3, 4],
            ];

           
            const centerX = Math.floor((gameContainer.clientWidth - 3 * 10) * 0.18);
            const centerY = Math.floor((gameContainer.clientHeight - 5 * 10) / 2);

            lPixels.forEach((coords) => {
                const [x, y] = coords;
                const lPixel = document.createElement('div');
                lPixel.classList.add('pixel');
                lPixel.style.left = centerX + x * 10 + 'px';
                lPixel.style.top = centerY + y * 10 + 'px';
                lPixel.style.backgroundColor = randomColor();
                gameContainer.appendChild(lPixel);
            });
        }

        function createAShape() {
            const aPixels = [
                [1, 0],
                [0, 1],
                [0, 2],
                [0, 3],
                [0, 4],
                [4, 4],
                [4, 3],
                [4, 2],
                [4, 1],
                [2, 0],
                [3, 0],
            ];

            const centerX = Math.floor((gameContainer.clientWidth - 3 * 10) * 0.35);
            const centerY = Math.floor((gameContainer.clientHeight - 5 * 10) / 2);

            aPixels.forEach((coords) => {
                const [x, y] = coords;
                const aPixel = document.createElement('div');
                aPixel.classList.add('pixel');
                aPixel.style.left = centerX + x * 10 + 'px';
                aPixel.style.top = centerY + y * 10 + 'px';
                aPixel.style.backgroundColor = randomColor();
                gameContainer.appendChild(aPixel);
            });
        }

        function createWShape() {
            const wPixels = [
                [0, 0],
                [0, 1],
                [0, 2],
                [1, 3],
                [2, 4],
                [3, 3],
                [4, 4],
                [5, 3],
                [6, 2],
                [6, 1],
                [6, 0],
            ];

            const centerX = Math.floor((gameContainer.clientWidth - 3 * 10) * 0.53);
            const centerY = Math.floor((gameContainer.clientHeight - 5 * 10) / 2);

            wPixels.forEach((coords) => {
                const [x, y] = coords;
                const wPixel = document.createElement('div');
                wPixel.classList.add('pixel');
                wPixel.style.left = centerX + x * 10 + 'px';
                wPixel.style.top = centerY + y * 10 + 'px';
                wPixel.style.backgroundColor = randomColor();
                gameContainer.appendChild(wPixel);
            });
        }

        function createOShape() {
            const oPixels = [
                [1, 0],
                [0, 1],
                [0, 2],
                [0, 3],
                [1, 4],
                [2, 4],
                [3, 4],
                [4, 3],
                [4, 2],
                [4, 1],
                [3, 0],
                [2, 0],
            ];

            const centerX = Math.floor((gameContainer.clientWidth - 4 * 10) * 0.76);
            const centerY = Math.floor((gameContainer.clientHeight - 4 * 10) / 2);

            oPixels.forEach((coords) => {
                const [x, y] = coords;
                const oPixel = document.createElement('div');
                oPixel.classList.add('pixel');
                oPixel.style.left = centerX + x * 10 + 'px';
                oPixel.style.top = centerY + y * 10 + 'px';
                oPixel.style.backgroundColor = randomColor();
                gameContainer.appendChild(oPixel);
            });
        }

        function randomColor() {
        const colors = ['#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
        let color = colors[Math.floor(Math.random() * colors.length)];
        return color;
        }

        function endGame() {
            gameRunning = false;
            gameOverElement.style.display = 'block';
        }

        restartButton.addEventListener('click', () => {
            gameContainer.innerHTML = '';
            score = 0;
            updateScore();
            gameRunning = true;
            gameOverElement.style.display = 'none';
            setInterval(createPixel, 1000);
        });

        setInterval(createPixel, 1000);