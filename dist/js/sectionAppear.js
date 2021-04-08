const allSections = document.querySelectorAll("section");

const revealSections = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove("section--hidden");
  sectionObserver.unobserve(entry.target);
};

const obsOptions = {
  root: null,
  threshold: 0.2,
};

const sectionObserver = new IntersectionObserver(revealSections, obsOptions);

allSections.forEach((section) => {
  sectionObserver.observe(section);
  if (!section.id) {
    return;
  }
  section.classList.add("section--hidden");
});
