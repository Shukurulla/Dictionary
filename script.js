const tr = document.querySelectorAll("tbody tr");
tr.forEach((item, id) => {
  const btn = document.createElement("button");
  const td = document.createElement("td");
  const i = document.createElement("i");

  i.classList.add("bi", "bi-volume-up");
  td.append(btn);
  item.append(td);
  btn.append(i);

  document.querySelectorAll("button")[id].addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(item.children[2].innerHTML);
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
  });
});
