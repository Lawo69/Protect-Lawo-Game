const gameContainer = document.getElementById('game-container');
        const scoreElement = document.getElementById('score');
        const gameOverElement = document.getElementById('game-over');
        const restartButton = document.getElementById('restart-button');
        let score = 0;
        let misses = 0;
        let gameRunning = true;

        function getPixelSize() {
            return window.innerWidth <= 728 ? 10 : 20;
        }

        function createPixel() {
            if (!gameRunning) return;

            const pixel = document.createElement('div');
            pixel.classList.add('pixel');

            const pixelSize = getPixelSize();

            pixel.style.width = pixelSize + 'px';
            pixel.style.height = pixelSize + 'px';
            pixel.style.left = Math.random() * (gameContainer.clientWidth - pixelSize) + 'px';
            pixel.style.top = Math.random() * (gameContainer.clientHeight - pixelSize) + 'px';
            
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
                [0, 5],
                [0, 6],
                [0, 7],
                [0, 8],
                [1, 8],
                [2, 8],
                [3, 8],
                [4, 8],
                [5, 8],
                [6, 8],
            ];

           
            const centerX = Math.floor((gameContainer.clientWidth - 3 * getPixelSize()) * 0.18);
            const centerY = Math.floor((gameContainer.clientHeight - 5 * getPixelSize()) / 2);

            lPixels.forEach((coords) => {
                const [x, y] = coords;
                const lPixel = document.createElement('div');
                lPixel.classList.add('pixel');
                lPixel.style.width = getPixelSize() + 'px';
                lPixel.style.height = getPixelSize() + 'px';
                lPixel.style.left = centerX + x * getPixelSize() + 'px';
                lPixel.style.top = centerY + y * getPixelSize() + 'px';
                lPixel.style.backgroundColor = randomColor();
                gameContainer.appendChild(lPixel);
            });
        }

        function createAShape() {
            const aPixels = [
                [2, 0],
                [1, 1],
                [0, 2],
                [0, 3],
                [0, 4],
                [0, 5],
                [2, 4],
                [3, 4],
                [4, 4],
                [5, 4],
                [6, 4],
                [0, 6],
                [0, 7],
                [0, 8],
                [8, 8],
                [8, 7],
                [8, 6],
                [8, 5],
                [8, 4],
                [8, 3],
                [8, 2],
                [7, 1],
                [4, 0],
                [5, 0],
                [3, 0],
                [6, 0],
            ];

            const centerX = Math.floor((gameContainer.clientWidth - 3 * getPixelSize()) * 0.35);
            const centerY = Math.floor((gameContainer.clientHeight - 5 * getPixelSize()) / 2);

            aPixels.forEach((coords) => {
                const [x, y] = coords;
                const aPixel = document.createElement('div');
                aPixel.classList.add('pixel');
                aPixel.style.width = getPixelSize() + 'px';
                aPixel.style.height = getPixelSize() + 'px';
                aPixel.style.left = centerX + x * getPixelSize() + 'px';
                aPixel.style.top = centerY + y * getPixelSize() + 'px';
                aPixel.style.backgroundColor = randomColor();
                gameContainer.appendChild(aPixel);
            });
        }

        function createWShape() {
            const wPixels = [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3],
                [0, 4],
                [0, 5],
                [1, 6],
                [2, 7],
                [3, 8],
                [4, 8],
                [5, 7],
                [6, 5],
                [6, 6],
                [7, 7],
                [8, 8],
                [9, 8],
                [10, 7],
                [12, 5],
                [11, 6],
                [12, 4],
                [12, 3],
                [12, 2],
                [12, 1],
                [12, 0],
            ];

            const centerX = Math.floor((gameContainer.clientWidth - 3 * getPixelSize()) * 0.53);
            const centerY = Math.floor((gameContainer.clientHeight - 5 * getPixelSize()) / 2);

            wPixels.forEach((coords) => {
                const [x, y] = coords;
                const wPixel = document.createElement('div');
                wPixel.classList.add('pixel');
                wPixel.style.width = getPixelSize() + 'px';
                wPixel.style.height = getPixelSize() + 'px';
                wPixel.style.left = centerX + x * getPixelSize() + 'px';
                wPixel.style.top = centerY + y * getPixelSize() + 'px';
                wPixel.style.backgroundColor = randomColor();
                gameContainer.appendChild(wPixel);
            });
        }

        function createOShape() {
            const oPixels = [
                [2, 0],
                [1, 1],
                [0, 2],
                [0, 3],
                [0, 4],
                [0, 5],
                [0, 6],
                [1, 7],
                [2, 8],
                [3, 8],
                [4, 8],
                [5, 8],
                [6, 8],
                [7, 7],
                [8, 6],
                [8, 5],
                [8, 4],
                [8, 3],
                [8, 2],
                [7, 1],
                [6, 0],
                [5, 0],
                [3, 0],
                [4, 0],
            ];

            const centerX = Math.floor((gameContainer.clientWidth - 3 * getPixelSize()) * 0.76);
            const centerY = Math.floor((gameContainer.clientHeight - 5 * getPixelSize()) / 2);

            oPixels.forEach((coords) => {
                const [x, y] = coords;
                const oPixel = document.createElement('div');
                oPixel.classList.add('pixel');
                oPixel.style.width = getPixelSize() + 'px';
                oPixel.style.height = getPixelSize() + 'px';
                oPixel.style.left = centerX + x * getPixelSize() + 'px';
                oPixel.style.top = centerY + y * getPixelSize() + 'px';
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
        });

        setInterval(createPixel, 1000);

        window.addEventListener('resize', () => {
            gameContainer.innerHTML = '';
            createLShape();
            createAShape();
            createWShape();
            createOShape();
        });