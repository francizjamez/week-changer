const currentDate = new Date(Date.now());
const weekDiv = document.getElementById("week");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentWeek = currentDate.getTime() - 86400000 * 3;

window.addEventListener("load", () => {
  const startDate = new Date(currentWeek);
  createWeek(startDate);
});

function formatDate(date) {
  const month = date.toLocaleString("default", { month: "short" });
  return `${month} ${date.getDate()}`;
}

function createDay(date) {
  const list = document.createElement("li");
  const formattedDate = formatDate(date);
  list.innerHTML = formattedDate;
  list.classList = "list-none";
  return list;
}

function createWeek() {
  const startTime = currentWeek;
  weekDiv.innerHTML = "";
  for (let i = 0; i < 7; i++) {
    const newDate = new Date(startTime + i * 86400000);
    const newDay = createDay(newDate);
    if (newDate.getTime() === currentDate.getTime())
      newDay.classList.add("font-bold");
    weekDiv.appendChild(newDay);
  }
}

prevBtn.addEventListener("click", () => {
  currentWeek -= 86400000 * 7;
  createWeek();
});

nextBtn.addEventListener("click", () => {
  currentWeek += 86400000 * 7;
  createWeek();
});

nextBtn.addEventListener("onmouseover", () => {
  const nextDivDot = document.getElementById("next-dot");
  nextDivDot.classList.add("bg-red-700");
});
