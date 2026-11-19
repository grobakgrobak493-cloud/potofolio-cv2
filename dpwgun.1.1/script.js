/**
 * PALEMBANG BUMI SRIWIJAYA - INTERACTIVE SCRIPT
 * Dibuat oleh Muhamad Guntur Ramadhan | Universitas Muhammadiyah Bengkulu
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    });

    // Close mobile menu on clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (mobileToggle) mobileToggle.innerHTML = '&#9776;';
      });
    });
  }

  // 2. Filter Tabs Functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterCards = document.querySelectorAll('.filterable-card');

  if (filterBtns.length > 0 && filterCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        filterCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
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

  // 3. Modal / Lightbox for Cards & Images
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');

  function openModal(imgSrc, title, desc) {
    if (!modal) return;
    if (modalImg) modalImg.src = imgSrc;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Attach modal trigger to buttons or clickable images
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.card') || btn.closest('.highlight-banner');
      if (card) {
        const img = card.querySelector('img');
        const title = card.querySelector('.card-title, .highlight-title')?.textContent || 'Wisata Palembang';
        const desc = card.querySelector('.card-text, .highlight-desc')?.textContent || '';
        if (img) openModal(img.src, title, desc);
      }
    });
  });

  // 4. Scroll To Top Button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. Toast Notification System
  function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>✨</span> <div>${message}</div>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // 6. Guestbook / Contact Form Interactivity
  const guestbookForm = document.getElementById('guestbookForm');
  const reviewList = document.getElementById('reviewList');

  if (guestbookForm) {
    guestbookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('visitorName');
      const originInput = document.getElementById('visitorOrigin');
      const spotInput = document.getElementById('favoriteSpot');
      const messageInput = document.getElementById('visitorMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const origin = originInput ? originInput.value.trim() : 'Indonesia';
      const spot = spotInput ? spotInput.value : 'Jembatan Ampera';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !message) {
        showToast('Mohon lengkapi nama dan pesan ulasan Anda.');
        return;
      }

      // Append new review card dynamically if reviewList exists
      if (reviewList) {
        const newReview = document.createElement('div');
        newReview.className = 'card';
        newReview.style.padding = '20px';
        newReview.style.marginBottom = '16px';
        newReview.style.borderLeft = '4px solid var(--gold)';
        newReview.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="color:var(--primary); font-size:1.05rem;">${escapeHTML(name)}</strong>
            <span style="font-size:0.8rem; color:var(--text-muted); background:var(--bg-alt); padding:3px 10px; border-radius:12px;">📍 ${escapeHTML(origin)}</span>
          </div>
          <div style="font-size:0.82rem; color:var(--gold-dark); font-weight:700; margin-bottom:6px;">🌟 Favorit: ${escapeHTML(spot)}</div>
          <p style="font-size:0.92rem; color:var(--text-secondary); margin:0;">"${escapeHTML(message)}"</p>
        `;
        reviewList.prepend(newReview);
      }

      showToast(`Terima kasih <strong>${escapeHTML(name)}</strong>! Ulasan Anda tentang <strong>${escapeHTML(spot)}</strong> berhasil dikirim.`);
      guestbookForm.reset();
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
});
