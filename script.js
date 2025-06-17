const chapters = {
  1: {
    title: "Capítulo 1: Despertar en lo Desconocido",
    text: "Te despiertas entre la niebla del bosque. Una figura te observa desde lejos.",
    choices: [
      { text: "Seguir a la figura", next: 2 },
      { text: "Explorar el bosque por tu cuenta", next: 3 }
    ]
  },
  2: {
    title: "Capítulo 2: El Encuentro",
    text: "Te acercas y descubres que es una anciana que te ofrece ayuda.",
    choices: [
      { text: "Confiar en ella", next: 4 },
      { text: "Rechazar su ayuda", next: 5 }
    ]
  },
  3: {
    title: "Capítulo 2: El Camino Solitario",
    text: "El bosque se vuelve más denso. Comienzas a escuchar susurros entre los árboles.",
    choices: [
      { text: "Seguir los susurros", next: 6 },
      { text: "Ignorarlos y buscar refugio", next: 7 }
    ]
  },
  4: {
    title: "Capítulo 3: El Refugio",
    text: "Ella te lleva a una cabaña segura donde puedes descansar. Has sobrevivido la noche.",
    choices: []
  },
  5: {
    title: "Capítulo 3: Sombra en el Sendero",
    text: "Te pierdes... y no vuelves a ser visto. Fin.",
    choices: []
  },
  6: {
    title: "Capítulo 3: Voz del Bosque",
    text: "Los susurros te guían a un claro mágico. Sientes paz interior.",
    choices: []
  },
  7: {
    title: "Capítulo 3: El Escondite",
    text: "Encuentras un árbol hueco y pasas la noche en silencio. Sobrevives.",
    choices: []
  }
};

let currentAudio = true;

function toggleAudio() {
  const audio = document.getElementById("bg-music");
  currentAudio = !currentAudio;
  audio.muted = !currentAudio;
  document.getElementById("audio-status").innerText = currentAudio ? "On" : "Off";
}

function startChapter(chapterNum) {
  document.getElementById("main-menu").classList.add("hidden");
  document.getElementById("chapter").classList.remove("hidden");
  showScene(chapterNum);
}

function showScene(num) {
  const chapter = chapters[num];
  document.getElementById("chapter-title").innerText = chapter.title;
  document.getElementById("story-text").innerText = chapter.text;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  chapter.choices.forEach(c => {
    const btn = document.createElement("button");
    btn.innerText = c.text;
    btn.onclick = () => showScene(c.next);
    choicesDiv.appendChild(btn);
  });
}