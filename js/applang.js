const select = document.querySelector('.header__select');
const localLang = localStorage.getItem('language');
const userLang = localLang ? JSON.parse(localLang) : 'uz';
const allLang = ['uz', 'ru'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  localStorage.setItem('language', JSON.stringify(lang));
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage(userLang) {
  if (!allLang.includes(userLang)) {
    location.href = window.location.pathname + '#uz';
    location.reload();
  }
  select.value = userLang;

  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][userLang];
    }
  }
}

changeLanguage(userLang);
