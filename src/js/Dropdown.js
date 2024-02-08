// JavaScript, um das Standardverhalten des Dropdown-Menüs zu verhindern
document.querySelectorAll('.dropdown').forEach(function(dropDown) {
    dropDown.addEventListener('click', function(event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Klicks
        event.stopPropagation(); // Stoppt die Ereignispropagierung, um zu verhindern, dass andere Ereignishandler ausgelöst werden
        var content = this.querySelector('.dropdown-content');
        if (content.style.display === 'block') {
            content.style.display = 'none'; // Schließt das Dropdown-Menü, wenn es bereits geöffnet ist
            this.classList.remove('open'); // Entfernt die Klasse .open, um den obersten Balken zu ändern
        } else {
            content.style.display = 'block'; // Öffnet das Dropdown-Menü, wenn es geschlossen ist
            this.classList.add('open'); // Fügt die Klasse .open hinzu, um den obersten Balken zu ändern
        }
    });
});

// JavaScript, um das Dropdown-Menü zu schließen, wenn außerhalb des Dropdown-Menüs geklickt wird
document.addEventListener('click', function(event) {
    var dropDowns = document.querySelectorAll('.dropdown');
    dropDowns.forEach(function(dropDown) {
        var content = dropDown.querySelector('.dropdown-content');
        if (content.style.display === 'block' && !dropDown.contains(event.target)) {
            content.style.display = 'none';
            dropDown.classList.remove('open'); // Entfernt die Klasse .open, um den obersten Balken zu ändern
        }
    });
});
