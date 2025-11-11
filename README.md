# Portfolio Website Template

A modern, responsive portfolio website template built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

1. Clone or download this template
2. Install dependencies: `npm install` or `pnpm install`
   - If `npm install` doesn't work, try: `npm install --legacy-peer-deps`
3. Run development server: `npm run dev` or `pnpm dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### 1. Basic Information (Required)

**File: `src/app/layout.tsx`**
- Replace `"Your Name"` with your actual name
- Update `"Add Your Title Here"` with your professional title
- Replace placeholder URLs with your actual website URL
- Update keywords array with relevant terms for your profession
- Replace `@yourtwitterhandle` with your actual Twitter handle
- Add your Google verification code

### 2. Hero Section

**File: `src/components/sections/Hero.tsx`**
- Replace `[Your Name]` with your name
- Replace `[Add Your Title Here]` with your professional title
- Update the elevator pitch paragraph
- Replace `your.email@example.com` with your actual email

### 3. About Section

**File: `src/components/sections/About.tsx`**
- Replace all bracketed placeholders with your personal story
- Update the blog link URL to your actual blog
- Replace image captions (`"Add caption here"`) with descriptions of your photos
- Replace placeholder images in `/public/` folder with your own

### 4. Work Experience

**File: `src/components/sections/WorkExperience.tsx`**
- Update the `experiences` array with your actual work history
- Replace date placeholders (`"Month Year"`) with actual dates
- Replace role and company names with your experience
- Update company links with actual URLs
- Choose appropriate `companyColor` (blue, pink, or black)

### 5. Projects

**File: `src/components/sections/Projects.tsx`**
- Update the `projects` array with your actual projects
- Replace project names, descriptions, and tech stacks
- Replace project images in `/public/` folder
- Ensure image paths match your uploaded files

### 6. Contact Section

**File: `src/components/sections/Contact.tsx`**
- Replace placeholder description with your availability and ideal projects
- Update email link with your actual email address

### 7. Social Links

**File: `src/components/sections/Header.tsx`**
- Update all URLs in `SOCIAL_LINKS` array with your actual profiles
- Replace `yourusername` with your actual usernames
- Remove any social platforms you don't use

### 8. Calendar Booking (Optional)

**File: `src/components/sections/Cal.tsx`**
- Replace `yourusername/15min` with your actual Cal.com link
- If you don't use Cal.com, you can remove this component or replace with another booking system

### 9. Newsletter (Optional)

**File: `src/components/sections/Newsletter.tsx`**
- Update description with your newsletter content details
- Replace the form action URL with your newsletter service
- Update subscriber count or remove the line

### 10. Footer

**File: `src/components/sections/Footer.tsx`**
- Replace `[Your Name]` with your actual name
- Update copyright year if needed

## 🖼️ Images

Replace these placeholder images in the `/public/` folder:
- `avatar.jpg` - Your profile photo
- `2.png`, `3.png` - Personal photos for About section
- `project-1.png`, `project-2.png`, `project-3.png` - Project screenshots
- `woek-1.png` through `woek-5.png` - Portfolio gallery images

## 🎨 Styling

The template uses Tailwind CSS for styling. You can:
- Customize colors in `tailwind.config.js`
- Modify component styles in individual component files
- Update global styles in `src/app/globals.css`

## 📱 Features

- ✅ Fully responsive design
- ✅ Modern animations with Framer Motion
- ✅ SEO optimized with proper metadata
- ✅ Accessible components
- ✅ Calendar booking integration
- ✅ Newsletter signup
- ✅ Fast loading and optimized

## 🛠️ Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Cal.com integration

## 📄 License

This template is provided as-is for personal and commercial use.
 