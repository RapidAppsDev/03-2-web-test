# Cloudflare Pages — Quick Reference

Brz pregled šta je gde u Cloudflare Pages dashboard-u.

---

## 🔗 Linkovi

| Šta | Link |
|-----|------|
| Main Dashboard | https://dash.cloudflare.com/ |
| Pages Section | https://dash.cloudflare.com/?to=/:account/pages |
| Project gordana-coaching | https://dash.cloudflare.com/?to=/:account/pages/view/gordana-coaching-mockup |
| Live Sajt | https://gordana-coaching-mockup.pages.dev |

---

## 📍 Gde je šta u Dashboard-u

```
Cloudflare Dashboard
│
└── Workers & Pages (left sidebar)
    │
    └── Pages (tab)
        │
        └── gordana-coaching-mockup (projekat)
            │
            ├── Deployments
            │   ├── View build logs
            │   ├── Deployment history
            │   └── Preview deployments (za PR-ove)
            │
            ├── Settings
            │   ├── Build command: npm run build
            │   ├── Build output: dist
            │   ├── GitHub repo: RapidAppsDev/03-WEB-coaching-launchpad
            │   ├── Branch: main
            │   └── Environment variables: (nema - statički site)
            │
            ├── Domains
            │   ├── Production: gordana-coaching-mockup.pages.dev
            │   └── Custom domains: (ako kupiš domain)
            │
            └── Analytics (ako je enabled)
```

---

## ⚙️ Build Settings

**Gde vidim?** 
Settings → Build, deployments, environment

**Šta je tu?**
```
Project name:              gordana-coaching-mockup
GitHub repository:         RapidAppsDev/03-WEB-coaching-launchpad
Production branch:         main
Build command:             npm run build
Build output directory:    dist
Root directory:            / (ne menjaj)
Node.js version:           Auto (14.x+)
Environment variables:     NEMA (statički)
```

**Šta ako se promeni?** (NE MENJAJ SAMI!)
- Ako promeniš branch → new pushes na tu granu će biti deployed
- Ako promeniš build command → CF će koristiti taj umesto default-nog
- Ako promeniš output directory → CF će hostvati drugi folder (risk!)

---

## 📊 Deployments Tab

**Vidim:**
- **Deployment history** - sve pushove na main granu
- **Status** - Success ✅ ili Failed ❌
- **Commit hash** - koji commit je deployovan
- **Time** - kada je deployovano
- **Trigger** - Push, Rollback, Manual

**Ako je Failed:**
1. Click na deployment
2. Vidiš **Build logs** - šta je error
3. Česte greške:
   - `npm install` failed → dependency problem
   - `npm run build` failed → Astro syntax error ili missing file
   - Permission denied → .gitignore problem

**Ako je OK:**
- Vidiš link na **Production domain**: https://gordana-coaching-mockup.pages.dev
- Click → sajt je live

---

## 🧪 Preview Deployments

**Šta su?**
Automatski deployment-i za svaki PR na GitHub-u.

**Gde vidim?**
- Idi na GitHub PR-u
- Scroll down do "Deployments" sekcije
- Vidiš link kao: `https://[random-hash].pages.dev`

**Kako se kreiraju?**
1. Nov commit na feature branch (nije main)
2. GitHub push → Cloudflare vidiš webhook
3. CF builduje i hostvuje na unique preview URL
4. Link se pojavljuje u PR-u
5. Testiraj preview, onda merge na main

**Posle merge-a na main:**
- Preview se briše
- Production se updatuje na `https://gordana-coaching-mockup.pages.dev`

---

## 🌐 Domains Tab

**Production Domain:**
```
Name:       gordana-coaching-mockup.pages.dev
Status:     Active ✅
Type:       Cloudflare Pages subdomain
TTL:        Automatic
```

**Custom Domains (ako kupimo domain):**
```
npr. coaching.eaglesmart.rs

Kako se dodaje?
1. Click "Add custom domain"
2. Uneseš domain (npr. coaching.eaglesmart.rs)
3. CF daje DNS instructions
4. U domain registrator-u updateuješ DNS records
5. CF validira i aktivira
```

---

## 🔐 Settings (Security & Advanced)

**Šta je tu?**
- **Build command** - `npm run build`
- **Build output** - `dist`
- **Environment variables** - NONE (statički)
- **Branch** - `main`
- **Auto-deploy preview** - Enabled (svaki PR)

**Šta NE menjaj sem ako znaš šta radiš:**
- Build command
- Build output directory
- Branch (osim ako namerno)

---

## 📈 Analytics (ako je enabled)

**Gde?** Analytics tab

**Šta vidim?**
- Pageviews
- Unique visitors
- Traffic po zemli
- Top pages
- Errors (4xx, 5xx)

