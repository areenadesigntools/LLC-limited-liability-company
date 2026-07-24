# 🚀 Production Deployment Checklist

## Pre-Deployment (Before Going Live)

### 1. Code Quality ✅ / ⬜
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - builds successfully
- [ ] Run `npm run dev` - no console errors
- [ ] All TypeScript types validated
- [ ] Test on real mobile device
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)

### 2. Content Review ✅ / ⬜
- [ ] All company info is correct
  - [ ] Phone number
  - [ ] Email address
  - [ ] Physical address
  - [ ] Business hours
- [ ] All services are up to date
- [ ] Pricing/fees are accurate
- [ ] All links work
  - [ ] Internal links
  - [ ] External links
  - [ ] WhatsApp button works
- [ ] Spelling and grammar check
- [ ] Brand name consistency

### 3. Legal Review ✅ / ⬜
- [ ] Privacy Policy reviewed by lawyer
- [ ] Terms & Conditions reviewed by lawyer
- [ ] Refund Policy reviewed by lawyer
- [ ] Disclaimers on all service pages
- [ ] Contact information correct
- [ ] GDPR compliance considered

### 4. Branding ✅ / ⬜
- [ ] Logo added to Header component
- [ ] Favicon added (`public/favicon.ico`)
- [ ] Logo in incorrect places removed
- [ ] Brand colors verified
- [ ] Font appears correctly
- [ ] Social media icons linked correctly

### 5. Images & Media ✅ / ⬜
- [ ] All placeholder images replaced
- [ ] Open Graph image created (`public/og-image.png`)
- [ ] Images optimized (compressed)
- [ ] Alt text added to all images
- [ ] Image paths correct
- [ ] SVG icons display properly

### 6. Forms & Validation ✅ / ⬜
- [ ] Contact form works on desktop
- [ ] Contact form works on mobile
- [ ] Form validation works
- [ ] Error messages are clear
- [ ] Success message displays
- [ ] Honeypot field protecting against spam
- [ ] Required fields marked

### 7. Email & Notifications ✅ / ⬜
- [ ] Email service configured (Resend/Nodemailer)
- [ ] Contact form emails sending
- [ ] Subject line is appropriate
- [ ] Email template looks good
- [ ] Send to test email addresses
- [ ] Admin notification working

### 8. Analytics & Tracking ✅ / ⬜
- [ ] Google Analytics ID added
- [ ] GA4 tracking events configured
- [ ] Google Search Console code ready
- [ ] Conversion tracking setup
- [ ] Page view tracking verified
- [ ] Event tracking working

### 9. SEO Optimization ✅ / ⬜
- [ ] Meta tags on all pages
  - [ ] Title (under 60 chars)
  - [ ] Description (under 160 chars)
  - [ ] Keywords
- [ ] Sitemap generated and valid
- [ ] robots.txt configured
- [ ] Canonical URLs set
- [ ] JSON-LD schema validation
- [ ] Breadcrumb schema working
- [ ] FAQ schema valid
- [ ] H1 tags unique on each page
- [ ] Internal links strategy
- [ ] External links have proper anchors

### 10. Performance ✅ / ⬜
- [ ] Lighthouse score 90+
  - [ ] Performance
  - [ ] Accessibility
  - [ ] Best Practices
  - [ ] SEO
- [ ] Page load time < 3 seconds
- [ ] No console errors
- [ ] No console warnings
- [ ] Images lazy loaded
- [ ] CSS minified
- [ ] JavaScript optimized

### 11. Security ✅ / ⬜
- [ ] HTTPS enabled on domain
- [ ] Environment variables secure (never in code)
- [ ] API keys protected
- [ ] Form input sanitized
- [ ] CSRF protection ready
- [ ] No sensitive data in client-side code
- [ ] Security headers configured

### 12. Accessibility ✅ / ⬜
- [ ] Keyboard navigation works
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Screen reader compatible
- [ ] Color contrast ratio 4.5:1+
- [ ] Form labels associated
- [ ] Alt text on images
- [ ] Focus trap on modals

---

## Environment Configuration

### Create `.env.local` file with:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=LLC Limited Liability Company

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=+923712559501

# Email Configuration
CONTACT_EMAIL=info@llclimitedliabilitycompany.com
REPLY_TO_EMAIL=info@llclimitedliabilitycompany.com

# Email Service (Choose one)
# Option 1: Resend
RESEND_API_KEY=re_xxxxxxxxxxxx

# Option 2: Nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@yourdomain.com

# Google Analytics
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX

# Google Search Console
NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_CODE=xxxxxxxxxxxx

# Stripe (if using payments)
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxx

# PayPal (if using payments)
PAYPAL_CLIENT_ID=xxxxxxxxxxxx
PAYPAL_CLIENT_SECRET=xxxxxxxxxxxx
```

---

## Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

1. **Prepare code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**
   - Create repo on GitHub
   - Push code to GitHub

3. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import GitHub repository
   - Set environment variables
   - Click "Deploy"

4. **Configure domain**
   - Add custom domain in Vercel settings
   - Update DNS records

### Option 2: Deploy to Other Hosting

1. **Build for production**
   ```bash
   npm run build
   npm start
   ```

2. **Upload to server**
   - Upload `.next` folder
   - Upload `public` folder
   - Upload `node_modules` or let server install
   - Upload `package.json` and `package-lock.json`

3. **Set environment variables**
   - Configure on your hosting provider
   - Ensure all variables are set

4. **Start server**
   ```bash
   npm install
   npm run build
   npm start
   ```

### Option 3: Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t llc-website .
docker run -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=https://yourdomain.com llc-website
```

