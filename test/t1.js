document.getElementById("signup-id").onclick = function() {
    window.location.href = "signup.html";
    };
    
    
    document.addEventListener('DOMContentLoaded', () => {
        type();
    });
    // slider
    document.addEventListener('DOMContentLoaded', function () {
        const slider = document.querySelector('.slider');
        const leftButton = document.querySelector('.left-button');
        const rightButton = document.querySelector('.right-button');
      
        let scrollAmount = 0;
        const slideWidth = slider.clientWidth;
      
        rightButton.addEventListener('click', () => {
            scrollAmount += slideWidth;
            if (scrollAmount >= slider.scrollWidth) {
                scrollAmount = 0;
            }
            slider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
      
        leftButton.addEventListener('click', () => {
            scrollAmount -= slideWidth;
            if (scrollAmount < 0) {
                scrollAmount = slider.scrollWidth - slideWidth;
            }
            slider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
      });
      console.log('fruit1:', document.getElementById("fruit1"));
    console.log('fruit2:', document.getElementById("fruit2"));
    // Add similar logs for the other IDs
    
      // Make sure the DOM is fully loaded before running the script
    document.addEventListener('DOMContentLoaded', function() {
        // Grab all the elements by their IDs
        var fruit1 = document.getElementById("fruit1");
        var fruit2 = document.getElementById("fruit2");
        var fruit3 = document.getElementById("fruit3");
        var fruit4 = document.getElementById("fruit4");
    
        var vegetable1 = document.getElementById("vegetable1");
        var vegetable2 = document.getElementById("vegetable2");
        var vegetable3 = document.getElementById("vegetable3");
        var vegetable4 = document.getElementById("vegetable4");
    
        var personalCare1 = document.getElementById("personal_care1");
        var personalCare2 = document.getElementById("personal_care2");
        var personalCare3 = document.getElementById("personal_care3");
        var personalCare4 = document.getElementById("personal_care4");
    
        var beverage1 = document.getElementById("beverage1");
        var beverage2 = document.getElementById("beverage2");
        var beverage3 = document.getElementById("beverage3");
        var beverage4 = document.getElementById("beverage4");
    
        var bakery1 = document.getElementById("bakery1");
        var bakery2 = document.getElementById("bakery2");
        var bakery3 = document.getElementById("bakery3");
        var bakery4 = document.getElementById("bakery4");
    
        // Attach onclick event handlers
        if (fruit1) {
            fruit1.onclick = function() {
                window.location.href = 'products/fruits/fruit1.html';
            };
        }
        if (fruit2) {
            fruit2.onclick = function() {
                window.location.href = 'products/fruits/fruit2.html';
            };
        }
        if (fruit3) {
            fruit3.onclick = function() {
                window.location.href = 'products/fruits/fruit3.html';
            };
        }
        if (fruit4) {
            fruit4.onclick = function() {
                window.location.href = 'products/fruits/fruit4.html';
            };
        }
    
        if (vegetable1) {
            vegetable1.onclick = function() {
                window.location.href = 'products/vegetables/vegetable1.html';
            };
        }
        if (vegetable2) {
            vegetable2.onclick = function() {
                window.location.href = 'products/vegetables/vegetable2.html';
            };
        }
        if (vegetable3) {
            vegetable3.onclick = function() {
                window.location.href = 'products/vegetables/vegetable3.html';
            };
        }
        if (vegetable4) {
            vegetable4.onclick = function() {
                window.location.href = 'products/vegetables/vegetable4.html';
            };
        }
    
        if (personalCare1) {
            personalCare1.onclick = function() {
                window.location.href = 'products/personal_care/personal_care1.html';
            };
        }
        if (personalCare2) {
            personalCare2.onclick = function() {
                window.location.href = 'products/personal_care/personal_care2.html';
            };
        }
        if (personalCare3) {
            personalCare3.onclick = function() {
                window.location.href = 'products/personal_care/personal_care3.html';
            };
        }
        if (personalCare4) {
            personalCare4.onclick = function() {
                window.location.href = 'products/personal_care/personal_care4.html';
            };
        }
    
        if (beverage1) {
            beverage1.onclick = function() {
                window.location.href = 'products/beverages/beverage1.html';
            };
        }
        if (beverage2) {
            beverage2.onclick = function() {
                window.location.href = 'products/beverages/beverage2.html';
            };
        }
        if (beverage3) {
            beverage3.onclick = function() {
                window.location.href = 'products/beverages/beverage3.html';
            };
        }
        if (beverage4) {
            beverage4.onclick = function() {
                window.location.href = 'products/beverages/beverage4.html';
            };
        }
    
        if (bakery1) {
            bakery1.onclick = function() {
                window.location.href = 'products/bakery/bakery1.html';
            };
        }
        if (bakery2) {
            bakery2.onclick = function() {
                window.location.href = 'products/bakery/bakery2.html';
            };
        }
        if (bakery3) {
            bakery3.onclick = function() {
                window.location.href = 'products/bakery/bakery3.html';
            };
        }
        if (bakery4) {
            bakery4.onclick = function() {
                window.location.href = 'products/bakery/bakery4.html';
            };
        }
    });
    
    
    const words = ["Fruits", "Vegetables", "Personal Care Products", "Beverages", "Bakery Products"];
    let currentWordIndex = 0;
    let isDeleting = false;
    let dynamicText = document.getElementById('dynamic-text');
    let charIndex = 0; // To track the current character index
    let typingSpeed = 150; // Initial typing speed
    
    function type() {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
    dynamicText.textContent = currentWord.substring(0, charIndex--);
    } else {
    dynamicText.textContent = currentWord.substring(0, charIndex++);
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
    // Pause at the end of the word before deleting
    setTimeout(() => isDeleting = true, 1000);
    typingSpeed = 50; // Speed up when deleting
    } else if (isDeleting && charIndex === 0) {
    // Move to the next word
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    typingSpeed = 150; // Reset typing speed
    }
    
    setTimeout(type, typingSpeed);
    }
    