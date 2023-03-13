const noteTextArea = document.getElementById('note');
const panelMessage = document.getElementById('panel-message');
const charCount = document.getElementById('char-count');
const lineCount = document.getElementById('line-count');
const wordCount = document.getElementById('word-count');

let saveTimeoutId;

// Load note from localStorage on page load
window.addEventListener('load', () => {
  const savedNote = localStorage.getItem('note');
  if (savedNote) {
    noteTextArea.value = savedNote;
  }
});
// Listen for input events on the textarea
note.addEventListener("input", function() {
  const currentLength = this.value.length;

  // Check if the current length is greater than or equal to 1000
  if (currentLength >= 1000) {
    alert("You have reached the limit of 1000 characters. Saving to the cloud would be beneficial. Storage is free as of now.");
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
note.addEventListener('input', function() {
  const text = note.value;

  // Count number of characters
  const numChars = text.length;
  charCount.innerText = numChars;

  // Count number of lines
  const numLines = text.split('\n').length;
  lineCount.innerText = numLines;

  // Count number of words
  const numWords = text.match(/\b\w+\b/g);
  wordCount.innerText = numWords ? numWords.length : 0;
});

const termsLink = document.createElement('a');
termsLink.href = '//terms';
termsLink.innerText = 'Terms of Use';
termsLink.style.position = 'fixed';
termsLink.style.right = 0;
document.body.appendChild(termsLink);

const privacyLink = document.createElement('a');
privacyLink.href = '//privacy';
privacyLink.innerText = 'Privacy Policy';
privacyLink.style.position ="fixed";
privacyLink.style.right = 10;
document.body.appendChild(privacyLink);
