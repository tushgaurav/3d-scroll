const canvas = document.querySelector("#canvas2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);
let anim = { frame: 0 };

const context = canvas.getContext("2d");
const frameCount = 100;

const currentFrame = (index) => `./anim-images/${(index + 1).toString()}.png`;

const images = [];
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(anim, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: true,
    pin: "canvas",
    end: "500%",
  },
  onUpdate: render,
});

function render() {
  //   context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[anim.frame], 0, 0);
}
