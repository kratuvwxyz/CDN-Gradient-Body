!function(){const e=document.createElement("style");e.textContent="#color-overlay {transition: background-color 3s ease-in-out}",document.head.appendChild(e);const t=document.getElementById("color-overlay"),o=[
    "#8B0000", // Dark Red
    "#FF4500", // Dark Orange
    "#FFA500", // Dark Goldenrod (Yellow-Orange)
    "#9ACD32", // Dark Yellow-Green
    "#006400", // Dark Green
    "#4682B4", // Dark Blue
    "#483D8B", // Dark Slate Blue
    "#8A2BE2", // Dark Violet
    "#800080", // Dark Purple
    "#FF1493"  // Deep Pink
];let n=0;function F(){t.style.backgroundColor=o[n],n=(n+1)%o.length}setInterval(F,3e3),F()}();