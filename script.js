// Function to update the current time in UTC
function updateTimeAndDay() {
  // Get current time and day in UTC
  const now = new Date();
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const currentTimeUTC = `${hours}:${minutes} UTC`;

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[now.getUTCDay()];

  // Update the HTML elements
  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    currentTimeUTC;
  document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

// Call the function once to update immediately on load
updateTimeAndDay();

// Optionally, set an interval to update every minute
setInterval(updateTimeAndDay, 60000);
