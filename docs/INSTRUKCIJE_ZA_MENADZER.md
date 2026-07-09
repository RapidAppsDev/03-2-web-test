# Setup & Onboarding — Za Menadžera (Tebe)

Ovo je checklist šta trebalo da daš novom dev-u i gde je šta u sistemu.

---

## 📝 Šta Trebalo da Daš Novom Dev-u

### 1. **Repozitorijum**
- **URL**: https://github.com/RapidAppsDev/03-WEB-coaching-launchpad
- **Šta je**: Original repo sa svim setup-om (GitHub + Cloudflare Pages je već konfigurisan)
- **Zašto**: Sve je već povezano, vidi kako live deployment radi
- **Alternativa**: Ako želi da vežba bez rizika od slomljenja → koristi test repo (`03-2-web-test`)

### 2. **Dokumentacija**
- **ONBOARDING.md** (u `docs/` folder-u)
  - Detaljnog tok rada
  - Korak po korak setup
  - Cloudflare Pages objašnjenje
  - Primeri izmena
  - Git workflow
  - FAQ

### 3. **Pristup Cloudflare Dashboard-u**
- **Daj mu**: Pristup kao member na organizaciji `RapidAppsDev`
- **URL**: https://dash.cloudflare.com/
- **Put ka projektu**: Workers & Pages → Pages → gordana-coaching-mockup
- **Šta vidiš tam**:
  - Build logs (koji commit je deployovan)
  - Production domain: `https://gordana-coaching-mockup.pages.dev`
  - Deployment history
  - **NE daj mu**: Account settings, billing, security keys (to je za tebe)

### 4. **GitHub Access**
- **Org**: RapidAppsDev
- **Repo**: 03-WEB-coaching-launchpad
- **Dozvole**: Može da piše kod, pravi branches, PRs
- **NE**: Merge na main sam (mora code review ili ti odobreš)

---

## 🔐 Šta NE Treba da mu Daš

❌ Cloudflare account credentials ili API keys  
❌ GitHub organization admin access  
❌ Production secrets ili environment keys (ovde nema, ali za budućnost)  
❌ Domain management access  
❌ Billing ili payment info  

---

## 📊 Struktura Projekta (Šta Mu Objasni)

### Tech Stack
```
Astro 4.3 (Static Site Generator)
    ↓
Tailwind CSS 3.4 (Styling)
    ↓
Node.js 18+
```

### Folder Struktura
```
src/
├── pages/       → Stranice (routing automatski)
├── components/  → Reusable komponente
├── layouts/     → Layout template
└── styles/      → Global CSS

public/         → Static fajlovi (slike, fonts)
dist/           → Production build (Ne commituj! Builduje CF)
```

### Build & Deploy Pipeline
```
Local Dev          GitHub         Cloudflare Pages
  ↓                 ↓                    ↓
npm run dev    git push main    → npm run build → dist/
(localhost)        ↓               ↓
              auto-webhook      auto-upload
                                → CDN
                                → https://...pages.dev
```

---

## 🎯 Prvi Zadaci za Novog Dev-a

**Preporuka:** Daj mu ove po redu da vežba:

### Faza 1: Razumevanje Setup-a (Dan 1)
- [ ] Kloniraj repo, pokreni `npm install`
- [ ] Pokreni `npm run dev` i vidim sajt na localhost:4321
- [ ] Procitaj `README.md` (struktura projekta)
- [ ] Procitaj `docs/ONBOARDING.md` (ovaj fajl)
- [ ] Otvori `src/pages/index.astro` i razumej strukturu

### Faza 2: Vežba (Dan 2-3)
- [ ] **Izmena 1**: Promeni boju nekog dugmeta
- [ ] **Izmena 2**: Promeni tekst na home page-u
- [ ] **Izmena 3**: Dodaj novu stranicu (npr. `/test`)
- [ ] Testiraj sve lokalno (npm run dev)

