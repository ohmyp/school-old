// location.reload();

var itemList = document.querySelectorAll('.items');
var menuList = document.querySelectorAll('.menu_button');
var blockTitle = document.querySelector('.block_names h2');
var blockSubtitle = document.querySelector('.block_names h3');
var items = document.querySelectorAll('.item');

// Переключение между вкладками
for (var a = 0; a < itemList.length; a++) {

  menuList[a].addEventListener('click', function () {

    for (var b = 0; b < itemList.length; b++) {
      menuList[b].classList.remove('active');
      itemList[b].classList.remove('shown');
    }
    this.classList.add('active');
    document.querySelector('.' + this.id).classList.add('shown');

    switch (this.id) {
      case 'teachers':
        blockTitle.innerHTML = 'Для учителя';
        blockSubtitle.innerHTML = 'Материалы для учителя';
        break;
      case 'pupils':
        blockTitle.innerHTML = 'Для ученика';
        blockSubtitle.innerHTML = 'Материалы для ученика';
        break;
      case 'tests':
        blockTitle.innerHTML = 'Анкеты';
        blockSubtitle.innerHTML = 'Заполните анкеты';
        break;
      case 'homework':
        blockTitle.innerHTML = 'Домашние задания';
        blockSubtitle.innerHTML = 'Выполняйте и загружайте домашние задания';
        break;
      case 'olymp58':
        blockTitle.innerHTML = 'Олимпиады для учеников 5-8 классов';
        blockSubtitle.innerHTML = 'Принимайте участие в различных олимпиадах';
        break;
      case 'olymp911':
        blockTitle.innerHTML = 'Олимпиады для учеников 9-11 классов';
        blockSubtitle.innerHTML = 'Принимайте участие в различных олимпиадах';
        break;
    }
  });
}

// Возврат домой по клику на название
$("#logo").click(function () {
  window.location = 'index.html';
});


// Преобразует object Item в HTML код
function itemToHTML(item) {
  var div = document.createElement('div');
  var title = document.createElement('h2');
  var subtitle = document.createElement('p');
  var buttonsDiv = document.createElement('div');

  div.classList.add('item');
  title.classList.add('item_title');
  subtitle.classList.add('item_subtitle');
  buttonsDiv.classList.add('buttons_div');


  title.innerHTML = item.title;
  subtitle.innerHTML = item.subtitle;

  div.appendChild(title);
  div.appendChild(subtitle);

  for (var i = 0; i < item.buttons.length; i++) {
    var button = document.createElement('div');
    var buttonText = document.createElement('p');
    button.classList.add('item_button');
    button.setAttribute("href", item.buttons[i][1]);

    buttonText.innerHTML = item.buttons[i][0];
    button.appendChild(buttonText);

    button.addEventListener('click', function () {
      window.open(this.getAttribute("href"));
      return false;

    });

    buttonsDiv.appendChild(button);
  }
  div.appendChild(buttonsDiv);

  return div;
}

// Добавляет Item на сайт
function addItem(item) {
  $('.' + item.block).append(itemToHTML(item));
}

// Анимация меню в мобильной версии
$('#hamburger').on("click", function () {
  $('.menu_buttons').animate({
    height: 'toggle'
  });
});

// Создание массива с названиями блоков на странице (для учитетя/ученика/итд)
var blocks = document.querySelectorAll('.items');
var whichBlocks = [];
for (var i = 0; i < blocks.length; i++) {
  whichBlocks.push(blocks[i].classList[1])
}

// Добавляет Итем в нужный блок 
function importItems(items) {
  for (var i = 0; i < items.length; i++) {
    if (whichBlocks.includes(items[i].block)) {
      addItem(items[i]);
    }
  }
}

// Вызов функции
importItems(itemsToImport);