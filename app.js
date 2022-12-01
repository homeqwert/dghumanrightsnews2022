document.querySelectorAll('.accordion__expand-button').forEach((element) => {
  element.addEventListener('click', (e) => {
    if (e.target.textContent.trim() === '자세히') {
      e.target.ariaExpanded = true;
      e.target.nextElementSibling.ariaHidden = false;
      e.target.textContent = '숨기기';
    } else {
      e.target.ariaExpanded = false;
      e.target.nextElementSibling.ariaHidden = true;
      e.target.textContent = '자세히';
    }
  });
});

document.querySelectorAll('input[type="checkbox"]').forEach((element) => {
  element.addEventListener('click', () => {
    const checkedCount = [
      ...document.querySelectorAll('input[type="checkbox"]'),
    ].filter((checkbox) => checkbox.checked).length;
    if (checkedCount === 5) {
      document.querySelector('.count-check').style.display = 'none';
      document.querySelector('input[type="submit"]').disabled = false;
    } else {
      document.querySelector('.count-check').style.display = 'block';
      document.querySelector('input[type="submit"]').disabled = true;
    }
  });
});
