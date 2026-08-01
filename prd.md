# Product Requirements Document (PRD) — Built by Eunice Landing Page

## 1. Project Overview
* **Project name:** Built by Eunice Landing Page
* **Purpose:** A single scrolling landing page that promotes a limited time website package offer, educates business owners on why they need a professional website, and moves qualified visitors into a WhatsApp sales conversation.
* **Business objective:** Sell the ₦80,000 Business Launch Package to the first 10 business owners who complete the form during the promotional period.
* **Primary conversion goal:** Form completion, leading to a WhatsApp redirect with a prefilled message.
* **Secondary conversion goal:** Course checkout for visitors who want to learn to build their own website instead.
* **Success metrics:**
  * Number of completed forms
  * Number of WhatsApp conversations opened from the page
  * Number of course checkout clicks
  * Bounce rate and scroll depth on mobile
  * Conversion rate from form submission to paid client

## 2. Target Audience
* **Who they are:** Small and medium business owners in Nigeria across fashion, hair and beauty, skincare, restaurants, hotels, schools, consulting, coaching, and other service or retail businesses. Most are active on Instagram or WhatsApp but do not have a website, or have one that is outdated.
* **Pain points:** Hard to find on Google, look less credible than competitors with websites, entire sales process depends on manual DM and WhatsApp follow up, no central place to send new customers.
* **Objections to expect:**
  * "Do I really need a website if I already sell through Instagram?"
  * "Is ₦80,000 worth it?"
  * "Will this actually help me get more customers?"
  * "Can I trust this person to deliver?"
  * "What happens after the site is built, do I need to keep paying for anything?"
* **Motivations:** Wanting to look more established, wanting to be found on Google, wanting a place that represents the business professionally, wanting more sales without doing more manual work.
* **What they expect from the page:** Clear pricing, proof it works, a simple next step, and reassurance that this isn't a scam or a rushed job.

## 3. User Journey
1. Traffic Source (TikTok, Facebook, Instagram, LinkedIn, influencer, WhatsApp, referral)
   * ↓
2. Landing Page
   * ↓
3. Reads Offer (Hero)
   * ↓
4. Understands the Problem
   * ↓
5. Views Package Details
   * ↓
6. Views Proof (Testimonials)
   * ↓
7. Sees Pricing and Urgency
   * ↓
8. Views Recent Projects and About
   * ↓
9. Chooses one of two paths:
   * **A) Build My Website** → scrolls to Form
   * **B) Learn to Build Your Own Website** → goes to Course Checkout
   * ↓
10. **(Path A)** Submits Form
    * ↓
11. Redirects to WhatsApp with a prefilled message
    * ↓
12. Receives confirmation ("You're on the list...")
    * ↓
13. Sales conversation on WhatsApp
    * ↓
14. 70% deposit, onboarding, build, final payment, launch, 1 week support

## 4. Navigation
* Minimal, single page, anchor links only (no separate pages).
* Logo (left, links to top of page)
* About
* Package
* FAQ
* Contact (scrolls to form)
* Primary CTA button in nav: "Build My Website" (scrolls to form)
* Sticky navigation on desktop. On mobile, a simple hamburger menu with the same links, and the CTA button remains visible even when the menu is closed (sticky CTA bar at the bottom on mobile is acceptable if it improves conversion).

## 5. Landing Page Sections

