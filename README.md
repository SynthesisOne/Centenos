# Centeno's HVAC Services Website

A professional commercial HVAC services website built for Centeno's HVAC Services.

## Features

- Responsive design that works on all devices
- Professional HVAC service showcase
- Contact form with validation
- Smooth scrolling navigation
- Mobile-friendly hamburger menu
- Modern CSS animations and effects

## Project Structure

```
Centeno's Website Project/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── server.js           # Express server for deployment
├── package.json        # Node.js dependencies
└── README.md           # This file
```

## Local Development

1. Install Node.js dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and visit: `http://localhost:3000`

## Digital Ocean Deployment

### Method 1: App Platform (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Log into Digital Ocean
3. Go to App Platform
4. Create a new app
5. Connect your repository
6. Configure build settings:
   - Build Command: `npm install`
   - Run Command: `npm start`
   - Port: 3000
7. Deploy the app

### Method 2: Droplet Deployment

1. Create a new Ubuntu Droplet
2. SSH into your droplet
3. Install Node.js and npm:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```
4. Clone or upload your project files
5. Install dependencies:
   ```bash
   npm install
   ```
6. Install PM2 for process management:
   ```bash
   sudo npm install -g pm2
   ```
7. Start the application:
   ```bash
   pm2 start server.js --name "centenos-hvac"
   pm2 startup
   pm2 save
   ```

### Environment Variables

- `PORT`: Server port (default: 3000)

## File Size Compliance

All files in this project are kept under 500 lines as requested:
- index.html: ~203 lines
- styles.css: ~456 lines
- script.js: ~85 lines
- server.js: ~30 lines

## Customization

To customize the website:

1. **Contact Information**: Update phone numbers, email, and address in `index.html`
2. **Styling**: Modify colors and layout in `styles.css`
3. **Content**: Edit service descriptions and company information in `index.html`
4. **Functionality**: Add new features in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License - Feel free to modify and use for your business needs.
