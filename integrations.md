# Integrations — Built by Eunice

## Purpose
This document defines every external service, tracking tool, and system that must be connected to the Built by Eunice landing page.
The objective is to ensure a smooth user experience, accurate lead tracking, reliable communication, and measurable marketing performance.

## Contact Form Integration
**Purpose:** Capture qualified leads and initiate the sales conversation.

### Fields:
* Business Name (required)
* What does your business do? (required)
* Why do you want a website? (required)
* WhatsApp Number (required)
* Email Address (optional)

### Form Requirements:
* All required fields must be completed before submission
* Validate inputs before submission
* Prevent duplicate submissions while the request is processing
* Display clear validation messages
* Retain user input if validation fails

### Form Submission Flow
When a visitor submits the form:
1. Validate all required fields
2. Save the lead securely
3. Trigger analytics events
4. Redirect the visitor to WhatsApp with a prefilled message
5. Display a success message before redirecting

## WhatsApp Integration
**Purpose:** Move every qualified lead into a direct conversation.
After a successful form submission, automatically open WhatsApp using a prefilled message.

### Example message:
```text
Hello, my name is {{Business Name}}.
I own a business that offers {{Business Type}}.
I would like to claim the ₦80,000 Business Launch Package.

Reason for getting a website:
{{Reason}}

I just completed the form on your website.
```

* Since Email is optional, the message template should only include an email line when a value was actually provided (for example, an added line `"My email address is {{Email}}."` that's simply omitted from the message if the field was left blank).
* On mobile devices, open the WhatsApp application where available.
* On desktop, open WhatsApp Web in a new tab.
* If WhatsApp cannot be opened, display the WhatsApp number with instructions to send the same message manually.

## Email Notifications
Whenever a form is submitted, send an email notification to the Built by Eunice team containing:
* Business Name
* Business Type
* Reason for the website
* WhatsApp Number
* Email Address (if provided)
* Submission date and time

*Optional: send an automatic confirmation email to the client thanking them for their enquiry and letting them know they will be contacted shortly.*

## Google Analytics 4
Install Google Analytics 4.
Track:
* Page views
* Scroll depth
* CTA button clicks
* Contact form submissions
* WhatsApp redirects
* Outbound link clicks
* Average engagement time
* Conversion rate

## Google Tag Manager
* Install Google Tag Manager to manage tracking scripts without modifying the website code.
* All future marketing and analytics scripts should be deployed through Google Tag Manager whenever possible.

## Meta Pixel
Install the Meta Pixel.
Track the following standard events:
* PageView
* ViewContent
* Lead
* Contact
* Button Click

*These events will support Facebook and Instagram advertising campaigns and conversion reporting.*

## TikTok Pixel
Install the TikTok Pixel.
Track:
* Page View
* View Content
* Button Click
* Lead
* Complete Registration (if applicable)

*This enables campaign optimization and retargeting for TikTok Ads.*

## Google Search Console
* Verify the domain.
* Submit the XML sitemap.
* Request indexing for the landing page.
* Monitor:
  * Indexing status
  * Search queries
  * Click through rate
  * Average position
  * Coverage issues

## Google Business Profile
* Although this is not a technical integration with the landing page, every client purchasing the Business Launch Package should have a Google Business Profile created or optimized where eligible.
* The landing page should mention this service as part of the package.

## Payment Gateway
* The landing page itself does not process payments.
* Payments are handled after the consultation, on WhatsApp.
* Client websites may integrate:
  * Flutterwave
  * Paystack
* The payment gateway should support online payments, payment confirmation, secure transactions, and mobile friendly checkout.
* Only integrate payment processing for clients whose businesses require online payments.

## Security
The website must:
* Use HTTPS
* Validate all user input
* Protect against spam submissions
* Prevent malicious form entries
* Avoid exposing sensitive information in URLs
* Store submitted data securely

### Spam Protection
Implement spam protection using one or more of the following:
* Invisible CAPTCHA
* Honeypot fields
* Rate limiting
* Server side validation

*Spam protection should not create unnecessary friction for genuine visitors.*

## Performance Monitoring
Monitor:
* Page speed
* Core Web Vitals
* Broken links
* JavaScript errors
* Form submission failures

*Regularly review performance after deployment.*

## Error Handling
If form submission fails:
* Explain the problem clearly
* Allow the visitor to retry
* Do not erase completed fields

If WhatsApp fails to open:
* Display the WhatsApp number
* Provide a button to copy the prefilled message

If an integration is temporarily unavailable:
* Inform the visitor politely
* Offer an alternative way to get in touch

## Success Experience
After successful submission, display:
> "You're on the list. Expect a message or call from us shortly so we can get started."

Immediately after displaying the confirmation, redirect the visitor to WhatsApp.

## Future Integrations
The system should be flexible enough to support future additions such as:
* CRM integration
* Email marketing platform
* Newsletter signup
* Live chat
* Appointment booking
* Customer portal
* Analytics dashboards
* Client project tracker

*These integrations should be easy to add without redesigning the landing page.*

## Integration Principles
* Every integration should support one of three objectives:
  * Improve the visitor experience
  * Improve lead tracking
  * Improve business operations
* Avoid unnecessary tools or scripts that increase page load time without providing measurable value.
