# Saba's Portfolio (Next.js + Tailwind + Framer Motion)

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Customise (everything is in `data/portfolioData.ts`)
- Student name, school, bio, avatar (`public/images/avatar.jpg` → `avatar: "/images/avatar.jpg"`)
- **Guardian email** (`guardianEmail`): replace the placeholder before publishing
- Gallery items, projects, achievements, books and goals (set `image: "/images/xyz.jpg"` to replace emoji placeholders)
- Choose Candy Pop, Lavender Dream, Mint Meadow or Midnight Galaxy from the palette button; the selection is saved in `localStorage`
- Theme colours live in the CSS variables in `app/globals.css`; switcher options and preview dots live in `components/ThemeProvider.tsx`

## Child safety
No address, phone number or school timetable is shown. Contact goes to the guardian's email via `mailto:`. Use only first names and avoid face photos unless the family is comfortable.
