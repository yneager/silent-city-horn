# Silent City Horn - Acoustic Civility Technologies

A professional website showcasing the Silent City Horn innovation project, including the design thinking process, product specifications, business model, and market opportunity for reducing noise pollution through acoustic civility technology.

## Features

- **Interactive Horn Sound Simulator** - Experience the difference between aggressive and polite horns
- **Noise Impact Calculator** - Calculate annual noise reduction with SC-Horn
- **Comparison Tool** - Compare SC-Horn vs standard horns
- **Contact Forms** - Fully functional forms for cities, fleet operators, and drivers
- **Newsletter Signup** - Email subscription with validation
- **Customer Testimonials** - Real feedback from stakeholders
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Professional Styling** - Swiss International Style aesthetic

## Tech Stack

- **Backend:** Node.js with Express.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Hosting:** Vercel, Netlify, or any Node.js compatible platform

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/silent-city-horn.git
cd silent-city-horn
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will be available at `http://localhost:3000`

## Project Structure

```
silent-city-horn/
├── server.js                 # Express server
├── package.json             # Dependencies and scripts
├── README.md                # This file
├── .gitignore              # Git ignore rules
└── public/
    ├── index.html          # Main website page
    ├── css/
    │   └── styles.css      # Professional styling
    ├── js/
    │   └── main.js         # Interactive features
    └── images/
        ├── logo.png        # ACT company logo
        └── slide*.png      # Supporting graphics
```

## Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect Node.js and deploy
5. Get a free `.vercel.app` domain or connect your custom domain

### Option 2: Netlify

1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git" and connect your repository
4. Set build command: `npm install`
5. Set publish directory: `public`
6. Deploy!

### Option 3: Railway

1. Push code to GitHub
2. Go to [Railway](https://railway.app)
3. Create new project and connect GitHub
4. Railway will auto-detect and deploy
5. Get a permanent Railway domain

### Option 4: Heroku

1. Install Heroku CLI
2. Run: `heroku create your-app-name`
3. Run: `git push heroku main`
4. Your app is live at `your-app-name.herokuapp.com`

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
NODE_ENV=production
```

## API Endpoints

- `GET /` - Main website page
- `GET /api/project-data` - Project data in JSON format

## Features

### Interactive Tools

1. **Horn Sound Simulator** - Play audio demonstrations
2. **Noise Calculator** - Calculate environmental impact
3. **Comparison Matrix** - Feature comparison table

### Forms & Modals

- Contact form with validation
- City government demo request
- Fleet operator quote request
- Individual driver interest form
- Newsletter subscription

### Responsive Design

- Mobile-first approach
- Tablet optimization
- Desktop experience
- Touch-friendly buttons and forms

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight CSS (no frameworks)
- Vanilla JavaScript (no dependencies)
- Fast load times
- Optimized images
- SEO-friendly structure

## License

ISC

## Contact

**Acoustic Civility Technologies**
- Email: info@silentcityhorn.com
- Website: www.silentcityhorn.com

## Support

For issues, feature requests, or questions, please create an issue in the GitHub repository.

---

**Building quieter, more civil, and more livable cities through innovation.**
