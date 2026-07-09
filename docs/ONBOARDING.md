# Onboarding — Getting Started

Zdravo! Dobrodošao na projekat. Evo kako da počneš.

---

## 🎯 Šta je ovaj projekat?

**Astro website** za coaching usluge - statički site sa Tailwind CSS styling-om.

- **Tech**: Astro 4.3 + Tailwind CSS
- **Struktura**: Pages (stranice), Components (komponente), Layouts (template)
- **Hosting**: Cloudflare Pages (besplatno, možeš i sam da deployuješ)

---

## 📋 Setup — Korak 1: Kloniraj Repo

```bash
# Kloniraj repo
git clone https://github.com/RapidAppsDev/03-WEB-coaching-launchpad.git
cd 03-WEB-coaching-launchpad

# Instaliraj dependencies
npm install

# Pokreni dev server
npm run dev
```

Trebalo bi da vidiš:
```
🚀 Server started
➜ Local: http://localhost:4321/
```

Otvori **http://localhost:4321** → trebalo bi videti coaching website.

---

## 📁 Šta je gde?

```
src/
├── pages/       # Stranice (index.astro, about.astro, services.astro)
├── components/  # Komponente (Header, Hero, ServiceCard, itd)
├── layouts/     # Layout template (svi fajlovi koriste ovo)
└── styles/      # Globalni CSS
```

**Počni sa čitanjem:**
1. `README.md` (šta je projekat)
2. `src/pages/index.astro` (home page struktura)
3. `tailwind.config.mjs` (boje i styling)

---

## 🎨 Vežba 1: Promeni Tekst

1. Otvori `src/pages/index.astro`
2. Pronađi `<h1>` tag sa glavnim naslovom
3. Promeni tekst (npr. sa "Executive Coaching" na "Moj Tekst")
4. Save → browser se automatski osvežava (localhost:4321)

✅ Vidiš promenu? Sve radi!

---

## 🎨 Vežba 2: Promeni Boju

1. Otvori `tailwind.config.mjs`
2. Pronađi `colors.purple['700']: '#7C3AED'`
3. Promeni hex vrednost (npr. u `'#FF0000'` za crveno)
4. Save → vidiš promenu na sajtuu

---

## 🎨 Vežba 3: Kreiraj Novu Stranicu

1. Kreiraj novi fajl: `src/pages/test.astro`
2. Kopaj ovo kao template:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Moja Test Stranica" description="Test opis">
  <div class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-4">Evo Test Stranice</h1>
    <p class="text-gray-600">Ovde ide sadržaj...</p>
  </div>
</Layout>
```

3. Idi na http://localhost:4321/test → trebalo bi videti novu stranicu

✅ File-based routing u Astro radi automatski!

---

## 📊 Kako Build-uje?

```bash
npm run build   # Kreiraj production verziju (dist/ folder)
npm run preview # Pogledaj production verziju lokalno
```

Ovo je šta se deployuje na Cloudflare Pages (samo HTML/CSS, bez server-a).

---

## 🔀 Git Workflow

**Kada radiš na izmeni:**

```bash
# Nova grana
git checkout -b feature/moja-izmena

# Napravi izmene + testiraj (npm run dev)

# Commit
git add .
git commit -m "Dodaj novu sekciju"

# Push
git push origin feature/moja-izmena
```

**Na GitHub-u:**
1. Kreiraj Pull Request (PR)
2. Vidiš preview link od Cloudflare Pages u PR-u (ako je već deployovano)
3. Testiraj preview
4. Merge PR na `main`
5. Čekaj ~30-60 sekundi → sajt se updateuje

---

## 🚀 Deployment — Opcije

### Opcija 1: Koristi Existing Cloudflare Pages (Trenutno Live)

- Sajt je već deployovan na: https://03-web-coaching-launchpad.pages.dev/
- Git push na `main` → auto-deployuje se
- Nema ti potreban Cloudflare pristup

### Opcija 2: Kreiraj Sopstvenu Cloudflare Pages (Za Vežbanje)

Ako želiš svoj test deployment:

1. Kreiraj GitHub fork ili koristi testnu granu
2. Idi na https://dash.cloudflare.com/
3. "Workers & Pages" → "Create" → "Pages" → "Connect to Git"
4. Odaberi tvoj repo
5. Build settings:
   - **Build command**: `npm run build`
   - **Build output**: `dist`
6. Deploy → vidiš link kao `https://[tvoje-ime]-pages.dev`

---

## ❓ FAQ

**P: Trebam li `.env` fajl?**  
O: Ne. Ovo je statički site - nema backend, API ključeva, environment variables.

**P: Kako da dodam novu komponentu?**  
O: Kreiraj `.astro` fajl u `src/components/`, pa ga importuj u stranici:
```astro
import MyComponent from '../components/MyComponent.astro';
<MyComponent />
```

**P: Kako da promenem font?**  
O: U `Layout.astro` dodaj Google Font link u `<head>`, pa koristi u Tailwind.

**P: Kako da dodam sliku?**  
O: Sliku okačiš u `public/` folder, pa referenciraš:
```html
<img src="/my-image.jpg" alt="Opis" />
```

**P: Kako funkcioniše Tailwind?**  
O: Koristiš klase direktno u HTML-u:
```html
<div class="bg-purple-700 text-white p-4 rounded-lg">
  Tekst
</div>
```
Sve klase su u `tailwind.config.mjs`.

---

## 📚 Resursi

- **Astro dokumentacija**: https://docs.astro.build/
- **Tailwind CSS**: https://tailwindcss.com/docs/
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/

---

## 🎯 Sledeći Koraci

1. **Dan 1**: Setup + čitanje README.md
2. **Dan 2**: Vežbe 1-3 (tekst, boja, nova stranica)
3. **Dan 3**: Kreiraj PR sa izmenom + testiraj
4. **Dan 4+**: Pravi zadaci

---

Srdačno,  
Andreja

Ako nešto nije jasno - ping me!
