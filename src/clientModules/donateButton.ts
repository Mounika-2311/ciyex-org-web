/**
 * Client module to wire up the Zeffy donate modal popup
 * on the navbar donate button, and inject a colorful thermometer nearby.
 */
if (typeof window !== 'undefined') {
  const ZEFFY_FORM_URL = 'https://www.zeffy.com/embed/donation-form/ciyex-ehr?modal=true';

  const openDonatePopup = () => {
    // Check if Zeffy's script handles it via attribute
    const existing = document.querySelector('[zeffy-form-link]');
    if (existing) {
      (existing as HTMLElement).click();
      return;
    }
    // Fallback: open in new tab
    window.open(ZEFFY_FORM_URL, '_blank');
  };

  const injectThermometer = () => {
    const btn = document.querySelector('.navbar-donate-btn');
    if (!btn || document.querySelector('.ciyex-navbar-thermo')) return;

    const thermo = document.createElement('div');
    thermo.className = 'ciyex-navbar-thermo';
    thermo.style.cssText = 'display:inline-flex;align-items:center;gap:6px;cursor:pointer;padding:4px 12px;border-radius:980px;background:linear-gradient(135deg,rgba(6,182,212,0.15),rgba(16,185,129,0.15));border:1px solid rgba(6,182,212,0.25);transition:all 0.2s;margin-right:8px;';

    const barOuter = document.createElement('div');
    barOuter.style.cssText = 'width:60px;height:6px;border-radius:3px;background:rgba(255,255,255,0.15);overflow:hidden;';
    const barInner = document.createElement('div');
    barInner.style.cssText = 'width:1%;height:100%;border-radius:3px;background:linear-gradient(90deg,#06b6d4,#10b981);transition:width 0.5s;';
    barOuter.appendChild(barInner);

    const label = document.createElement('span');
    label.style.cssText = 'font-size:10px;font-weight:600;color:#2dd4bf;white-space:nowrap;';
    label.textContent = '$0 / $200K';

    thermo.appendChild(barOuter);
    thermo.appendChild(label);

    thermo.addEventListener('mouseenter', () => {
      thermo.style.background = 'linear-gradient(135deg,rgba(6,182,212,0.25),rgba(16,185,129,0.25))';
      thermo.style.borderColor = 'rgba(6,182,212,0.4)';
    });
    thermo.addEventListener('mouseleave', () => {
      thermo.style.background = 'linear-gradient(135deg,rgba(6,182,212,0.15),rgba(16,185,129,0.15))';
      thermo.style.borderColor = 'rgba(6,182,212,0.25)';
    });
    thermo.addEventListener('click', (e) => {
      e.preventDefault();
      openDonatePopup();
    });

    // Insert before the donate button
    btn.parentElement?.insertBefore(thermo, btn);
  };

  const wireUpDonateButton = () => {
    const btn = document.querySelector('.navbar-donate-btn');
    if (btn) {
      btn.setAttribute('zeffy-form-link', ZEFFY_FORM_URL);
      btn.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }
    injectThermometer();
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
    // Re-inject thermometer if navbar re-rendered
    if (btn && !document.querySelector('.ciyex-navbar-thermo')) {
      injectThermometer();
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

export {};
