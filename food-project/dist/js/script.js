/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
const tabsParent = document.querySelector('.tabheader__items');
const tabs = document.querySelectorAll('.tabheader__item');
const tabsContent = document.querySelectorAll('.tabcontent');
function hideTabContent(tabheader, tabcontent) {
  tabheader.forEach(item => {
    item.classList.remove('tabheader__item_active');
  });
  tabcontent.forEach(item => {
    item.style.display = 'none';
  });
}
function showTabContent(tabheader, tabcontent) {
  tabheader.classList.add('tabheader__item_active');
  tabcontent.style.display = 'block';
}
hideTabContent(tabs, tabsContent);
showTabContent(tabs[0], tabsContent[0]);
tabsParent.addEventListener('click', event => {
  const target = event.target;
  if (target && target.classList.contains('tabheader__item')) {
    console.log('click');
    tabs.forEach((item, i) => {
      if (item === target) {
        hideTabContent(tabs, tabsContent);
        showTabContent(item, tabsContent[i]);
      }
    });
  }
});
/******/ })()
;
//# sourceMappingURL=script.js.map