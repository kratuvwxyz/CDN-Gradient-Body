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
   <script src="https://cdn.jsdelivr.net/gh/kratuvwxyz/CDN-Gradient-Body@1.0.2/CDN-Gradient-Body.js"></script>
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
     <script src="https://cdn.jsdelivr.net/gh/kratuvwxyz/CDN-Gradient-Body@1.0.2/CDN-Gradient-Body.js"></script>
   </body>
   </html>
   ```

## How It Works

The JavaScript code dynamically styles the `#color-overlay` element with a smooth background color transition effect. Every 3 seconds, the background color cycles to the next color in the predefined color array, creating a gradient-like effect.

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