**Za ovaj projekt:**
- Verovatno low traffic (mockup site)
- Ako je production → koristi za monitoring

---

## 🔧 Česte Operacije

### Operacija 1: Proverim Li je Sajt Live?

```
1. Otvori https://gordana-coaching-mockup.pages.dev
2. Trebalo bi videti coaching website
3. Ako je down:
   → Idi u CF Dashboard
   → Vidiš failed deployment?
   → Click → vidiš error u logs
```

### Operacija 2: Šta je Deployment-ovano?

```
1. CF Dashboard → gordana-coaching-mockup
2. Deployments tab
3. Vidiš listi svih deployment-a
4. Click na deployment → vidiš commit message, author, build logs
5. Ako je failed → vidiš šta je error
```

### Operacija 3: Testiram PR Pre Merge-a

```
1. Na GitHub PR-u
2. Scroll do "Deployments" sekcije
3. Click na preview link
4. Vidiš live verziju sa novim kodom
5. Testiram
6. Ako je OK → merge na main
7. CF deployuje production ~30-60 sec.
```

### Operacija 4: Rollback Na Starijoji Verziju

```
1. CF Dashboard → Deployments
2. Click na stiju deployment koji žeš
3. Click "Rollback to this deployment"
4. CF redeploy-uje tu verziju
5. Trenutno live deployment je sada old verzija
```

### Operacija 5: Manuelni Deploy (bez Git push)

```
1. CF Dashboard → gordana-coaching-mockup
2. Deployments tab → top desno "Trigger build"
3. Odabereš branch (main)
4. CF pokreće `npm run build` i deployuje
5. Trebalo bi za slučajeve kad trebam retry bez novog commit-a
```

---

## ⚠️ Error Scenarios

### Scenario 1: Build Failed

**Šta vidim?**
Deployment status: ❌ Failed

**Šta da radim?**
1. Click na failed deployment
2. Vidiš error u logs
3. Česte greške:
   ```
   Error: Cannot find module 'xyz'
   → npm install dependency problem
   
   Error: Syntax error in src/pages/index.astro
   → Code error, prevedi lokalno sa npm run build
   
   Error: ENOENT: no such file or directory
   → Missing file (slike, komponente)
   ```
4. Ako je dependency problem → fajl `package-lock.json` je out of date
   - Lokalno `npm install` → commit → push
   - CF će rebuld

### Scenario 2: Sajt je Live Ali Izgleda Loše

**Šta da vidim?**
Boje nisu dobre, layout je broken, slike nedostaju

**Šta da radim?**
1. Otvori DevTools (F12) u preview/production
2. Check console za errors
3. Check network tab za 404-e (missing resources)
4. Ako je CSS problem → proverit tailwind.config.mjs
5. Ako je missing slike → proverit public/ folder

### Scenario 3: Preview (PR) Radi, Proizvodni Ne

**Šta je desilo?**
Nešto se promenilo između PR-a i main-a

**Šta da radim?**
1. Verifu što je merge-ovano na main nakon PR
2. Vidiš drugi commit koji je problematičan?
3. Revert taj commit ako je novi problem
4. Ili testiraj taj commit lokalno: `git checkout [commit-hash]`

---

## 🎯 Daily Checks (Ako je Production)

```
Daily:
- Otvoriš https://gordana-coaching-mockup.pages.dev
- Sajt radi? ✅
- Load speed OK? ✅
- Nema CSS/JS errors? ✅ (DevTools)

Weekly:
- Vidiš analytics (ako je enabled)
- Deployment history - sve deployments su successful?
- Error log - 4xx/5xx errors?

After Each Deploy:
- Vidiš live sajt?
- Testiraj main features (navigation, forms, itd.)
```

---

## 🔐 Šta NE Radiš u CF Dashboard-u

❌ Ne menjam GitHub credentials  
❌ Ne menjam build command (sem ako znaš šta radiš)  
❌ Ne brijem deployments (keep history)  
❌ Ne dodajem environment variables bez znanja (ovde nema)  
❌ Ne menjam domain setup bez dozvole  

---

## 📞 Ako Trebaš Help

| Problem | Gde Vidim | Šta Radiš |
|---------|-----------|----------|
| Build log | CF Dashboard → Deployments → Click → Logs | Čitam error message |
| Preview link | GitHub PR → Deployments sekcija | Click preview link |
| Domain setup | CF Dashboard → Domains | Sledi CF instructions |
| Performance | CF Dashboard → Analytics | Vidim traffic, errors |
| Old deployment | CF Dashboard → Deployments | Click → Rollback |

---

**Gotovo!** Sad znaš gde je šta u Cloudflare Pages. 🎉
