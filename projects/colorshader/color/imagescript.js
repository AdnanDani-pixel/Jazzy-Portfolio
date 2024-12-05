


// Select DOM elements
const triggerButton = document.getElementById('triggerButton');
const modal = document.getElementById('modal');
const dragDropArea = document.getElementById('dragDropArea');
const colorDisplayContainer = document.getElementById('colorDisplayContainer');
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const closeButton = document.getElementById('closeButton');
const urlInput = document.getElementById('urlInput');
const urlButton = document.getElementById('urlButton');
const imagePreview = document.getElementById('imagePreview');

// Show modal when the trigger button (camera icon) is clicked
triggerButton.addEventListener('click', () => {
    modal.style.display = 'flex'; // Only show the modal, don't hide main container
});

// Close modal when clicking the close button
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    clearImagePreview(); // Clear the image preview on close
});

// Allow image drag-and-drop
dragDropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dragDropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        displayImage(file);
    }
});

// Trigger file input click when upload button is clicked
uploadButton.addEventListener('click', () => {
    fileInput.click();
});

// Handle file selection via the upload button
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        displayImage(file);
    }
});

// Handle URL input and load image from URL
urlButton.addEventListener('click', () => {
    const imageUrl = urlInput.value;
    if (imageUrl) {
        displayImageFromUrl(imageUrl);
    }
});

// Function to display image from file and extract colors
function displayImage(imageFile) {
    const img = new Image();
    img.src = URL.createObjectURL(imageFile);
    img.onload = () => {
        imagePreview.innerHTML = ''; // Clear any previous image
        imagePreview.appendChild(img); // Display the image
        extractColors(img); // Extract colors
    };
}

// Function to display image from URL and extract colors
function displayImageFromUrl(url) {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Ensure cross-origin access
    img.src = url;
    img.onload = () => {
        imagePreview.innerHTML = ''; // Clear any previous image
        imagePreview.appendChild(img); // Display the image
        extractColors(img); // Extract colors
    };
    img.onerror = () => {
        alert("Failed to load the image. Please check the URL and try again.");
    };
}

// Function to extract colors from an image element
function extractColors(img) {
    const colorThief = new ColorThief();
    if (typeof colorThief.getPalette === 'function') {
        const colorPalette = colorThief.getPalette(img, 10); // Extract top 10 colors
        colorDisplayContainer.innerHTML = ''; // Clear previous color boxes

        // Display each extracted color
        colorPalette.forEach((color) => {
            const colorItem = document.createElement('div');
            colorItem.classList.add('color-item');
            colorItem.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

            const hex = rgbToHex(color[0], color[1], color[2]);
            const colorCode = document.createElement('p');
            colorCode.textContent = `${hex}`;
            colorItem.appendChild(colorCode);

            // Copy color code to clipboard on click
            colorItem.addEventListener('click', () => {
                navigator.clipboard.writeText(hex).then(() => {
                    alert(`Copied color code: ${hex}`);
                });
            });

            colorDisplayContainer.appendChild(colorItem);
        });

    } else {
        console.error("Color Thief library is not loaded correctly.");
    }
}

// Convert RGB values to Hex format
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// Clear image preview
function clearImagePreview() {
    imagePreview.innerHTML = '';
    urlInput.value = ''; // Clear URL input
}
