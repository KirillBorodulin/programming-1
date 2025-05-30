const tabLinks = document.querySelectorAll('.tablinks');
const tabContents = document.querySelectorAll('.tabcontent');
tabLinks.forEach(function(tabLink) {
  tabLink.addEventListener('click', openTabs);
});

function openTabs(evt) {
  const btnTarget = evt.currentTarget;
  const day = btnTarget.getAttribute('data-day');
  tabContents.forEach(function(tabContent) {
    tabContent.classList.remove('tabcontent-active');
  });
  tabLinks.forEach(function(tabLink) {
    tabLink.classList.remove('tablinks-active');
  });
  document.querySelector(`#${day}`).classList.add('tabcontent-active');
  btnTarget.classList.add('tablinks-active');
}
