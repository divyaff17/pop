import { useRef, useEffect, RefObject } from "react";

interface MagneticOptions {
  strength?: number;
  threshold?: number;
}

export const useMagnetic = <T extends HTMLElement = HTMLButtonElement>(
  options: MagneticOptions = {}
): RefObject<T> => {
  const { strength = 0.3, threshold = 50 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let isHovered = false;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const animate = () => {
      if (!isHovered) {
        targetX = 0;
        targetY = 0;
      }

      currentX += (targetX - currentX) * strength;
      currentY += (targetY - currentY) * strength;

      element.style.transform = `translate(${currentX}px, ${currentY}px) scale(${isHovered ? 1.05 : 1})`;

      if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01 || isHovered) {
        requestAnimationFrame(animate);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < threshold) {
        isHovered = true;
        targetX = distanceX * 0.3;
        targetY = distanceY * 0.3;
        animate();
      } else {
        isHovered = false;
      }
    };

    const handleMouseLeave = () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
      animate();
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, threshold]);

  return ref;
};

