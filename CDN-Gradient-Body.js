// JavaScript to apply CSS and cycle through colors with smooth transitions
(function () {
    // Insert CSS styles for the overlay element
    const style = document.createElement("style");
    style.textContent = `
      #color-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: background-color 3s ease-in-out;
        z-index: 0; /* Keeps overlay behind any content */
      }
    `;
    document.head.appendChild(style);

    // Insert the overlay element into the document body
    const overlay = document.getElementById("color-overlay");

    // Color array for transitions
    const colors = [
      "#8B0000", "#FF4500", "#FFA07A", // Red
      "#D2691E", "#FF8C00", "#FFDAB9", // Orange
      "#B8860B", "#FFD700", "#FFFACD", // Yellow
      "#006400", "#32CD32", "#98FB98", // Green
      "#00008B", "#1E90FF", "#87CEFA", // Blue
      "#4B0082", "#6A5ACD", "#B0C4DE", // Indigo
      "#8A2BE2", "#DA70D6", "#E6E6FA"  // Violet
    ];

    let colorIndex = 0;

    function changeBackgroundColor() {
      overlay.style.backgroundColor = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }

    // Change background color every 3 seconds
    setInterval(changeBackgroundColor, 3000);

    // Initial color set on load
    changeBackgroundColor();
})();
