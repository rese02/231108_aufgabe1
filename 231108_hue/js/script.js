// Funktion, um den aktuellen Monat zu bestimmen
function getCurrentMonth() {
    const months = [
      "Januar", "Februar", "März", "April", "Mai", "Juni",
      "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    return months[currentMonth];
  }

  // Funktion, um das Bild und die Überschrift basierend auf dem Monat zu aktualisieren
  function updateHeader() {
    const month = getCurrentMonth();
    const header = document.getElementById('monthHeading');
    const image = document.getElementById('monthImage');

    // Setze die Überschrift entsprechend dem Monat
    header.textContent = month + " Bild";

    // Setze das Bild entsprechend dem Monat
    switch (month) {
      case 'Januar':
        image.src = 'images/januar.jpg';
        break;
      case 'Februar':
        image.src = 'images/februar.jpg'; 
        break;
      case 'März':
        image.src = 'images/maerz.jpg'; 
        break;
      case 'April':
        image.src = 'images/april.jpg'; 
        break;
      case 'Mai':
        image.src = 'images/mai.jpg'; 
        break;
      case 'Juni':
        image.src = 'images/juni.jpg'; 
        break;
      case 'Juli':
        image.src = 'images/juli.jpg'; 
        break;
      case 'August':
        image.src = 'images/august.jpg'; 
        break;
      case 'September':
        image.src = 'images/september.jpg';
      default 'Leer':
      image.src = 'images/september.jpg';
    }
  }

  // Aktualisiere den Header beim Laden der Seite
  window.onload = updateHeader;