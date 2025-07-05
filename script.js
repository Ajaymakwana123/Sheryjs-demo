Shery.mouseFollower();
Shery.makeMagnet("#right");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 5,
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

const words = document.querySelectorAll("#main-heading .word");
words.forEach((word, i) => {
  word.style.animationDelay = `${i * 0.6}s`;
});

const headings = document.querySelectorAll(".heading-word");
headings.forEach((heading, i) => {
  const text = heading.textContent;
  const type = heading.dataset.type;
  heading.innerHTML = "";

  [...text].forEach((char, j) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${words.length * 0.6 + j * 0.1}s`; // after words finish
    span.classList.add(type);
    heading.appendChild(span);
  });
});