### Faza 3: Deployment (Dan 4)
- [ ] `npm run build` lokalno
- [ ] `npm run preview` - pogledaj production verziju
- [ ] Kreiraj granu: `git checkout -b feature/test-izmena`
- [ ] Commit izmene: `git add . && git commit -m "Test izmena"`
- [ ] Push grana: `git push origin feature/test-izmena`
- [ ] Na GitHub-u kreiraj Pull Request
- [ ] Vidiš Cloudflare Pages preview URL u PR-u
- [ ] Testiraj preview deployment
- [ ] Merge PR na main
- [ ] Čekaj ~30-60 sekundi
- [ ] Vidiš live na https://gordana-coaching-mockup.pages.dev

### Faza 4: Real Work
- Daš mu prvi pravi task (npr. "Dodaj novu sekciju", "Fix bug na Services page")

---

## 🔧 Cloudflare Pages — Šta je Gde

### Dashboard URL
https://dash.cloudflare.com/ → Workers & Pages (left sidebar) → Pages tab

### Projekat: `gordana-coaching-mockup`

**Build Settings** (Deployments tab)
- **Repository**: `RapidAppsDev/03-WEB-coaching-launchpad`
- **Branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (ne menjaj)
- **Environment**: Nema env vars (statički site)

**Domains** (Settings tab)
- **Production domain**: `gordana-coaching-mockup.pages.dev`
- **Custom domains**: Ako kupimo domain, ide ovde

**Deployment History** (Deployments tab)
- Vidiš sve pushove
- Click na deployment → vidiš build log
- Ako je failed → vidiš šta je error

**Preview Deployments**
- Automatski se kreiraju za svaki PR
- Link se pojavljuje u PR-u na GitHub-u
- Testiraj pre nego merge-uješ

---

## ⚠️ Česte Greške da Izbegneš

### Greška 1: Pushujem bez testiranja
❌ `git push origin main` bez `npm run dev` i `npm run build` proveravanja  
✅ Uvek: `npm run dev` → testiraj → `npm run build` → `npm run preview` → push

### Greška 2: Menjam production bez PR
❌ `git push origin main` direktno (bez PR)  
✅ Kreiraj branch → PR → test sa preview → merge

### Greška 3: Commitovanje `dist/` foldera
❌ `git add dist/` (CF će sam buildovati)  
✅ `.gitignore` već ima `dist/`, onda je OK

### Greška 4: Break-ovanje deployment-a sa syntax errorom
❌ Pushem kod sa greskom → CF build fail-uje  
✅ `npm run build` lokalno prvo da vidim greške

---

## 📞 Support & Escalation

Ako novom dev-u trebam pomoć:

| Problem | Rešenje |
|---------|---------|
| Astro syntax je čudan | Pošalji link: https://docs.astro.build/ |
| Tailwind klasa ne radi | Verifu u tailwind.config.mjs (možda klasa nije definisana) |
| Deployment je failed | Pogled build logs u CF Dashboard → Deployments |
| GitHub PR nije merjable | Proveri: code conflicts? CI status? Branch protection rules? |
| Boja nije dobra | Verifu u tailwind.config.mjs ili koristim Tailwind color palette |

---

## 📋 Checklist — Kada ga Puštaš Slobodno

Pre nego što mu daš pristup i zadatke:

- [ ] Ima GitHub pristup sa write dozvoli
- [ ] Ima Cloudflare Page view-only pristup (NE admin)
- [ ] Procitao je ONBOARDING.md i razume build pipeline
- [ ] Lokalno je uspešno pokrenuo `npm run dev`
- [ ] Napravio je test PR i vidim preview deployment
- [ ] Razume file-based routing u Astro
- [ ] Zna kako da čita build errors

---

## 🎓 Edukativni Resursi za Njega

Daj mu ove linkove:

- **Astro**: https://docs.astro.build/
- **Tailwind CSS**: https://tailwindcss.com/docs/
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **Git workflow**: https://git-scm.com/book/en/v2

---

## 🚀 Long-term Plan

**Kada želi da ide dalje:**

1. Dodaj Real Contact Form (Formspree ili EmailJS)
2. Add Blog (Sanity CMS + Astro integration)
3. Analytics (Google Analytics ili CF Web Analytics)
4. Custom Domain (domain → DNS setup u CF)
5. Deploj na sopstveni domain

---

**Gotovo!** Novi dev je spreman za rad. 🎉
