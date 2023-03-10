const noteTextArea = document.getElementById('note');
const panelMessage = document.getElementById('panel-message');
let saveTimeoutId;

// Load note from localStorage on page load
window.addEventListener('load', () => {
  const savedNote = localStorage.getItem('note');
  if (savedNote) {
    noteTextArea.value = savedNote;
  }
});

// Autosave note to localStorage after 500ms of not typing
noteTextArea.addEventListener('input', () => {
  clearTimeout(saveTimeoutId);
  saveTimeoutId = setTimeout(() => {
    const note = noteTextArea.value;
    localStorage.setItem('note', note);
    displayPanelMessage('Note saved.');
  }, 500);
});

// Function to display a message on the panel
function displayPanelMessage(message) {
  panelMessage.innerText = message;
  setTimeout(() => {
    panelMessage.innerText = '';
  }, 2000);
}