---

## Post-Deployment Verification

### 1. Site Accessibility ✅ / ⬜
- [ ] Domain resolves to your site
- [ ] HTTPS working (no insecure warnings)
- [ ] All pages load
- [ ] Forms work
- [ ] Images display
- [ ] Mobile version responsive

### 2. Analytics Verification ✅ / ⬜
- [ ] Google Analytics tracking
- [ ] Page views showing in GA
- [ ] Events firing correctly
- [ ] Unique visitors tracked
- [ ] Test event shows within 24 hours

### 3. Search Engine Verification ✅ / ⬜
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] robots.txt accessible
- [ ] Google Search Console verified
- [ ] Domain verification complete
- [ ] Crawl test successful
- [ ] Submit URLs to Google

### 4. Email Verification ✅ / ⬜
- [ ] Send test email to yourself
- [ ] Email arrives in inbox (not spam)
- [ ] Email template displays correctly
- [ ] Links in email clickable
- [ ] Branding in email correct

### 5. Form Testing ✅ / ⬜
- [ ] Fill and submit contact form
- [ ] Verification email received
- [ ] Data stored in database/email
- [ ] Validation errors display correctly
- [ ] Success message shows
- [ ] Redirect or confirmation works

### 6. Final Review ✅ / ⬜
- [ ] No 404 errors
- [ ] No broken images
- [ ] No broken links
- [ ] Mobile menu works
- [ ] Animations smooth
- [ ] Performance acceptable

---

## Monitoring After Launch

### Daily Checks (First Week)
- [ ] Site accessibility
- [ ] Error logs
- [ ] Form submissions
- [ ] Email notifications
- [ ] Analytics data

### Weekly Checks
- [ ] Page performance
- [ ] User feedback
- [ ] Form submissions count
- [ ] Analytics trends
- [ ] Appearance on devices

### Monthly Maintenance
- [ ] Security updates
- [ ] Dependency updates
- [ ] Analytics review
- [ ] Content updates
- [ ] Link verification
- [ ] Backup verification

---

## Important URLs

Save these for future reference:

| Service | URL |
|---------|-----|
| Vercel Dashboard | https://vercel.com/dashboard |
| Google Analytics | https://analytics.google.com |
| Google Search Console | https://search.google.com/search-console |
| Resend Dashboard | https://resend.com/dashboard |
| Stripe Dashboard | https://dashboard.stripe.com |
| Domain Provider | [Your domain registrar] |

---

## Troubleshooting

### Site not accessible?
- [ ] Check domain DNS settings
- [ ] Verify HTTPS is enabled
- [ ] Check with hosting provider status
- [ ] Wait up to 24 hours for DNS propagation

### Forms not working?
- [ ] Check email configuration
- [ ] Test API route manually
- [ ] Check error logs
- [ ] Verify validation schema matches form

### Analytics not tracking?
- [ ] Verify GA ID in .env
- [ ] Check GA4 property exists
- [ ] Wait 24 hours for first data
- [ ] Check browser console for GA errors

### Performance slow?
- [ ] Run Lighthouse audit
- [ ] Check server resources
- [ ] Optimize images
- [ ] Enable caching
- [ ] Check for slow API calls

---

## Backup & Recovery

### Setup Backups
- [ ] Database automatic backups (if using database)
- [ ] Code repository (GitHub)
- [ ] Environment variables documented
- [ ] Configuration files backed up

### Recovery Procedure
1. Restore from last known good backup
2. Re-deploy to production
3. Verify all systems working
4. Test forms and email
5. Verify analytics data

---

## Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance | 90+ | Page SpeedInsights |
| Lighthouse Accessibility | 90+ | Page SpeedInsights |
| Lighthouse SEO | 95+ | Page SpeedInsights |
| First Contentful Paint (FCP) | < 1.8s | Core Web Vitals |
| Largest Contentful Paint (LCP) | < 2.5s | Core Web Vitals |
| Cumulative Layout Shift (CLS) | < 0.1 | Core Web Vitals |

---

## Support & Maintenance

### Getting Help
- [ ] Bookmark helpful links
- [ ] Save support contact numbers
- [ ] Document any customizations
- [ ] Keep change log

### Monthly Maintenance
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Audit security
npm audit fix

# Rebuild and test
npm run build
npm run dev
```

---

## Sign-Off

Before launching, confirm:

- **Developer**: _____________________ Date: __________
- **Designer**: _____________________ Date: __________
- **Business Owner**: _____________________ Date: __________

---

## Go-Live Date: ________________

Expected uptime: 99.9%  
Support contact: info@llclimitedliabilitycompany.com  
Emergency contact: [Your phone number]

---

**Last Updated**: January 2026  
**version**: 1.0.0
