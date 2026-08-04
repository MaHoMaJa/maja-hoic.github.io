# Personal Academic Website

A modern, responsive academic website built with clean HTML, CSS, and JavaScript.

## 🚀 Quick Start

### Local Testing

1. Download or clone this repository
2. Open `index.html` in your web browser
3. The website will display and be fully functional

### Deploying to GitHub Pages

#### Option 1: Using `username.github.io` repository

This is the simplest solution:

1. **Create a new GitHub repository** named `username.github.io`
   - Replace `username` with your GitHub username
   - Example: `maja-hoic.github.io`

2. **Clone the repository**
   ```bash
   git clone https://github.com/username/username.github.io.git
   cd username.github.io
   ```

3. **Copy all project files**
   - `index.html`
   - Directories: `css/`, `js/`

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Initial version of academic website"
   git push origin main
   ```

5. **Your website will be available at:**
   ```
   https://username.github.io
   ```

#### Option 2: Using `gh-pages` branch

If you want the site on a custom repository:

1. **Clone or create a repository**
   ```bash
   git clone https://github.com/username/personal-website.git
   cd personal-website
   ```

2. **Create `gh-pages` branch**
   ```bash
   git checkout -b gh-pages
   ```

3. **Add all project files**
   - `index.html`
   - Directories: `css/`, `js/`

4. **Commit and push to `gh-pages` branch**
   ```bash
   git add .
   git commit -m "Initial version of website"
   git push origin gh-pages
   ```

5. **Enable GitHub Pages**
   - Go to **Settings** → **Pages**
   - Select **gh-pages** as the source branch
   - Click **Save**

6. **Your website will be available at:**
   ```
   https://username.github.io/personal-website
   ```

## 📝 How to Customize

### Basic Information

Open `index.html` and replace the following:

```html
<div class="logo">
    <a href="#home">My Name</a>  <!-- Your name -->
</div>
```

```html
<h1>Welcome!</h1>
<p class="hero-subtitle">Researcher / Academic Professional</p>
```

### About Me Section

Customize the text in the "About Me" section:
- Biography
- Education (institutions and years)
- Skills (technologies and competencies)
- CV link (place `cv.pdf` in the root directory)

### Projects

Add or update projects in the `id="projects"` section:
- Project name
- Technologies (tags)
- Description
- Links to GitHub and live demo

### Publications

Update publications in the `id="publications"` section:
- Title of work
- Authors
- Year and journal
- Links to PDF, DOI, citation

### Contact Information

Update all contact information:
- Email address
- LinkedIn profile
- GitHub profile
- Twitter / Other social media

## 🎨 Customizing Colors

Colors are located at the top of `css/style.css`:

```css
:root {
    --primary-color: #2563eb;      /* Primary color (blue) */
    --primary-dark: #1e40af;       /* Darker version */
    --secondary-color: #7c3aed;    /* Secondary color (purple) */
    --accent-color: #f59e0b;       /* Accent color (orange) */
    --text-primary: #1f2937;       /* Text color */
    --text-secondary: #6b7280;     /* Secondary text color */
    --bg-light: #f9fafb;           /* Light background */
    --bg-white: #ffffff;           /* White background */
}
```

Simply replace the hex codes with your desired colors.

## 📱 Responsiveness

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile devices (480px - 767px)
- Small screens (<480px)

## ✨ Features

- ✅ No external dependencies (except Font Awesome for icons)
- ✅ Clean, readable code
- ✅ Modern design with gradients
- ✅ Smooth scrolling
- ✅ Interactive cards
- ✅ Optimized for fast loading
- ✅ SEO-friendly structure

## 🔧 Additional Tips

### Add a Favicon
Add a favicon to the root directory and link it in the `<head>`:
```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

### Add Google Analytics
Add this to the `<head>` section:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Customize Font
In `css/style.css`, change the font-family:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Add a Custom Domain
1. Purchase a domain from any registrar (GoDaddy, Namecheap, etc.)
2. Add the custom domain in GitHub Pages settings
3. Configure DNS settings (GitHub will provide instructions)

## 🤝 How to Update the Website

Every time you update files:

```bash
git add .
git commit -m "Description of changes"
git push origin main  # or gh-pages if using that branch
```

GitHub will automatically refresh the website (usually within a few minutes).

## 📄 File Structure

```
.
├── index.html                 # Main HTML file
├── README.md                  # This file
├── cv.pdf                     # Your CV (add if needed)
├── css/
│   └── style.css              # Styles
├── js/
│   └── script.js              # JavaScript
└── images/                    # Images folder (optional)
    └── profile.jpg            # Profile image (optional)
```

## ⚠️ Troubleshooting

### Website not updating after push
- Wait 5 minutes for GitHub to refresh the cache
- Use Ctrl+F5 to hard refresh your browser
- Check GitHub Pages settings to ensure everything is correct

### Styles not applying
- Check that `css/style.css` is in the correct directory
- Verify the path in `index.html`: `href="css/style.css"`

### Icons not displaying
- Font Awesome icons require an internet connection
- Verify the CDN link is correct

## 📞 Support

For more information about GitHub Pages, visit:
- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)

## 📄 License

Feel free to use, customize, and share this website.

---

**Happy building! 🎓**
