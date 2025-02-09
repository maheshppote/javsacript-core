const clock = document.getElementById("clock");

function updateClock() {
  const date = new Date();
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  clock.innerHTML = time;
}

// Update immediately
updateClock();

// Then update every second
setInterval(updateClock, 1000);
