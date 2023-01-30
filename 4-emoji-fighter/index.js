let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🐳",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");
let getEmj1 = 0;
let getEmj2 = 0;
fightButton.addEventListener("click", function () {
  for (let emoji = 1; emoji < fighters.length + 1; emoji++) {
    let first = Math.floor(Math.random() * fighters.length);
    getEmj1 = fighters[first];
    let second = Math.floor(Math.random() * fighters.length);
    getEmj2 = fighters[second];
  }

  stageEl.textContent = getEmj1 + "vs" + getEmj2;

  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
});
