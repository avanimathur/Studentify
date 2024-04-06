document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector(".Hi").classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", function() {
    var paragraphs = document.querySelectorAll('#content p');
    var currentParagraph = 0;
    var currentWord = 0;
    var words;
    var intervalId = setInterval(function() {
      if (currentParagraph >= paragraphs.length) {
        clearInterval(intervalId);
        return;
      }
      if (!words) {
        words = paragraphs[currentParagraph].textContent.split(' ');
        paragraphs[currentParagraph].textContent = '';
      }
      if (currentWord < words.length) {
        paragraphs[currentParagraph].textContent += words[currentWord] + ' ';
        currentWord++;
      } else {
        currentWord = 0;
        currentParagraph++;
        words = null;
      }
    }, 100);
  });
  