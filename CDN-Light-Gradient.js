!function(){const e=document.createElement("style");e.textContent="#color-overlay {transition: background-color 3s ease-in-out}",document.head.appendChild(e);const t=document.getElementById("color-overlay"),o=[
    "#FFB6C1", // Light Pink
    "#FFDAB9", // Peach Puff (Light Orange)
    "#FFFFE0", // Light Yellow
    "#98FB98", // Pale Green
    "#ADD8E6", // Light Blue
    "#E0FFFF", // Light Cyan
    "#DDA0DD", // Plum (Light Purple)
    "#FFCCE5", // Light Rose Pink
    "#FFDDC1", // Light Coral (Peach)
    "#E6E6FA"  // Lavender
];let n=0;function F(){t.style.backgroundColor=o[n],n=(n+1)%o.length}setInterval(F,3e3),F()}();