# Onboarding — Setup & Deployment Guide

Ovo je uputstvo za novog dev-a koji počinje sa ovim projektom. Projekat je **Astro website** sa **Tailwind CSS** hostvano na **Cloudflare Pages**.

## 🎯 Šta trebam da znam

- **Tech stack**: Astro 4.3 (SSG - Static Site Generator) + Tailwind CSS
- **Hosting**: Cloudflare Pages (besplatno, auto-deploy sa GitHub-a)
- **Struktura**: Pages (routing po fajlovima), Components (reusable), Layouts, Styles
- **Deploy**: Git push → GitHub → Cloudflare Pages (automatski builduje)
- **Environment**: Nema `.env` fajla - sve je statički, nema secrets

---

## 📋 Korak po Korak - Moj Tok Rada

### Korak 1: Lokalnog Setup-a (Prvo pokreni code)

```bash
# Kloniraj repo
git clone https://github.com/RapidAppsDev/03-WEB-coaching-launchpad.git
cd 03-WEB-coaching-launchpad

# Instaliraj dependencies
npm install

# Pokreni dev server
npm run dev
```

**Trebalo bi da vidiš:**
```
  🚀 Server started in 123ms
  ➜ Local:    http://localhost:4321/
```

Otvori **http://localhost:4321** u browseru - trebalo bi videti coaching website sa mobilnim responsive designom.

---

### Korak 2: Razumevanje Strukture

Čitaj strukturu projekta koja je **već mapirana** u `README.md`:

```
src/
├── components/      # UI komponente (Header, Hero, ServiceCard, itd)
├── layouts/         # Layout.astro (osnovna struktura svih stranica)
├── pages/           # Stranice (index.astro, about.astro, services.astro)
└── styles/          # Global CSS + Tailwind
```

**Bitni fajlovi za početak:**

| Fajl | Šta radi |
|------|----------|
| `src/pages/index.astro` | Home page - hero, services, testimonials |
| `src/pages/about.astro` | About page - biografija, credentials |
| `src/pages/services.astro` | Services page - programi, pricing, FAQ |
| `src/components/Header.astro` | Navigation bar (desktop + mobile menu) |
| `src/layouts/Layout.astro` | Osnovna template (SEO, meta, struktura) |
| `tailwind.config.mjs` | Boje, font-ovi, tema |
| `astro.config.mjs` | Astro setup + site URL |

**Šta je `.astro` fajl?**
- HTML template sa Astro sintaksom
- Frontend-only (JavaScript se pokreće samo na build-time)
- Direktno pišeš HTML - nema React/Vue extra layer-a

---

### Korak 3: Vežba - Napravi Malu Izmenu

**Cilj:** Videti kako se live reloaduje i kako se code prevodi u HTML.

**Izmena 1: Promeni boju dugmeta**

1. Otvori `src/components/Button.astro`
2. Pronađi klasu koja piše `bg-purple-700` ili `bg-orange-500`
3. Zameni sa drugom bijom, npr. `bg-red-500`
4. Save fajl → browser se automatski osvežava

**Izmena 2: Promeni tekst na Home page-u**

1. Otvori `src/pages/index.astro`
2. Pronađi `<h1>` tag sa naslovom
3. Promeni tekst
4. Save → live reload

**Izmena 3: Dodaj novu stranicu**

1. Kreiraj `src/pages/test.astro`
2. Kopaj sadržaj iz `index.astro` kao template:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Test Page" description="Moja test stranica">
  <div class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-4">Evo Moje Test Stranice</h1>
    <p class="text-gray-600">Sadržaj ide ovde...</p>
  </div>
</Layout>
```
3. Posjeti http://localhost:4321/test
4. Trebala bi da vidis novu stranicu - file-based routing u Astro radi automatski!

---

### Korak 4: Razumevanje Cloudflare Pages Setup-a

**Kako je ovaj site hostvano:**

```
1. Ti pushuješ kod na GitHub (main grana)
   ↓
2. Cloudflare Pages CI/CD vidi da je novi commit
   ↓
3. CF pokreće: npm run build
   ↓
4. Astro builduje `dist/` folder (HTML fajlovi)
   ↓
5. CF hostvuje `dist/` folder na CDN
   ↓
6. Sajt je live na https://gordana-coaching-mockup.pages.dev
```

**Lokalno to radim ovako:**

```bash
# Build za production (kreira dist/ folder)
npm run build

