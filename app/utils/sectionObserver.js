import { onMounted } from 'vue';

export const observeSection = (sectionRef) => {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;

          console.log(ratio);

          if (entry.target) {
            entry.target.style.opacity = ratio;
            entry.target.style.transform = `scale(${0.85 + ratio * 0.15})`;
          }
        });
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) }
    );

    if (sectionRef?.value) {
      observer.observe(sectionRef.value);
    }
  });
};
