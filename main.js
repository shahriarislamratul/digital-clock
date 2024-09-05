const digitSegments = [
        [1, 2, 3, 4, 5, 6],
        [2, 3],
        [1, 2, 7, 5, 4],
        [1, 2, 7, 3, 4],
        [6, 7, 2, 3],
        [1, 6, 7, 3, 4],
        [1, 6, 5, 4, 3, 7],
        [1, 2, 3],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 7, 3, 6]
      ];
  
  document.addEventListener('DOMContentLoaded', function() {
    const hours = document.querySelectorAll('.hours');
    const minutes = document.querySelectorAll('.minutes');
    const seconds = document.querySelectorAll('.seconds');
  
  
    setInterval(() => {
      const date = new Date();
      let hoursValue = date.getHours();
      const minutesValue = date.getMinutes();
      const secondsValue = date.getSeconds();
      const isAM = hoursValue < 12;
  
  
  
      hoursValue = hoursValue % 12 || 12; // 12-hour format
  
      updateClock(hours, hoursValue);
      updateClock(minutes, minutesValue);
      updateClock(seconds, secondsValue);
    }, 1000);
  });
  
  function updateClock(elements, value) {
    setNumber(elements[0], Math.floor(value / 10));
    setNumber(elements[1], value % 10);
  }
  
  function setNumber(digit, number) {
    const segments = digit.querySelectorAll('.segment');
    const current = parseInt(digit.getAttribute('data-value'));
  
    if (!isNaN(current) && current === number) return;
  
    if (!isNaN(current)) {
      digitSegments[current].forEach((seg, index) => {
        setTimeout(() => segments[seg - 1].classList.remove('on'), index * 45);
      });
    }
  
    setTimeout(() => {
      digitSegments[number].forEach((seg, index) => {
        setTimeout(() => segments[seg - 1].classList.add('on'), index * 45);
      });
    }, 250);
  
    digit.setAttribute('data-value', number);
  }