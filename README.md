# Linh Lê (Le Phan Thuy Linh) — Online Portfolio

A whimsical, modern, and interactive online portfolio for **Le Phan Thuy Linh (Linh Lê)**, directly themed after a dreamy starry night sky, blooming green meadows, golden storybook typography, and the black cat mascot reaching for the stars.

---

## 🌟 Visual Theme & Design Inspiration

- **Palette**: Deep midnight sky (`#061118`), vibrant emerald meadow hues (`#154236`, `#2b7a63`), and warm storybook gold shimmer (`#f6ce72`, `#e5ab37`).
- **Artwork Integration**: The hero section features the hand-drawn artwork with "Linh Lê" and the kitten reaching up to the sky.
- **Interactive Features**:
  - **Firefly & Stardust Particle Canvas**: Realistic floating, glowing particles that gently bob and react to mouse movement.
  - **Cat Mascot Easter Egg**: Click the black cat avatar on the hero card to release a burst of star sparkles and motivational meow messages!
  - **Experience Category Filter**: Instant switching between *All*, *Global Events*, *Tech Startup*, *Brand & Creative*, and *Community Ops*.
  - **One-Click Email Copy**: Easily copy `lephanthuylinh.forwork@gmail.com` with toast feedback.
  - **Direct Email Dispatch**: Contact form auto-formats into a mailto link ready to send.

---

## 📁 Project Structure

```
linh-le-portfolio/
├── assets/
│   └── theme-hero.jpg      # Thematic starry meadow artwork featuring Linh Lê & kitten
├── index.html              # Main semantic HTML structure & sections
├── style.css               # Storybook typography, glassmorphism cards, glowing effects
├── script.js               # Interactive canvas, category filters, cat sparkles & copy buttons
└── README.md               # Documentation and deployment guide
```

---

## 🚀 How to Run Locally

Because this is built with clean HTML5, modern Tailwind CSS, and Vanilla JavaScript, there are **zero build steps or package installations required**.

### Option 1: Direct Open
Simply double-click `index.html` in your file explorer to open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server
From PowerShell or terminal in the project directory:

```powershell
# Using Python
python -m http.server 8080

# Or using Node.js / npx
npx serve
```
Then navigate to `http://localhost:8080`.

---

## 🌐 Free Deployment Options

### 1. GitHub Pages (Recommended)
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to **Settings > Pages** on your GitHub repository.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your portfolio will be live at `https://<your-username>.github.io/<repo-name>/`.

### 2. Vercel or Netlify
- Drag and drop the `linh-le-portfolio` folder directly into [Vercel](https://vercel.com) or [Netlify Drop](https://app.netlify.com/drop) for instant global deployment with a custom domain.

---

## ✍️ How to Customize

- **Updating Experience or Adding New Roles**: Open `index.html`, duplicate any `<div class="experience-card ...">` block under the `#experience` section, and adjust `data-category` (`global`, `startup`, `brand`, `community`).
- **Updating Contact Info**: Search for `lephanthuylinh.forwork@gmail.com` or `+84 916 081 278` in `index.html` and update with new details.