# Preview production build na localhost:4321
npm run preview
```

---

### Korak 5: Gde je šta u Cloudflare Dashboard-u?

**Cloudflare Pages URL:** https://dash.cloudflare.com/

**Put:**
1. **Cloudflare Dashboard** → "Workers & Pages" (left sidebar)
2. **Pages** tab
3. **gordana-coaching-mockup** projekt
4. Vidiš **Build logs** → koji commit je deployovan i kako
5. Vidiš **Production domain**: `https://gordana-coaching-mockup.pages.dev`

**Deployment Settings:**
- Project name: `gordana-coaching-mockup`
- GitHub repo: `RapidAppsDev/03-WEB-coaching-launchpad`
- Branch: `main`
- Build command: `npm run build`
- Build output: `dist`

**Kada pushuješ novi kod:**
1. GitHub prosledi webhook Cloudflare-u
2. CF automatski pokreće build
3. Čekaj ~30-60 sekundi
4. Sajt je updated

---

### Korak 6: Git Workflow

**Kada radiš na izmeni:**

```bash
# Kreiraj novu granu
git checkout -b feature/nova-izmena

# Napravi izmene, testira lokalno (npm run dev)
# Save, commit, push...

git add .
git commit -m "Add nova izmena"
git push origin feature/nova-izmena
```

**Na GitHub-u:**
1. Kreiraj Pull Request (PR) sa feature grane na `main`
2. Cloudflare Pages automatski kreira **preview** deployment
3. Vidiš link u PR-u: "https://[hash].pages.dev" - preview verzija
4. Testiraj preview, onda merge na `main`
5. Čim merge-uješ na `main` → auto-deploy na production

---

### Korak 7: Česta Pitanja

**P: Trebam li `.env` fajl?**  
O: **NE.** Ovo je statički site - nema backend, API ključeva, secrets. Sve je u kodu.

**P: Kako da dodam novo dugme / komponentu?**  
O: Kreiraj `.astro` fajl u `src/components/`, onda ga importuj u stranici:
```astro
---
import MyNewComponent from '../components/MyNewComponent.astro';
---
<MyNewComponent />
```

**P: Mogu li da koristim JavaScript?**  
O: Astro podržava client-side JS, ali s opreznošću - sve se builduje u HTML/CSS. Za interaktivnost vidiš [Astro Islands dokumentaciju](https://docs.astro.build/en/concepts/islands/).

**P: Kako mogu da dodam sliku?**  
O: Slajkuj u `public/` folder (npr. `public/my-image.jpg`), pa referenciraj:
```html
<img src="/my-image.jpg" alt="Opis" />
```

**P: Kako menja boji i tipografiju?**  
O: 
- **Boje**: Edit `tailwind.config.mjs` - `colors` sekcija
- **Fontovi**: Dodaj u `<head>` u `Layout.astro` (ili koristi Tailwind default-ne)

---

## 🚀 Deployment Checklist

Pre nego što pushuješ na `main` i deployuješ u production:

- [ ] Lokalno sam testirao sa `npm run dev`
- [ ] Nema console errora ili warning-a
- [ ] Responsive je na mobilnom (otvori DevTools, F12 → mobile view)
- [ ] Sve linkove su ispravne (klikni kroz stranicu)
- [ ] Formama (ako ih ima) su testirane
- [ ] Text je ispravan, bez typo-a

**Workflow:**
```bash
npm run build     # Testiraj build
npm run preview   # Previsualiziraj production
# Ako je OK ↓
git push origin main  # Push → Cloudflare će auto-deployovati
```

---

## 📞 Kada Trebaš Help

- **Astro dokumentacija**: https://docs.astro.build/
- **Tailwind CSS**: https://tailwindcss.com/docs/
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/

---

## 🎓 Sledeći Koraci (za vežbanje)

1. **Osnove:**
   - Promeni sve tekste na Home page-u
   - Dodaj novu stranicu (npr. `/contact`)
   - Eksperientiši sa boji u `tailwind.config.mjs`

2. **Malo teže:**
   - Dodaj novu sekseju na Home page-u
   - Kreiraj novu komponentu (npr. `PricingCard.astro`)
   - Dodaj mobilni responsive design na novu sekseju

3. **Production:**
   - Testiraj deployment na Cloudflare Pages
   - Vidiš live sajt na `.pages.dev` domenu
   - Nauči kako čitati build logs

---

**Uspešnog kraja!** 🎉

Ova repo je test verija - slobodno eksperimentiši bez briga. Ako nešto slomišš, jednostavno git reset ili obriši i kloniraj ponovo.
