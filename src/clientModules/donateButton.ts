/**
 * Client module to inject a colorful thermometer near the navbar donate button.
 * Both the donate button and thermometer link to /donate page.
 */
if (typeof window !== 'undefined') {
  const injectThermometer = () => {
    const btn = document.querySelector('.navbar-donate-btn') as HTMLAnchorElement | null;
    if (!btn) return;

    // Ensure donate button links to /donate page
    if (btn.getAttribute('href') !== '/donate') {
      btn.setAttribute('href', '/donate');
    }

    if (document.querySelector('.ciyex-navbar-thermo')) return;

    const thermo = document.createElement('a');
    thermo.className = 'ciyex-navbar-thermo';
    thermo.href = '/donate';
    thermo.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:980px;background:linear-gradient(135deg,rgba(6,182,212,0.15),rgba(16,185,129,0.15));border:1px solid rgba(6,182,212,0.25);transition:all 0.2s;margin-right:8px;text-decoration:none;';

    const barOuter = document.createElement('div');
    barOuter.style.cssText = 'width:60px;height:6px;border-radius:3px;background:rgba(255,255,255,0.15);overflow:hidden;';
    const barInner = document.createElement('div');
    barInner.style.cssText = 'width:1%;height:100%;border-radius:3px;background:linear-gradient(90deg,#06b6d4,#10b981);transition:width 0.5s;min-width:2px;';
    barOuter.appendChild(barInner);

    const label = document.createElement('span');
    label.style.cssText = 'font-size:10px;font-weight:600;color:#2dd4bf;white-space:nowrap;';
    label.textContent = '$1 / $200K';

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

    btn.parentElement?.insertBefore(thermo, btn);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectThermometer);
  } else {
    injectThermometer();
  }

  const observer = new MutationObserver(() => {
    const btn = document.querySelector('.navbar-donate-btn');
    if (btn && !document.querySelector('.ciyex-navbar-thermo')) {
      injectThermometer();
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

export {};
