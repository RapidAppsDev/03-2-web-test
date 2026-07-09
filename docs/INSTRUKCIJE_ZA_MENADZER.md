# Setup & Onboarding — Za Tebe

Šta trebalo da daš novom dev-u i šta trebam znati.

---

## 📝 Šta Trebalo da Daš Novom Dev-u

### 1. **Repozitorijum**
- **URL**: https://github.com/RapidAppsDev/03-WEB-coaching-launchpad
- **Šta je**: Original repo sa Astro website-om
- **Šta je već setup**: GitHub + Cloudflare Pages (auto-deploy)
- **Šta radi**: Merge na main → CF automatski builduje i deployuje

### 2. **Dokumentacija**
- **ONBOARDING.md** (u `docs/` folder)
  - Setup instrukcije
  - 3 osnovne vežbe
  - Git workflow
  - FAQ

### 3. **GitHub Access**
- **Org**: RapidAppsDev
- **Repo**: 03-WEB-coaching-launchpad
- **Dozvole**: Može pisati kod, praviti branches, PRs
- **NE**: Merge na main sam (mora PR ili tvoje odobrenje)

### 4. **Live Sajt**
- **Postojeći**: https://03-web-coaching-launchpad.pages.dev/
- **Šta se dešava**: Kada push na main → CF builduje + deployuje ~30-60sec
- **Za vežbanje**: Može da kreira sopstvenu CF Pages ako želi (vidiš Opcija 2 u ONBOARDING.md)

---

## ❌ Šta NE Trebalo da Daš

❌ Cloudflare account pristup (tvoj lični nalog)  
❌ Billing info  
❌ Domain management  
❌ Production secrets  

**Zašto:** CF je tvoj personal account sa više projekata. Dev može sam da pravi sopstvenu CF Pages verziju ako želi.

---

## 🏗️ Struktura Projekta

```
Astro 4.3 (Static Site Generator)
    ↓
Tailwind CSS 3.4 (Styling)
    ↓
Node.js 18+ (Runtime)
```

**Folder struktura:**
```
src/
├── pages/       → Stranice (/ /about /services)
├── components/  → Komponente (Header, Hero, Cards, itd)
├── layouts/     → Osnovna template
└── styles/      → Globalni CSS

public/         → Static files (slike, fontovi)
dist/           → Production build (CF kreira automatski)
```

---

## 🔄 Build & Deploy Pipeline

```
Developer           GitHub         Cloudflare Pages
    ↓                ↓                    ↓
npm run dev    git push main        npm run build
(localhost)        ↓                     ↓
              webhook trigger      build HTML
                                      ↓
                                    deploy CDN
                                      ↓
                            https://...pages.dev ✅
```

---

## 📋 Prvi Zadaci za Novog Dev-a

**Preporuka - daš mu po redu:**

### Faza 1: Setup (Dan 1)
- [ ] Kloniraj repo
- [ ] `npm install` + `npm run dev`
- [ ] Otvori localhost:4321
- [ ] Procitaj `README.md` i `docs/ONBOARDING.md`

### Faza 2: Vežba (Dan 2-3)
- [ ] Vežba 1: Promeni tekst na home page-u
- [ ] Vežba 2: Promeni boju u tailwind.config.mjs
- [ ] Vežba 3: Kreiraj novu stranicu (`/test`)
- [ ] Testiraj sve lokalno

### Faza 3: Git & Deployment (Dan 4)
- [ ] Kreiraj granu: `git checkout -b feature/test`
- [ ] Commit izmene
- [ ] Push na GitHub: `git push origin feature/test`
- [ ] Kreiraj Pull Request
- [ ] (Opciono) Pravi CF Pages deploy ako želi
- [ ] Testiraj live verziju
- [ ] Merge PR na main

### Faza 4: Real Work
- Daš mu prvi pravi task

---

## 🚀 Kako Funkcioniše Deployment

### Šta se Dešava Kada Pushe na Main

```bash
git push origin main
```

1. GitHub prijavi Cloudflare Pages (webhook)
2. CF pokreće: `npm run build`
3. Astro kreira `dist/` folder sa HTML fajlovima
4. CF hostvuje `dist/` na CDN
5. ~30-60 sekundi kasnije → https://03-web-coaching-launchpad.pages.dev je updatovan

**Ako build fail-uje:**
- CF ima build logs (nije dostupno dev-u bez pristupa, ali vidim ja)
- Česta greška: dependency problem, syntax error, missing file

---

## 🔧 GitHub PR Workflow

**Kada dev kreirajira PR (pre merge-a na main):**

```
1. Novi code na feature branch
2. Push na GitHub
3. Cloudflare Pages kreira PREVIEW deployment
4. PR sadrži link: https://[random].pages.dev
5. Dev testiira preview
6. Ako je OK → merge na main → production update
```

---

## ⚠️ Česte Greške

### Greška 1: Push bez testiranja
❌ Direktno `git push origin main` bez `npm run dev`  
✅ Uvek: test lokalno → build lokalno → push

### Greška 2: Slomljen build
❌ Pushem kod sa greškama  
✅ `npm run build` lokalno prvo → ako pase → push

### Greška 3: Commitovanje `dist/` foldera
❌ `git add dist/` (CF će sam buildovati)  
✅ `.gitignore` već ima `dist/`

### Greška 4: Promenjen važan fajl
❌ Slučajno izmeni astro.config.mjs ili tailwind.config.mjs  
✅ Review pre commit-a

---

## 📞 Ako dev-u Trebam Help

| Problem | Šta Mu Kažem |
|---------|-------------|
| Astro sintaksa čudna | "Pročitaj https://docs.astro.build/" |
| Tailwind klasa ne radi | "Proveri tailwind.config.mjs - možda klasa nije definisana" |
| Build local fail-uje | "Verifu `npm run build` - šta je error?" |
| PR preview ne radi | "Čekaj ~5 min, CF builduje. Vidiš li status u PR-u?" |
| Git conflict | "Rebase feature granu na main: `git rebase origin/main`" |

---

## 🎓 Resursi za Dev-a

- **Astro**: https://docs.astro.build/
- **Tailwind**: https://tailwindcss.com/docs/
- **Git**: https://git-scm.com/book/en/v2

---

## 📊 Cloudflare Pages — Ako Dev Želi Sopstveni Deploy

Dev može sam da pravi test verziju (vidiš "Opcija 2" u ONBOARDING.md):

1. Kreira fork ili koristi testnu granu
2. Odeđe na https://dash.cloudflare.com (besplatno)
3. Kreiraj Pages projekt
4. Poveži GitHub repo
5. Build settings:
   - `npm run build`
   - `dist`
6. Deploy ✅

---

## 🎯 Checklist — Kada Ga Puštaš Slobodno

Pre nego što ga puštaš na pravi rad:

- [ ] Ima GitHub pristup (write permissions)
- [ ] Lokalno je uspešno pokrenuo `npm run dev`
- [ ] Procitao je ONBOARDING.md
- [ ] Uradio je sve 3 vežbe
- [ ] Napravio je test PR i vidiš preview deployment
- [ ] Razume file-based routing u Astro
- [ ] Zna `npm run dev`, `npm run build`, `git` komande

---

**Gotovo!** Dev je spreman. 🎉
