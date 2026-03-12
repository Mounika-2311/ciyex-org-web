/**
 * Client module to wire up the Zeffy donate modal popup
 * on the navbar donate button.
 */
if (typeof window !== 'undefined') {
  const wireUpDonateButton = () => {
    const btn = document.querySelector('.navbar-donate-btn');
    if (btn) {
      btn.setAttribute('zeffy-form-link', 'https://www.zeffy.com/embed/donation-form/ciyex-ehr?modal=true');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }
  };

  // Run on initial load and on route changes
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireUpDonateButton);
  } else {
    wireUpDonateButton();
  }

  // MutationObserver to catch navbar re-renders (SPA navigation)
  const observer = new MutationObserver(() => {
    const btn = document.querySelector('.navbar-donate-btn');
    if (btn && !btn.hasAttribute('zeffy-form-link')) {
      wireUpDonateButton();
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

export {};
