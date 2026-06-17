# Day 12: Mini DOM Projects 

 June 16, 2026
---

##  Projects Overview

### 1. Digital Clock
A clean, minimal digital clock that displays the current time in a `HH:MM:SS` format. It updates dynamically using a JavaScript interval to keep the time precise and real-time.

*   **Key Features:**
    *   24-hour format time rendering.
    *   String padding (`padStart`) to ensure a clean two-digit layout for hours, minutes, and seconds.
    *   Centering layout via Flexbox.

### 2. Dynamic Font Resizer
An interactive text utility that allows users to scale text smoothly on a webpage using an HTML5 range slider. 

*   **Key Features:**
    *   Input slider with custom range limits (10px to 72px).
    *   Real-time event handling using the `'input'` listener.
    *   Dynamic text indicator showing the current exact pixel size.

---

## 🛠️ Tech Stack Used

*   **HTML5:** Structure and interactive semantic elements (`<input type="range">`).
*   **CSS3:** Center alignment, flexbox configurations, and basic styling layout.
*   **JavaScript (ES6):** DOM manipulation, event listeners, and timing functions (`setInterval`, `Date` object).

---

## Code Snippets

### Digital Clock Logic
```javascript
function updateTime() {
    const clock = document.getElementById("time");
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds}`;
    clock.textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000); // Recommended interval update set to 1s


const sizeSlider = document.getElementById("sizeSlider");
const textContent = document.getElementById("textContent");
const currentSize = document.getElementById("currentSize");

sizeSlider.addEventListener("input", function () {
  const para = textContent.querySelector("p");
  const fontSize = sizeSlider.value + "px";
  para.style.fontSize = fontSize;
  currentSize.textContent = "Current Size: " + fontSize;
});