// JavaScript to cycle through colors and create the transition effect
(function () {
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
      const overlay = document.getElementById("color-overlay");
      overlay.style.backgroundColor = colors[colorIndex];

      // Increment color index and reset to 0 if it exceeds array length
      colorIndex = (colorIndex + 1) % colors.length;
    }

    // Change background color every 3 seconds
    setInterval(changeBackgroundColor, 3000);

    // Initial color set on load
    changeBackgroundColor();
  })();