### Hero
* **Purpose:** Communicate the offer and price contrast immediately, get the visitor to understand what this is within 3 seconds.
* **Content:** Headline (offer + price), subheadline (what's included, in one line), the "first 10 this week" urgency line, primary CTA button.
* **CTA:** "Build My Website" (scrolls to form)
* **Layout:** Full width, business owner focused imagery or a clean mockup of a website on a phone/laptop, headline and CTA left or center aligned depending on visual direction.
* **Responsive behavior:** Stack image below text on mobile.
* **Animations:** Subtle fade in on load only. No looping or distracting motion.

### Problem
* **Purpose:** Help the visitor recognize their own situation (no website, losing credibility, relying only on Instagram/WhatsApp) before presenting the solution.
* **Layout:** Short heading, 3 to 4 lines of copy or 3 short pain point cards, not a long paragraph.
* **Copy style:** Plain, direct, speaks to lost customers and looking less credible than competitors, not technical.

### Package (Business Launch Package)
* **Purpose:** Show exactly what's included and justify the price.
* **Content:** List of deliverables as cards or a checklist:
  * Professional website design
  * Mobile responsive design
  * SEO optimization
  * Google Business Profile setup
  * Free domain name (1 year)
  * Free hosting
  * Free Meta Ads Starter Guide
  * Contact form
  * WhatsApp integration

### Standalone Benefit: Post-Launch Support
* A standalone support card/callout highlighting 1 week of post-launch technical and editing support is placed directly beneath the package deliverables list to make it stand out.
* **Icons:** One simple illustration/image per deliverable or step (see design-system.md).
* **Pricing:** Shown at the bottom of this section or its own dedicated pricing section (see below).



### Testimonials
* **Purpose:** Build trust with real proof before asking for the form.
* **Layout:** Uniform flex-wrap grid of 5 cards, fitting 3 columns on desktop and wrapping cleanly to mobile viewports, displaying identically across all devices.
* **Content:** 5 screenshot-based picture testimonial cards, styled with uniform aspect-ratio (`3/4`), neutral backfill backgrounds, and contained screenshots (`object-fit: contain`) to preserve all edges.

### Pricing
* **Purpose:** Make the discount unmistakable.
* **Content:** ₦150,000 shown crossed out, ₦80,000 shown large and prominent, one line restating "first 10 business owners this week" urgency.
* **Layout:** Centered, high contrast, this should be the visual focal point of its section.

### Three Recent Projects
* **Purpose:** Show real proof of work, not just claims, to reinforce trust before the final CTA sections.
* **Content:** Short intro line, then a grid or carousel of three past website projects: Eucharia Luxury Hair (pre-launch site), King Redolence (perfume e-commerce), and Cee Collections (multi-category e-commerce).
* **Layout:** Visible by default, not collapsible, since proof of work should not require extra effort from the visitor to see. Grid on desktop, horizontal scroll or stacked cards on mobile.

### About
* **Purpose:** Build trust in who is behind the brand, and briefly cover why Built by Eunice is different, without turning this into a long separate differentiation section.
* **Content:** Short team bio (who the team is, what they focus on), folded together with a brief statement on what makes the approach different (websites built to help customers trust the business and take action, not just look good). Keep this to a few short paragraphs, not multiple subsections.
* **Layout:** Simple text section, optional team photo. Visible by default, kept intentionally brief to avoid adding length to the page.

### Two Paths
* **Purpose:** Split visitors who want the done for you build from visitors who want to learn to build it themselves, without making the course look like a discount version of the same offer.
* **Content:** Two side by side cards:
  * "Build My Website" — ₦80,000, scrolls to form
  * "Learn to Build Your Own Website" — ₦9,999, links directly to course checkout
* **Layout:** Equal visual weight, side by side on desktop, stacked on mobile. Do not present as tiers of the same product.

### FAQ
* **Purpose:** Handle objections before they become reasons not to convert.
* **Format:** Accordion, closed by default, one open at a time.
* **Suggested questions to cover:** Do I need a website if I already sell on Instagram, how long does it take, what if I don't know what I want my site to look like, what happens after the week of support ends, is the ₦9,999 course the same as the ₦80k package (clarify it is a different path, not a discount).

### Form
* **Purpose:** Capture qualified leads and route them to WhatsApp.
* **Fields:** Business name, business type, reason for wanting a website, WhatsApp number, email (optional).
* **Validation:** Required fields marked, WhatsApp number format validated, inline error messages under each field.
* **Submission:** On submit, generate the WhatsApp redirect with a prefilled message (see Form Behaviour section).
* **Loading state:** Simple spinner or disabled button with "Submitting..." label.
* **Success state:** Confirmation message: "You're on the list. Expect a message or call from us to get started." Then redirect to WhatsApp.

### Footer
* **Content:** Contact info (Email, WhatsApp number), privacy policy and terms links, copyright line.
* **Layout:** Simple, minimal.

## 6. Components
Reusable components to keep the build consistent:
* Primary Button (used for main CTAs)
* Secondary Button (used for the DIY course path)
* Pricing Card
* Feature Card (used in Package section)
* Testimonial Card
* FAQ Accordion Item
* Input Field (text, number, select)
* Section Header (eyebrow text + heading + optional subheading, reused across all sections)
* Badge (used for "First 10 this week" type callouts)
* Trust Card (used if adding secondary proof points like "no hidden fees" or "real business owners")

## 7. Form Behaviour
* **Fields:**
  * Business Name (required, text)
  * Business Type (required, select or text, e.g. fashion, restaurant, salon, consulting)
  * Reason for Website (required, short text, this is the qualifying question, e.g. "Why do you need a website?")
  * WhatsApp Number (required, validated format)
  * Email (optional)
* **Validation:** All required fields must be filled before submission is allowed. WhatsApp number validated for a plausible Nigerian phone format. Inline errors, not a blocking popup.
* **Submission:** On successful validation, the form submits to the connected backend/storage (see integrations.md for the exact service), then triggers the success state.
* **Redirect:** After success message displays briefly, redirect the visitor to WhatsApp using a wa.me link with a prefilled message that includes their business name and business type, so the conversation starts warm instead of blank. Example prefilled message:
  > "Hi, I just submitted the form for the ₦80k website offer. My business is [Business Name], a [Business Type]."
* **Success handling:** Show "You're on the list. Expect a message or call from us to get started." before redirecting.
* **Error handling:** If submission fails (network error, backend error), show a clear message asking them to try again or reach out directly via WhatsApp as a fallback, with the WhatsApp link visible.

## 8. Responsive Requirements
* **Desktop:** Full width sections, side by side layouts where noted (Two Paths, Process steps).
* **Tablet:** Two Paths and Process may stack to 2 columns or remain side by side depending on available width, test at common tablet breakpoints.
* **Mobile:** Everything stacks to a single column. Sticky CTA consideration for mobile (see Navigation).
* **Spacing:** Generous whitespace on desktop, reduced but still comfortable padding on mobile, never cramped.
* **Typography scaling:** Headline sizes should scale down proportionally on mobile, body text should remain easily readable (minimum 16px equivalent on mobile).
* **Button sizes:** Large, easy to tap targets on mobile (minimum 44px height).
* **Image behavior:** Images should not overflow or distort on smaller screens, use responsive image sizing.

## 9. Performance Requirements
* Fast initial load, especially on mobile data connections.
* Optimized images (compressed, correctly sized, modern formats where possible).
* Lazy loading for below the fold images.
* Accessible markup (proper labels on form fields, sufficient color contrast, alt text on all images).
* SEO friendly semantic HTML structure.

## 10. SEO Requirements
See SEO.md for full detail. This PRD confirms the page must include: meta title, meta description, schema markup where relevant, Open Graph tags, Twitter Card tags, descriptive alt text on all images, and a canonical URL.

## 11. Integrations
See integrations.md for full technical detail. This page requires:
* WhatsApp (form redirect)
* Meta Pixel
* TikTok Pixel
* Google Analytics
* Google Search Console
* Google Business (referenced as part of the package, not a page integration)

## 12. Design Requirements
Premium, minimal, modern. Large whitespace. Rounded cards. Soft shadows. High contrast CTA buttons that stand out clearly from the rest of the page. Consistent spacing rhythm across all sections. Full detail in design-system.md.

## 13. Technical Requirements
* Semantic HTML throughout.
* Fully responsive layout, mobile first build order.
* Accessible forms (labels, focus states, error announcements).
* Optimized images.
* Clean, reusable component structure so sections can be reordered or reused for future landing pages under the same brand.

## 14. Acceptance Criteria
The landing page is considered complete when:
* All sections match the approved content in content.md.
* The page is fully responsive across desktop, tablet, and mobile.
* Every CTA functions correctly and scrolls or links to the correct destination.
* The form redirects to WhatsApp with the correct prefilled message.
* The DIY course CTA links to the correct checkout.
* Performance and SEO requirements are met.
* All images are optimized and have alt text.
* The page has been tested across modern browsers and mobile devices.
* No fake scarcity or fake selection language appears anywhere on the page.
* No payment button appears anywhere near the ₦80,000 package.

## 15. Implementation Notes for Antigravity
* Do not invent additional sections unless they clearly improve conversion, and flag any addition rather than adding it silently.
* Prioritize clarity over visual complexity.
* Reuse components across sections rather than creating one off variations.
* Maintain a consistent visual hierarchy, one clear primary action per section.
* Build and check mobile layout before desktop.
* Keep animations subtle and purposeful, never decorative for its own sake.
* Preserve a premium feel while keeping the interface approachable, this is for business owners, not developers.
* Never generate marketing copy independently, always use content.md as the source of truth for text.
* Never introduce scarcity or urgency language beyond what is specified in context.md and content.md.
