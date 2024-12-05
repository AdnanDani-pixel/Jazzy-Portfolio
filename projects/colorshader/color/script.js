

// Initialize the application on page load
document.addEventListener("DOMContentLoaded", function() {
    generateColors();
    loadWishlist();
});

// Event listener to regenerate colors on spacebar press
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        generateColors();
    }
});

// Select main container elements
const colorContainer = document.getElementById("color-container");
const wishlistContainer = document.getElementById("wishlist-container");
const wishlistPage = document.getElementById("wishlist-page");
const wishlistBtn = document.getElementById("wishlist-btn");
const backBtn = document.getElementById("back-btn");


// Track the currently open shades overlay
let currentShadesOverlay = null;

function generateColors() {
    for (let i = 0; i < 6; i++) {
        let colorBox = document.querySelector(`.color-box[data-index="${i}"]`);
        if (colorBox && colorBox.classList.contains("locked")) {
            continue; // Skip if the box is locked
        }

        const color = getRandomColor();
        const newColorBox = createColorBox(color, i);

        if (colorBox) {
            colorContainer.replaceChild(newColorBox, colorBox);
        } else {
            colorContainer.appendChild(newColorBox);
        }
    }
}

// Generates a random hex color
function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
}

// Creates a color box element with icons and functionality
function createColorBox(color, index) {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.setAttribute("data-index", index);

    const codeText = document.createElement("div");
    codeText.className = "color-code";
    codeText.textContent = color;
    box.appendChild(codeText);

    // Lock icon
    const lockIcon = document.createElement("button");
    lockIcon.className = "lock-icon";
    box.appendChild(lockIcon);

    lockIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        toggleLock(box, lockIcon);
    });

    // Shades, Copy, Delete, and Like icons
    addAdditionalIcons(box, color);

    return box;
}

// Toggles lock state on the color box
function toggleLock(box, lockIcon) {
    box.classList.toggle("locked");
    lockIcon.innerHTML = box.classList.contains("locked") 
}

// Adds shades, copy, delete, and like icons with their functionality
function addAdditionalIcons(box, color) {
    // Shades icon
    const shadesIcon = document.createElement("button");
    shadesIcon.className = "shades-icon";
   
    box.appendChild(shadesIcon);
    shadesIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        toggleShades(color);
    });

    // Copy icon
    const copyIcon = document.createElement("button");
    copyIcon.className = "copy-icon";
    
    box.appendChild(copyIcon);
    copyIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        navigator.clipboard.writeText(color).then(() => alert(`Copied: ${color}`));
    });

    // Delete icon
    const deleteIcon = document.createElement("button");
    deleteIcon.className = "delete-icon";
    box.appendChild(deleteIcon);
    deleteIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        box.remove();
    });

    // Like icon
    const likeIcon = document.createElement("button");
    likeIcon.className = "like-icon";
    box.appendChild(likeIcon);
    likeIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        saveToWishlist(color);
        likeIcon.classList.toggle("liked");
    });
}

// Toggles shades display for a color, ensuring only one shades overlay is shown at a time
function toggleShades(color) {
    // Close the current shades overlay if it exists
    if (currentShadesOverlay) {
        currentShadesOverlay.remove();
        currentShadesOverlay = null;
    }

    // Create and display the new shades overlay
    const overlay = document.createElement("div");
    overlay.className = "shades-overlay";
    overlay.addEventListener("click", () => {
        overlay.remove();
        currentShadesOverlay = null;
    }); // Close overlay on click

    for (let i = 1; i <= 10; i++) {
        const shade = document.createElement("div");
        shade.className = "shade";
        shade.style.backgroundColor = lightenDarkenColor(color, i * -10);
        shade.textContent = lightenDarkenColor(color, i * -10);
        shade.addEventListener("click", (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(shade.textContent).then(() => alert(`Copied: ${shade.textContent}`));
        });
        overlay.appendChild(shade);
    }

    document.body.appendChild(overlay);
    currentShadesOverlay = overlay; // Track the open shades overlay
}

// Function to adjust the color brightness
function lightenDarkenColor(color, amount) {
    let col = parseInt(color.slice(1), 16);
    let r = Math.min(255, Math.max(0, (col >> 16) + amount));
    let g = Math.min(255, Math.max(0, (col & 0x0000FF) + amount));
    let b = Math.min(255, Math.max(0, ((col >> 8) & 0x00FF) + amount));
    return `#${(g | (b << 8) | (r << 16)).toString(16).padStart(6, '0')}`;
}

// Save color to wishlist in local storage
function saveToWishlist(color) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.includes(color)) {
        wishlist.push(color);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(`Color ${color} added to your wishlist!`);
    } else {
        alert("This color is already in your wishlist.");
    }
}

// Load wishlist colors and display them
function loadWishlist() {
    wishlistContainer.innerHTML = "";
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.forEach(color => {
        const wishlistBox = createWishlistBox(color);
        wishlistContainer.appendChild(wishlistBox);
    });
}

// Create a color box for the wishlist page
function createWishlistBox(color) {
    const box = document.createElement("div");
    box.className = "wishlist-box";
    box.style.backgroundColor = color;

    const codeText = document.createElement("div");
    codeText.className = "wishlist-code";
    codeText.textContent = color;
    box.appendChild(codeText);

    // Delete icon for wishlist item
    const deleteIcon = document.createElement("button");
    deleteIcon.className = "delete-icon";
    box.appendChild(deleteIcon);
    deleteIcon.addEventListener("click", function() {
        removeFromWishlist(color);
        loadWishlist(); // Refresh the wishlist display
    });

    return box;
}

// Remove color from wishlist
function removeFromWishlist(color) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter(item => item !== color);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// Show and hide the wishlist page
wishlistBtn.addEventListener("click", () => {
    wishlistPage.style.display = "block";
});

backBtn.addEventListener("click", () => {
    wishlistPage.style.display = "none";
});



// Take Screenshot Function
document.addEventListener("DOMContentLoaded", () => {
    function takeScreenshot(elementId) {
        const element = document.getElementById(elementId);
        
        if (!element) {
            alert("Element not found!");
            return;
        }
        
        html2canvas(element).then((canvas) => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "screenshot.png";
            link.click();
        }).catch((error) => {
            console.error("Screenshot capture failed:", error);
        });
    }

    document.getElementById("screenshot-btn").addEventListener("click", () => {
        takeScreenshot("content-to-screenshot");
    });
});
