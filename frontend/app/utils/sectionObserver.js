import { onMounted, onUnmounted } from 'vue';

export const observeSection = (sectionRef) => {
  let observer;

  onMounted(() => {
    if (window.innerWidth < 1000) {
      if (sectionRef?.value) {
        sectionRef.value.style.opacity = 1;
        sectionRef.value.style.transform = 'none';
      }
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.target) return;

          if (entry.intersectionRatio > 0.3) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0) scale(1)';
          } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateY(20px) scale(0.95)';
          }
        });
      },
      { threshold: [0.3, 0.6, 1] }
    );

    if (sectionRef?.value) observer.observe(sectionRef.value);
  });

  onUnmounted(() => {
    if (observer && sectionRef?.value) {
      observer.unobserve(sectionRef.value);
      observer.disconnect();
    }
  });
};
