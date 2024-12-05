document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const colorsContainer = document.getElementById('colors-container');
    const shadesContainer = document.getElementById('shades-container');
    let colors = Array(5).fill(null);
    let lockedColors = Array(5).fill(false);

    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function shadeColor(color, percent) {
        let R = parseInt(color.substring(1, 3), 16);
        let G = parseInt(color.substring(3, 5), 16);
        let B = parseInt(color.substring(5, 7), 16);

        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);

        R = (R < 255) ? R : 255;
        G = (G < 255) ? G : 255;
        B = (B < 255) ? B : 255;

        const RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
        const GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
        const BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

        return "#" + RR + GG + BB;
    }

    function generateShades(baseColor) {
        const shades = [];
        for (let i = -50; i <= 50; i += 25) {
            shades.push(shadeColor(baseColor, i));
        }
        return shades;
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert(`Copied: ${text}`);
    }

    function createColorBox(color, index) {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.textContent = color;

        const copyIcon = document.createElement('div');
        copyIcon.className = 'icon copy-icon';
        copyIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            copyToClipboard(color);
        });

        const lockIcon = document.createElement('div');
        lockIcon.className = 'icon lock-icon';
        lockIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            lockedColors[index] = !lockedColors[index];
            lockIcon.style.backgroundColor = lockedColors[index] ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)';
        });

        const removeIcon = document.createElement('div');
        removeIcon.className = 'icon remove-icon';
        removeIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            removeColor(index);
        });

        colorBox.appendChild(copyIcon);
        colorBox.appendChild(lockIcon);
        colorBox.appendChild(removeIcon);
        colorBox.addEventListener('click', () => displayShades(color));
        return colorBox;
    }

    function createShadeBox(shade) {
        const shadeBox = document.createElement('div');
        shadeBox.className = 'shade-box';
        shadeBox.style.backgroundColor = shade;
        shadeBox.textContent = shade;

        const copyIcon = document.createElement('div');
        copyIcon.className = 'icon copy-icon';
        copyIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            copyToClipboard(shade);
        });

        shadeBox.appendChild(copyIcon);
        return shadeBox;
    }

    function displayShades(color) {
        shadesContainer.innerHTML = '';
        const shades = generateShades(color);
        shades.forEach(shade => {
            const shadeBox = createShadeBox(shade);
            shadesContainer.appendChild(shadeBox);
        });
    }

    function generateColors() {
        colorsContainer.innerHTML = '';
        colors = colors.map((color, index) => lockedColors[index] ? color : generateRandomColor());
        colors.forEach((color, index) => {
            const colorBox = createColorBox(color, index);
            colorsContainer.appendChild(colorBox);
        });
    }

    function removeColor(index) {
        colors.splice(index, 1);
        lockedColors.splice(index, 1);
        generateColors();
    }

    generateButton.addEventListener('click', generateColors);
});
