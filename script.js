/**
 * Linh Lê Portfolio — Interactive Scripts
 * - Canvas Fireflies & Star Dust Simulation
 * - Cat Mascot Easter Egg & Sparkle Bursts
 * - Experience Filtering
 * - Smooth Scroll & Nav Highlighting
 * - One-Click Copy to Clipboard
 */

document.addEventListener('DOMContentLoaded', () => {
  initFireflies();
  initExperienceFilter();
  initCatEasterEgg();
  initClipboardCopy();
  initScrollNav();
  initMobileMenu();
  initRevealOnScroll();
});

/* ==========================================================================
   1. Fireflies & Star Dust Canvas Simulation
   ========================================================================== */
function initFireflies() {
  const canvas = document.getElementById('fireflies-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Color palette matching the theme: soft golden stars, buttercup fireflies, soft emerald glow
  const colors = [
    'rgba(245, 203, 102, ', // Warm gold
    'rgba(255, 235, 170, ', // Pale starlight gold
    'rgba(132, 225, 144, ', // Emerald meadow glow
    'rgba(255, 255, 255, '  // Pure twinkle
  ];

  const particleCount = Math.min(65, Math.floor(window.innerWidth / 20));
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.7 + 0.2,
      alphaSpeed: (Math.random() * 0.02 + 0.008) * (Math.random() > 0.5 ? 1 : -1),
      vx: (Math.random() - 0.5) * 0.45,
      vy: -Math.random() * 0.4 - 0.15, // gently floating upwards like meadow fireflies
      angle: Math.random() * Math.PI * 2,
      angleSpeed: Math.random() * 0.02 - 0.01
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let p of particles) {
      // Bobbing motion
      p.angle += p.angleSpeed;
      p.x += p.vx + Math.sin(p.angle) * 0.35;
      p.y += p.vy;

      // Twinkle alpha
      p.alpha += p.alphaSpeed;
      if (p.alpha > 0.95 || p.alpha < 0.15) {
        p.alphaSpeed = -p.alphaSpeed;
      }

      // Mouse gentle repulsion
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        p.x -= (dx / dist) * 1.5;
        p.y -= (dy / dist) * 1.5;
      }

      // Wrap-around edges
      if (p.y < -10) p.y = height + 10;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      // Draw particle with glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.shadowBlur = p.radius * 7;
      ctx.shadowColor = '#f5cb66';
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. Cat Mascot Easter Egg & Sparkles
   ========================================================================== */
function initCatEasterEgg() {
  const catBtn = document.getElementById('cat-mascot-btn');
  const catBubble = document.getElementById('cat-bubble');
  if (!catBtn) return;

  const meowAffirmations = [
    "✨ *Purr!* Reaching for the stars with Linh!",
    "🐾 Linh grew Abroad in Vietnam to 144k+ members!",
    "🌟 158% recruitment target achieved at UpYouth!",
    "✨ 4,000+ global delegates reached for HPAIR 2026!",
    "🎓 RMIT & BUV Scholarship Recipient!",
    "💛 Keep shining bright!"
  ];

  let quoteIndex = 0;

  catBtn.addEventListener('click', (e) => {
    // Show speech bubble
    if (catBubble) {
      catBubble.textContent = meowAffirmations[quoteIndex % meowAffirmations.length];
      quoteIndex++;
      catBubble.classList.remove('opacity-0', 'scale-90');
      catBubble.classList.add('opacity-100', 'scale-100');

      setTimeout(() => {
        catBubble.classList.remove('opacity-100', 'scale-100');
        catBubble.classList.add('opacity-0', 'scale-90');
      }, 3500);
    }

    // Spawn sparkles
    const rect = catBtn.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 3;

    for (let i = 0; i < 16; i++) {
      createSparkle(originX, originY);
    }
  });
}

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle-particle';
  document.body.appendChild(sparkle);

  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * 80 + 30;
  const dx = Math.cos(angle) * distance + 'px';
  const dy = Math.sin(angle) * distance + 'px';

  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  sparkle.style.setProperty('--dx', dx);
  sparkle.style.setProperty('--dy', dy);

  // Random color variation
  const colors = ['#ffe066', '#fff2c4', '#84e190', '#ffffff'];
  sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  setTimeout(() => {
    sparkle.remove();
  }, 900);
}

/* ==========================================================================
   3. Experience Filtering
   ========================================================================== */
function initExperienceFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const expCards = document.querySelectorAll('.experience-card');

  if (!filterBtns.length || !expCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach((b) => {
        b.classList.remove('bg-amber-400', 'text-emerald-950', 'border-amber-300', 'font-bold');
        b.classList.add('bg-emerald-950/40', 'text-emerald-200/80', 'border-emerald-800/40');
      });

      btn.classList.add('bg-amber-400', 'text-emerald-950', 'border-amber-300', 'font-bold');
      btn.classList.remove('bg-emerald-950/40', 'text-emerald-200/80', 'border-emerald-800/40');

      const filter = btn.getAttribute('data-filter');

      expCards.forEach((card) => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   4. One-Click Copy Email
   ========================================================================== */
function initClipboardCopy() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast-notification');

  copyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const email = 'lephanthuylinh.forwork@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        if (toast) {
          toast.textContent = '✨ Copied email: lephanthuylinh.forwork@gmail.com';
          toast.classList.remove('translate-y-24', 'opacity-0');
          toast.classList.add('translate-y-0', 'opacity-100');

          setTimeout(() => {
            toast.classList.add('translate-y-24', 'opacity-0');
            toast.classList.remove('translate-y-0', 'opacity-100');
          }, 3000);
        }

        // Button icon checkmark feedback
        const originalText = btn.innerHTML;
        btn.innerHTML = `<svg class="w-4 h-4 text-emerald-400 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!`;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);
      });
    });
  });
}

/* ==========================================================================
   5. Scroll Navigation & Active Link Highlight
   ========================================================================== */
function initScrollNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('text-amber-300', 'font-semibold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-amber-300', 'font-semibold');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
}

/* ==========================================================================
   6. Mobile Menu Toggle
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

/* ==========================================================================
   7. Scroll Reveal Animation
   ========================================================================== */
function initRevealOnScroll() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((el) => {
    el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8');
    observer.observe(el);
  });
}
