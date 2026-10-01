export const NAV_TRAIL_KEY = 'syntrad:nav:trail';

export function resetNavTrail() {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(NAV_TRAIL_KEY);
  } catch {

  }
}

export function readNavTrail() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = sessionStorage.getItem(NAV_TRAIL_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function writeNavTrail(trail) {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(NAV_TRAIL_KEY, JSON.stringify(trail));
  } catch {

  }
}