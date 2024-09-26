const images = [
  {
    image_id: 1,
    image:
      "https://imgs.search.brave.com/b4L-T-JSfARAz1h7z8twjhplmmBHbkZzErgc0ZNu9Sc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUwLzA3LzU1/LzM2MF9GXzc1MDA3/NTU2M19IeHNPc0Qx/R25CRmdKV05GTkxD/dm1XQXZBT2FhSzho/Zi5qcGc",
  },
  {
    image_id: 1,
    image:
      "https://imgs.search.brave.com/b4L-T-JSfARAz1h7z8twjhplmmBHbkZzErgc0ZNu9Sc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzUwLzA3LzU1/LzM2MF9GXzc1MDA3/NTU2M19IeHNPc0Qx/R25CRmdKV05GTkxD/dm1XQXZBT2FhSzho/Zi5qcGc",
  },
  {
    image_id: 2,
    image:
      "https://imgs.search.brave.com/9crHZQvkWFjVOl4HMI_1nfFFUI-hl5KYK51ST81O_Fw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0pvYnND/YXJlZXJzLTkwMTU2/ODY2MC5qcGc",
  },
  {
    image_id: 2,
    image:
      "https://imgs.search.brave.com/9crHZQvkWFjVOl4HMI_1nfFFUI-hl5KYK51ST81O_Fw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0pvYnND/YXJlZXJzLTkwMTU2/ODY2MC5qcGc",
  },

  {
    image_id: 3,
    image:
      "https://imgs.search.brave.com/9sGkGWy51cRxt8oI3qD2Jg57Jj-hSiR1Dojdkwv0MUs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvM0JiT29j/WXl5WVBxUHhFdm41/SE5EQS85ZTAyNjI0/Y2FjOWFhZDU1NGUw/Y2Q5NWMzYjVjMzFj/My9Hb2xkZW4tSG91/ci1UaHVtYm5haWwu/anBn",
  },
  {
    image_id: 3,
    image:
      "https://imgs.search.brave.com/9sGkGWy51cRxt8oI3qD2Jg57Jj-hSiR1Dojdkwv0MUs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvM0JiT29j/WXl5WVBxUHhFdm41/SE5EQS85ZTAyNjI0/Y2FjOWFhZDU1NGUw/Y2Q5NWMzYjVjMzFj/My9Hb2xkZW4tSG91/ci1UaHVtYm5haWwu/anBn",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  const container = document.createElement("div");
  container.id = "image-container";
  images.forEach((ele) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = ele.image;
    img.style.display = "none";
 
  const message = document.createElement("p");
  message.textContent = "Pick this card";

  div.appendChild(img);
  div.appendChild(message);
  container.appendChild(div);

     div.addEventListener("click", function () {
      div.classList.add("flipped");
      img.style.display = "block";
      message.style.display = "none";
      setTimeout(()=>{ handleImageClick(ele, container)},500)
    });
  });

  document.body.appendChild(container);
});

let selectedImages = [];
const WonMatch = document.getElementById("won-match");
const LossMatch = document.getElementById("loss-match");
const startBtn = document.getElementById("start");

function handleImageClick(ele, div) {
  if (selectedImages.length < 2) {
    selectedImages.push(ele);

    if (selectedImages.length === 2) {
      if (selectedImages[0].image_id === selectedImages[1].image_id) {
        div.style.display = "none";
        WonMatch.style.display = "block";
      } else {
        div.style.display = "none";
        LossMatch.style.display = "block";
      }
      selectedImages = [];
      startBtn.addEventListener("click", () => {
        location.reload();
      });
      LossMatch.addEventListener("click", () => {
        location.reload();
      });
    }
  }
}
