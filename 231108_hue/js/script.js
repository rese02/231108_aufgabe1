function getCurrentMonth() {
  const months = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  return months[currentMonth];
}

function updateHeader() {
  const month = getCurrentMonth();
  const header = document.getElementById('monthHeading');
  const image = document.getElementById('monthImage');

  // Überschrift entsprechend dem Monat
  header.textContent = month + "";

  // Bild entsprechend dem Monat
  image.src = 'images/' + month.toLowerCase() + '.jpg';
}

// Aktualisiere den Header beim Laden der Seite
window.onload = updateHeader;
