
# Webcash Secret Drops

A lightweight, creator-friendly Webcash drop portal — powered entirely by static files and hosted on GitHub Pages.  
Every 10 minutes, a new Webcash secret becomes available for fans to claim.

**Live demo:**  
[https://webcashinc.github.io/webcash-drops](https://webcashinc.github.io/webcash-drops)

---

## Features

- No backend needed — 100% static GitHub Pages deployment
- Y Combinator–style aesthetic with modern dark mode toggle
- Blurred secret reveal for engagement
- QR code auto-generation for each secret
- Real-time UTC-based drop timer
- Admin dashboard:
  - Grouped by value: Small / Medium / Large
  - Drop status: Claimed / Expired / Pending
  - Total unclaimed Webcash value tracker

---

## How to Deploy

1. **Create a new repo** on GitHub: `webcash-drops`
2. **Upload all files** from this ZIP
3. Go to **Settings > Pages**  
   - Source: `main` branch  
   - Folder: `/ (root)`
4. GitHub will publish it at:  
   [https://webcashinc.github.io/webcash-drops](https://webcashinc.github.io/webcash-drops)

---

## Folder Structure

```
/
├── index.html
├── webcash_logo_cropped.jpg
├── webcash_yc_style.css
├── dark_mode_toggle.js
└── secrets/
    └── webcash_1000_secret_drops.json
```

---

## Generating Secrets

Use the official [Webcash CLI](https://webcash.org) to generate secrets in this format:

```
5.0:secret:webcash1abcd...
```

Each secret is single-use. Paste it into the `.json` file with release timestamps in UTC.

---

## Contribute

If you’d like to submit pull requests or custom versions of this frontend for influencers, tip groups, or social commerce — reach out via GitHub or fork freely.

---

## License

MIT — use, modify, and deploy freely with attribution.
