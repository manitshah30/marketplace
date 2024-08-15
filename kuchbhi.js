document.addEventListener("DOMContentLoaded", function() {
    const texts = [" Fruits", " Vegetables", " Personal Care Products", " Bakery Products"];
    let i = 0;
    let j = 0;
    let isDeleting = false;
    const speed = 100;
  
    function typeAndErase() {
      const dynamicTextElement = document.getElementById("dynamic-text");
  
      if (!isDeleting && j < texts[i].length) {
        dynamicTextElement.textContent += texts[i].charAt(j);
        j++;
        setTimeout(typeAndErase, speed);
      } else if (isDeleting && j > 0) {
        dynamicTextElement.textContent = dynamicTextElement.textContent.slice(0, -1);
        j--;
        setTimeout(typeAndErase, speed);
      } else if (j === texts[i].length) {
        isDeleting = true;
        setTimeout(typeAndErase, 1000); // Pause before starting to delete
      } else if (j === 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
        setTimeout(typeAndErase, 500); // Pause before starting to type new text
      }
    }
  
    typeAndErase();
  });
  