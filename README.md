# gradientBody
### Smooth Rainbow Background with Gradient Transitions.

This project provides a JavaScript file that creates a smooth, transitioning rainbow-colored background. The background cycles through modern rainbow colors with a smooth blending effect every 3 seconds, offering an aesthetically pleasing backdrop for web applications.

## Features
- Automatically transitions through a series of modern rainbow colors
- Smooth color blending effect with no flickering or black screens
- Minimal setup, requiring only a `div` element with the `color-overlay` ID

## Usage

To use this background effect in your project, follow these steps:

1. **Include the CDN Link**: Add the following `<script>` tag to your HTML file to include the JavaScript file from the CDN.

   ```html
   <script src="https://cdn.jsdelivr.net/gh/kratuvwxyz/CDN-Gradient-Body@1.0.3/CDN-Gradient-Body.js"></script>

   <!-- Dark Gradient -->
   <script src="https://cdn.jsdelivr.net/gh/kratuvwxyz/CDN-Gradient-Body@1.0.3/CDN-Dark-Gradient.js"></script>

   <!-- Light Gradient -->
   <script src="https://cdn.jsdelivr.net/gh/kratuvwxyz/CDN-Gradient-Body@1.0.3/CDN-Light-Gradient.js"></script>
   ```

2. **Add the Overlay Element**: Add a `div` element with the ID `color-overlay` to your HTML file. This element will act as the overlay for the color transitions.

   ### Example HTML Setup

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Smooth Rainbow Background</title>
   </head>
   <body>
     <h1>Enjoy the Smooth Rainbow Colors!</h1>

     <!-- The overlay div for gradient effect -->
     <div id="color-overlay"></div>

     <!-- Include the CDN link here -->
     <script src="https://cdn.jsdelivr.net/gh/kratuvwxyz/CDN-Gradient-Body@1.0.3/CDN-Gradient-Body.js"></script>
   </body>
   </html>
   ```

## How It Works

The JavaScript code dynamically styles the `#color-overlay` element with a smooth background color transition effect. Every 3 seconds, the background color cycles to the next color in the predefined color array, creating a gradient-like effect.

## Colors

   - #8B0000 - Dark Red
   - #FF4500 - Orange Red
   - #FFA07A - Light Salmon
   - #D2691E - Chocolate
   - #FF8C00 - Dark Orange
   - #FFDAB9 - Peach Puff
   - #B8860B - Dark Goldenrod
   - #FFD700 - Gold
   - #FFFACD - Lemon Chiffon
   - #006400 - Dark Green
   - #32CD32 - Lime Green
   - #98FB98 - Pale Green
   - #00008B - Dark Blue
   - #1E90FF - Dodger Blue
   - #87CEFA - Light Sky Blue
   - #4B0082 - Indigo
   - #6A5ACD - Slate Blue
   - #B0C4DE - Light Steel Blue
   - #8A2BE2 - Blue Violet
   - #DA70D6 - Orchid
   - #E6E6FA - Lavender

   #### Dark Shades (Good for white text)

   - #8B0000 - Dark Red
   - #FF4500 - Dark Orange
   - #FFA500 - Dark Goldenrod (Yellow-Orange)
   - #9ACD32 - Dark Yellow-Green
   - #006400 - Dark Green
   - #4682B4 - Dark Blue
   - #483D8B - Dark Slate Blue
   - #8A2BE2 - Dark Violet
   - #800080 - Dark Purple
   - #FF1493 - Deep Pink

   #### Light Shades (Good for dark text)

   - #FFB6C1 - Light Pink
   - #FFDAB9 - Peach Puff (Light Orange)
   - #FFFFE0 - Light Yellow
   - #98FB98 - Pale Green
   - #ADD8E6 - Light Blue
   - #E0FFFF - Light Cyan
   - #DDA0DD - Plum (Light Purple)
   - #FFCCE5 - Light Rose Pink
   - #FFDDC1 - Light Coral (Peach)
   - #E6E6FA - Lavender

## Development

To customize or improve this project:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/CDN-Gradient-Body.git
   ```
2. Make your changes in `CDN-Gradient-Body.js`.
3. Push the changes back to GitHub, and create a new release if necessary.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Credits

Created by [DEAIGN STUDIO](https://github.com/kratuvwxyz).
