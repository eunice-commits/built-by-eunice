document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFAQAccordion();
  initContactForm();
  initSmoothScroll();
  initMetaPixelTracking();
  
  // Initialize projects carousel
  initCarouselController(
    '.projects-carousel-wrapper', 
    '.projects-grid', 
    '.project-card', 
    '.projects-carousel-btn.prev', 
    '.projects-carousel-btn.next', 
    4000
  );
  
  // Initialize testimonials carousel
  initCarouselController(
    '.testimonials-carousel-wrapper', 
    '.testimonials-grid', 
    '.testimonial-card', 
    '.testimonials-carousel-btn.prev', 
    '.testimonials-carousel-btn.next', 
    4500
  );
});

/* --- MOBILE NAVIGATION --- */
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (!hamburger || !navLinks) return;
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

/* --- FAQ ACCORDION --- */
function initFAQAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all open items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // If the clicked item was not active, open it
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });
}

/* --- CONTACT FORM VALIDATION & SUBMISSION --- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successState = document.getElementById('formSuccess');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Honeypot spam blocker check
    const honeypot = document.getElementById('honeypot');
    if (honeypot && honeypot.value) {
      console.warn('[SECURITY] Bot submission blocked via honeypot.');
      return;
    }
    
    // Reset errors
    let isValid = true;
    const errors = form.querySelectorAll('.error-message');
    const controls = form.querySelectorAll('.form-control');
    
    errors.forEach(err => err.classList.remove('visible'));
    controls.forEach(control => control.classList.remove('error'));
    
    // Get fields
    const businessName = document.getElementById('businessName');
    const businessType = document.getElementById('businessType');
    const websiteReason = document.getElementById('websiteReason');
    const whatsappNumber = document.getElementById('whatsappNumber');
    const emailAddress = document.getElementById('emailAddress');
    
    // Validate Business Name
    if (!businessName.value.trim()) {
      showError(businessName, 'Business name is required.');
      isValid = false;
    }
    
    // Validate Business Type
    if (!businessType.value.trim()) {
      showError(businessType, 'Please tell us what your business does.');
      isValid = false;
    }
    
    // Validate Website Reason
    if (!websiteReason.value.trim()) {
      showError(websiteReason, 'Please tell us why you want a website.');
      isValid = false;
    }
    
    // Validate WhatsApp Number
    const cleanWhatsapp = whatsappNumber.value.trim().replace(/[\s\-\(\)]/g, '');
    const nigerianPhoneRegex = /^(?:\+?234|0)[789]\d{9}$/;
    
    if (!cleanWhatsapp) {
      showError(whatsappNumber, 'WhatsApp number is required.');
      isValid = false;
    } else if (!nigerianPhoneRegex.test(cleanWhatsapp)) {
      showError(whatsappNumber, 'Please enter a valid Nigerian WhatsApp number (e.g. 08031234567).');
      isValid = false;
    }
    
    // Validate Email Address (Optional)
    if (emailAddress.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailAddress.value.trim())) {
        showError(emailAddress, 'Please enter a valid email address.');
        isValid = false;
      }
    }
    
    if (!isValid) return;
    
    // Form is valid! Build prefilled WhatsApp message
    const formattedPhone = cleanWhatsapp.startsWith('0') ? '234' + cleanWhatsapp.substring(1) : cleanWhatsapp.replace('+', '');
    const recipientNumber = '2347077708664'; 
    
    let message = `Hello, my name is ${businessName.value.trim()}.\n`;
    message += `I own a business that offers ${businessType.value.trim()}.\n`;
    message += `I would like to claim the ₦80,000 Business Launch Package.\n\n`;
    message += `Reason for getting a website:\n${websiteReason.value.trim()}\n\n`;
    
    if (emailAddress.value.trim()) {
      message += `My email address is ${emailAddress.value.trim()}.\n\n`;
    }
    
    message += `I just completed the form on your website.`;
    
    const whatsappUrl = `https://wa.me/${recipientNumber}?text=${encodeURIComponent(message)}`;
    
    // Hide form, show success state
    form.style.display = 'none';
    successState.style.display = 'block';
    
    // Redirect to WhatsApp after 1 second (reliable across all browser popup blockers)
    setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1000);
  });
}

function showError(inputElement, errorMessageText) {
  inputElement.classList.add('error');
  const errorMsgDiv = inputElement.parentElement.querySelector('.error-message');
  if (errorMsgDiv) {
    errorMsgDiv.textContent = errorMessageText;
    errorMsgDiv.classList.add('visible');
  }
}

/* --- SMOOTH SCROLL FOR CTAS --- */
function initSmoothScroll() {
  const ctaButtons = document.querySelectorAll('a[href^="#"]');
  
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = btn.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetPosition = targetElement.offsetTop - 80;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* --- GENERIC CAROUSEL CONTROLLER --- */
function initCarouselController(wrapperSelector, gridSelector, cardSelector, prevBtnSelector, nextBtnSelector, intervalMs) {
  console.log('[CAROUSEL] Initializing for:', wrapperSelector);
  const wrapper = document.querySelector(wrapperSelector);
  if (!wrapper) {
    console.error('[CAROUSEL] Wrapper not found:', wrapperSelector);
    return;
  }
  
  const prevBtn = wrapper.querySelector(prevBtnSelector);
  const nextBtn = wrapper.querySelector(nextBtnSelector);
  const grid = wrapper.querySelector(gridSelector);
  
  if (!prevBtn || !nextBtn || !grid) {
    console.error('[CAROUSEL] Grid or button elements missing in:', wrapperSelector, { prevBtn, nextBtn, grid });
    return;
  }
  
  let cards = Array.from(grid.querySelectorAll(cardSelector));
  let currentIndex = 0;
  let autoplayInterval = null;
  let scrollTimeout = null;
  let isUserInteracting = false;
  
  console.log('[CAROUSEL] Cards found:', cards.length, 'for selector:', cardSelector);
  
  function scrollToCard(index) {
    if (index < 0) {
      index = cards.length - 1;
    } else if (index >= cards.length) {
      index = 0;
    }
    currentIndex = index;
    const card = cards[currentIndex];
    console.log('[CAROUSEL] Scrolling to card index:', currentIndex, 'wrapper:', wrapperSelector);
    if (card) {
      // Temporarily disable scroll-snap to allow smooth script scrolling
      const originalSnap = grid.style.scrollSnapType || 'x mandatory';
      const originalSnapWebkit = grid.style.webkitScrollSnapType || 'x mandatory';
      grid.style.scrollSnapType = 'none';
      grid.style.webkitScrollSnapType = 'none';
      
      const targetLeft = card.offsetLeft - (grid.clientWidth - card.offsetWidth) / 2;
      console.log('[CAROUSEL] offsetLeft:', card.offsetLeft, 'grid.clientWidth:', grid.clientWidth, 'card.offsetWidth:', card.offsetWidth, 'targetLeft:', targetLeft);
      grid.scrollTo({
        left: targetLeft,
        behavior: 'smooth'
      });
      
      // Re-enable scroll-snap after animation finishes
      setTimeout(() => {
        grid.style.scrollSnapType = originalSnap;
        grid.style.webkitScrollSnapType = originalSnapWebkit;
        console.log('[CAROUSEL] Programmatic scroll complete, snap re-enabled for:', wrapperSelector);
      }, 500);
    }
  }
  
  nextBtn.addEventListener('click', () => {
    console.log('[CAROUSEL] Manual Next clicked for:', wrapperSelector);
    stopAutoPlay(); // Permanently stop autoplay on explicit control clicks
    scrollToCard(currentIndex + 1);
  });
  
  prevBtn.addEventListener('click', () => {
    console.log('[CAROUSEL] Manual Prev clicked for:', wrapperSelector);
    stopAutoPlay(); // Permanently stop autoplay on explicit control clicks
    scrollToCard(currentIndex - 1);
  });
  
  // Detect manual interaction
  function onInteractionStart() {
    console.log('[CAROUSEL] User interaction started for:', wrapperSelector);
    isUserInteracting = true;
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
    clearTimeout(scrollTimeout);
  }
  
  function onInteractionEnd() {
    if (!isUserInteracting) return;
    isUserInteracting = false;
    console.log('[CAROUSEL] User interaction ended for:', wrapperSelector);
    
    // Wait for momentum scrolling to settle before calculating index
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      updateIndexFromScroll();
      startAutoPlay(); // Resume autoplay after 3 seconds of inactivity
    }, 1000);
  }
  
  function updateIndexFromScroll() {
    const gridCenter = grid.scrollLeft + grid.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;
    
    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - gridCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    console.log('[CAROUSEL] Index updated from scroll:', closestIndex, 'for:', wrapperSelector);
    currentIndex = closestIndex;
  }
  
  // Track scroll event to update index dynamically *only* when user is actively swiping
  grid.addEventListener('scroll', () => {
    if (isUserInteracting) {
      updateIndexFromScroll();
    }
  }, { passive: true });
  
  // Touch and mouse listeners to detect drag and swipe
  grid.addEventListener('touchstart', onInteractionStart, { passive: true });
  grid.addEventListener('touchend', onInteractionEnd, { passive: true });
  grid.addEventListener('touchcancel', onInteractionEnd, { passive: true });
  grid.addEventListener('mousedown', onInteractionStart);
  grid.addEventListener('mouseup', onInteractionEnd);
  grid.addEventListener('mouseleave', onInteractionEnd);
  
  function startAutoPlay() {
    console.log('[CAROUSEL] startAutoPlay check for:', wrapperSelector, 'scrollWidth:', grid.scrollWidth, 'clientWidth:', grid.clientWidth);
    if (autoplayInterval) return;
    
    autoplayInterval = setInterval(() => {
      if (grid.scrollWidth > grid.clientWidth) {
        console.log('[CAROUSEL] Autoplay ticking for:', wrapperSelector);
        scrollToCard(currentIndex + 1);
      } else {
        console.log('[CAROUSEL] Autoplay tick ignored (no overflow) for:', wrapperSelector);
      }
    }, intervalMs);
  }
  
  function stopAutoPlay() {
    console.log('[CAROUSEL] stopAutoPlay (permanent) called for:', wrapperSelector);
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
    clearTimeout(scrollTimeout);
  }
  
  startAutoPlay();
}

/* --- EXPANDABLE READ MORE TRIGGER --- */
window.toggleReadMore = function(btn) {
  const parent = btn.parentElement;
  const dots = parent.querySelector('.dots');
  const moreText = parent.querySelector('.more-text');
  
  if (!dots || !moreText) return;
  
  if (moreText.style.display === 'none' || moreText.style.display === '') {
    moreText.style.display = 'inline';
    dots.style.display = 'none';
    btn.textContent = 'Read Less';
  } else {
    moreText.style.display = 'none';
    dots.style.display = 'inline';
    btn.textContent = 'Read More';
  }
};

/* --- META PIXEL LEAD TRACKING --- */
function initMetaPixelTracking() {
  const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
  whatsappLinks.forEach(link => {
    if (link.dataset.metaTracked === 'true') return;
    link.dataset.metaTracked = 'true';
    
    link.addEventListener('click', () => {
      if (typeof window.fbq !== 'undefined') {
        window.fbq('track', 'Lead');
      }
    });
  });
}

