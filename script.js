const buttons = document.querySelectorAll(".symptom-list button");

const tsuboData = {
  "頭痛": {
    name: "合谷（ごうこく）",
    place: "手の甲側で、親指と人差し指の骨が交わる少し手前あたりです。",
    how: "反対側の親指で、痛気持ちいい程度の強さで5秒ほど押し、ゆっくり離します。",
    image: "goukoku.png"
  },

  "肩こり": {
    name: "肩井（けんせい）",
    place: "首の付け根と肩先の、だいたい中間あたりです。",
    how: "反対側の手で、無理のない強さでゆっくり押します。",
    image: "kensei.png"
  },

  "腰痛": {
    name: "委中（いちゅう）",
    place: "ひざの裏側の、ほぼ中央にあります。",
    how: "座った状態で、指の腹を使って軽く押してみてください。",
    image: "ichuu.png"
  },

  "目の疲れ": {
    name: "睛明（せいめい）",
    place: "目頭と鼻の付け根の間あたりです。",
    how: "眼球を直接押さず、指の腹でやさしく押します。"
  },

  "胃の不快感": {
    name: "足三里（あしさんり）",
    place: "ひざのお皿の外側から、指4本分ほど下あたりです。",
    how: "親指でゆっくりと、心地よい程度に押します。"
  },

  "寝つきが悪い": {
    name: "神門（しんもん）",
    place: "手首の小指側にあるくぼみ付近です。",
    how: "反対側の親指で、ゆっくり優しく押します。"
  }
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const symptom = button.textContent
      .replace(/[^\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/gu, "")
      .trim();

    const data = tsuboData[symptom];

    if (!data) {
      return;
    }

    const card = document.getElementById("tsubo-card");
    const name = document.getElementById("tsubo-name");
    const place = document.getElementById("tsubo-place");
    const how = document.getElementById("tsubo-how");
    const image = document.getElementById("tsubo-image");

    name.textContent = `おすすめのツボ：${data.name}`;
    place.textContent = `場所：${data.place}`;
    how.textContent = `押し方：${data.how}`;

    if (data.image) {
      image.src = data.image;
      image.alt = `${data.name}の位置`;
      image.style.display = "block";
    } else {
      image.style.display = "none";
      image.removeAttribute("src");
    }

    card.classList.remove("hidden");
  });
});
