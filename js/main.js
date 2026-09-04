/**
 * LEADING VUE, LLC - CLIENT INTERACTIVITY
 * Modern, responsive interactions, tabs, accordion, form handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initServiceTabs();
  initServiceInquiryTriggers();
  initFaqAccordion();
  initContactForm();
  initScrollSpy();
});

/* --------------------------------------------------------------------------
   1. Header Scroll Elevation
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-overlay');
  const drawerLinks = document.querySelectorAll('.mobile-nav-links a');

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   3. Service Tabs (All / Professional / Property)
   -------------------------------------------------------------------------- */
function initServiceTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.services-panel');

  if (!tabBtns.length || !tabPanels.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Service Card Inquiry Auto-fill & Scroll
   -------------------------------------------------------------------------- */
function initServiceInquiryTriggers() {
  const triggers = document.querySelectorAll('[data-service-inquiry]');
  const serviceSelect = document.getElementById('service-select');
  const contactSection = document.getElementById('contact');

  if (!triggers.length || !serviceSelect) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceValue = trigger.getAttribute('data-service-inquiry');

      // Set dropdown option
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].value === serviceValue) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }

      // Smooth scroll to contact
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Briefly highlight form card
      const formCard = document.querySelector('.contact-form-card');
      if (formCard) {
        formCard.style.outline = '2px solid var(--color-primary)';
        formCard.style.transition = 'outline 0.3s ease';
        setTimeout(() => {
          formCard.style.outline = 'none';
        }, 1200);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Interactive FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Contact Form Validation & Email Dispatch
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email-address');
    const phoneInput = document.getElementById('phone-number');
    const serviceSelect = document.getElementById('service-select');
    const messageInput = document.getElementById('message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const service = serviceSelect ? serviceSelect.value : '';
    const message = messageInput ? messageInput.value.trim() : '';

    // Validation
    if (!name || !email || !service || !message) {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Please fill out all required fields (Name, Email, Service of Interest, and Message).';
      feedback.style.display = 'block';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Please enter a valid email address.';
      feedback.style.display = 'block';
      return;
    }

    // Prepare email parameters
    const recipient = 'sales@leadingvue.com';
    const emailSubject = encodeURIComponent(`[Leading Vue Website Inquiry] - ${service} from ${name}`);
    const emailBody = encodeURIComponent(
      `Full Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || 'Not provided'}\n` +
      `Service Requested: ${service}\n\n` +
      `Inquiry Message:\n${message}\n\n` +
      `Sent via Leading Vue Website (leadingvue.com)`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    // Display confirmation and trigger mail client
    feedback.className = 'form-feedback success';
    feedback.innerHTML = `
      <strong>Thank you, ${escapeHtml(name)}!</strong><br>
      Your inquiry for <em>${escapeHtml(service)}</em> has been recorded.<br>
      <div style="margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap;">
        <a href="${mailtoUrl}" class="btn btn-sm btn-primary" style="font-size: 0.82rem; padding: 6px 14px;">
          Send Directly via Email Client
        </a>
        <button type="button" id="copy-inquiry-btn" class="btn btn-sm btn-secondary" style="font-size: 0.82rem; padding: 6px 14px;">
          Copy Inquiry Text
        </button>
      </div>
    `;
    feedback.style.display = 'block';

    const copyBtn = document.getElementById('copy-inquiry-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const plainText = `From: ${name} (${email}, Phone: ${phone || 'N/A'})\nService: ${service}\nMessage: ${message}`;
        navigator.clipboard.writeText(plainText).then(() => {
          copyBtn.textContent = 'Copied to Clipboard!';
          setTimeout(() => {
            copyBtn.textContent = 'Copy Inquiry Text';
          }, 2500);
        });
      });
    }

    // Optionally launch email client
    window.location.href = mailtoUrl;

    // Reset form inputs after brief delay
    form.reset();
  });
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.innerText = string;
  return div.innerHTML;
}

/* --------------------------------------------------------------------------
   7. ScrollSpy Navigation Highlighting
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0.1
  });

  sections.forEach(section => observer.observe(section));
}
