type SmoothScrollOptions = {
  duration?: number;
  offset?: number;
};

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const smoothScrollToId = (id: string, options: SmoothScrollOptions = {}) => {
  if (typeof window === "undefined") {
    return;
  }

  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const { duration = 650, offset = 0 } = options;
  const startY = window.scrollY;
  const targetY = Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset);

  if (prefersReducedMotion) {
    window.scrollTo(0, targetY);
    return;
  }

  const startTime = window.performance.now();

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);
    const currentY = startY + (targetY - startY) * easedProgress;

    window.scrollTo(0, currentY);

    if (elapsed < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};
