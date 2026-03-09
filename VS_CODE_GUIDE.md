# 🚀 Complete VS Code Setup Guide

## Your Current Project Setup

✅ **Good News!** All dependencies are already installed in your project:
- ✅ motion (12.23.24)
- ✅ react-hook-form (7.55.0)
- ✅ sonner (2.0.3)
- ✅ lucide-react (0.487.0)

## Current File Structure

Your project already has these files set up:

```
/src/app/
├── App.tsx                          ✅ Already exists
├── components/
│   ├── Navbar.tsx                   ✅ Already exists
│   ├── Hero.tsx                     ✅ Already exists
│   ├── Services.tsx                 ✅ Already exists
│   ├── Stats.tsx                    ✅ Already exists
│   ├── Projects.tsx                 ✅ Already exists
│   ├── Testimonials.tsx             ✅ Already exists
│   ├── ContactInfo.tsx              ✅ Already exists
│   ├── ContactForm.tsx              ✅ Already exists
│   ├── Footer.tsx                   ✅ Already exists
│   └── figma/
│       └── ImageWithFallback.tsx    ✅ Already exists
```

## 📝 How to Work With This Project in VS Code

### 1. Open the Project
```bash
# If not already open, navigate to your project folder
cd /path/to/your/project

# Open in VS Code
code .
```

### 2. View/Edit Any Component

Simply open any file from the sidebar:
- Click on `src/app/components/Hero.tsx` to edit the hero section
- Click on `src/app/components/Services.tsx` to edit services
- And so on...

### 3. Start Development Server

In VS Code terminal (View → Terminal or `Ctrl+`):

```bash
npm run dev
# or
pnpm dev
```

The website will open at `http://localhost:5173` (or similar)

### 4. Making Changes - Examples

#### Example 1: Change the Brand Name
1. Press `Ctrl+Shift+F` (Find in All Files)
2. Search for: `SSAARGG`
3. Replace with your brand name
4. Save all files (`Ctrl+K S`)

#### Example 2: Change Colors
1. Press `Ctrl+Shift+F`
2. Search for: `#9333ea` (purple color)
3. Replace with your color (e.g., `#3b82f6` for blue)
4. Save all files

#### Example 3: Edit Contact Information
1. Open `src/app/components/ContactInfo.tsx`
2. Find lines 7-27 (the contactDetails array)
3. Change email, phone, location
4. Save (`Ctrl+S`)

#### Example 4: Add/Remove a Service
1. Open `src/app/components/Services.tsx`
2. Scroll to the service sections (Video Editing, Social Media, Content Writing)
3. Copy one section to add new service
4. Or delete a section to remove
5. Save

#### Example 5: Change Images
1. Open any component with `ImageWithFallback`
2. Replace the `src="https://images.unsplash.com/..."` with your image URL
3. Save

### 5. Common VS Code Shortcuts

- **Save File**: `Ctrl+S`
- **Save All**: `Ctrl+K S`
- **Find in File**: `Ctrl+F`
- **Find in All Files**: `Ctrl+Shift+F`
- **Replace in File**: `Ctrl+H`
- **Replace in All Files**: `Ctrl+Shift+H`
- **Format Document**: `Shift+Alt+F`
- **Go to File**: `Ctrl+P`
- **Toggle Terminal**: `Ctrl+``
- **Split Editor**: `Ctrl+\`

### 6. Recommended VS Code Extensions

Install these for better development experience:

1. **ES7+ React/Redux/React-Native snippets**
   - Quick component snippets
   
2. **Tailwind CSS IntelliSense**
   - Auto-complete for Tailwind classes
   
3. **Prettier - Code formatter**
   - Auto-format your code
   
4. **Auto Rename Tag**
   - Rename matching HTML/JSX tags

To install:
- Press `Ctrl+Shift+X`
- Search for extension name
- Click Install

### 7. File Organization Tips

#### Main Layout (App.tsx)
```tsx
// Controls the order of sections
<Navbar />
<Hero />
<Services />
<Stats />
<Projects />
<Testimonials />
<ContactInfo />
<ContactForm />
<Footer />
```

#### Individual Components
Each component is self-contained:
- `Navbar.tsx` - Navigation bar
- `Hero.tsx` - Landing section
- `Services.tsx` - Services showcase
- `Stats.tsx` - Statistics section
- `Projects.tsx` - Portfolio
- `Testimonials.tsx` - Client reviews
- `ContactInfo.tsx` - Contact cards
- `ContactForm.tsx` - Message form
- `Footer.tsx` - Footer section

### 8. Quick Customization Checklist

- [ ] Change brand name (SSAARGG → Your Name)
- [ ] Update contact email
- [ ] Update phone number
- [ ] Update location
- [ ] Replace service images
- [ ] Update service descriptions
- [ ] Modify project showcase items
- [ ] Edit testimonials
- [ ] Update social media links in Footer
- [ ] Change color scheme
- [ ] Add/remove sections

### 9. Testing Changes

1. Make your changes in VS Code
2. Save the file (`Ctrl+S`)
3. Check browser - changes appear automatically
4. If changes don't appear, refresh browser (`Ctrl+R`)

### 10. Building for Production

When ready to deploy:

```bash
npm run build
```

This creates optimized files in the `dist` folder.

---

## 🎨 Quick Customization Examples

### Change Primary Color Throughout Site

1. Press `Ctrl+Shift+H` (Replace in all files)
2. Find: `#9333ea`
3. Replace: `#your-color-hex`
4. Replace All

### Change Font Sizes

1. Open `src/styles/theme.css`
2. Modify CSS variables
3. Save

### Add New Section

1. Create new file: `src/app/components/NewSection.tsx`
2. Copy structure from existing component
3. Import in `App.tsx`: `import { NewSection } from './components/NewSection';`
4. Add to JSX: `<NewSection />`
5. Save

---

## 💡 Pro Tips

1. **Split Screen**: Drag a tab to the side to view two files at once
2. **Multi-Cursor**: `Alt+Click` to place multiple cursors
3. **Duplicate Line**: `Shift+Alt+Down` to duplicate current line
4. **Move Line**: `Alt+Up/Down` to move line up/down
5. **Comment Code**: `Ctrl+/` to toggle comment

---

## 🐛 Troubleshooting

**Problem**: Changes not showing
**Solution**: Hard refresh browser (`Ctrl+Shift+R`)

**Problem**: Import errors
**Solution**: Restart dev server in terminal

**Problem**: TypeScript errors
**Solution**: Hover over error, read message, fix accordingly

---

## 📚 Learn More

- **Motion Docs**: https://motion.dev/docs/react-quick-start
- **Tailwind Docs**: https://tailwindcss.com/docs
- **React Hook Form**: https://react-hook-form.com/get-started

---

**You're all set!** Your project is ready to be edited in VS Code. Just open any component file and start customizing! 🎉
