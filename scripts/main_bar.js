//эти переменные нужны для того, чтобы при быстром наведедении курсора с аксессуаров на одежду и наоборот не создавалось два списка
let addingCloth, addingAccessories, addingNew;


let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');

let invisible_bar = document.querySelector('.invisible_bar');

let invisible_tooltip = document.querySelector('.invisible_tooltip');

let items_bar = document.querySelectorAll('.item_bar');
let icons_nav_bar = document.querySelectorAll('.icon_nav_bar');
let text_item_nav_bar = document.querySelectorAll('.text_item_nav_bar');

let logo = document.querySelector('.logo');
let newMenu = document.querySelector('.newMenu_invisible')
let clothesMenu = document.querySelector('.clothesMenu_invisible')
let accessoriesMenu = document.querySelector('.accessoriesMenu_invisible')

let newMenuImgs=document.querySelectorAll('.newMenuImg');
let clothesMenuImgs=document.querySelectorAll('.clothesMenuImg');
let accessoriesMenuImgs=document.querySelectorAll('.accessoriesMenuImg');

let countryBtn = document.querySelector('.location');
let searchBtn = document.querySelector('.search');
let enterBtn = document.querySelector('.enterUser');
let cartBtn = document.querySelector('.cart');

let navBarMenu = document.querySelector('.navBarMenu_invisible');
let navBarMenuLeftBlack = document.querySelector('.navBarMenuLeftBlack_invisible');
let btnClose= document.querySelector('.btnClose');
let navBarContent = document.querySelector('.navBarContent');

let countryContent = document.querySelector('.countryContent');
let contSelectLanguage = document.querySelector('.contSelectLanguage');
let contSelectLanguageBack = document.querySelector('#contSelectLanguageBack');

let searchContent = document.querySelector('.searchContent');
let searchBar = document.querySelector('.searchBar');
let authorizationBtn = document.querySelector('.authorizationBtn');
let authorizationForm = document.querySelector('.authorizationForm');
let choosePhoneCode = document.querySelector('#choosePhoneCode');
let phoneCodeList = document.querySelector('#phoneCodeList');
let phoneNumberValue = document.querySelector('.enterPhoneNumberAuth');
let passwordValue = document.querySelector('#passwordField');

let registrationBtn = document.querySelector('.registrationBtn');
let registrationForm = document.querySelector('.registrationForm');

let enterContent = document.querySelector('.enterContent');
let cartContent = document.querySelector('.cartContent');

//-----------------------------------------------------------------------------------------------------
//ОБРАБОТЧИКИ ПОЛОСЫ ЛЕВЫЙ БАР
document.addEventListener('mouseover', handleMouseOverBarItem);
document.addEventListener('mouseout', handleMouseOutBarItem);
document.addEventListener('mouseover', showTooltip);
document.addEventListener('mouseout', hiddenTooltip);




function showTooltip(e) {
if (e.target.dataset.tooltip=='new'
||e.target.dataset.tooltip=='clothes'
||e.target.dataset.tooltip=='accesories') {

invisible_tooltip.classList.add('invisible_tooltipTransform');
}
}


function hiddenTooltip(e) {
if ((e.relatedTarget==null)
||(e.relatedTarget.className=='bg')
||(e.relatedTarget.className=='bg1')
||(e.relatedTarget.className=='bg2')
||(e.relatedTarget.dataset.tooltip=='special')
||(e.relatedTarget.dataset.tooltip=='inspire')
) {

invisible_tooltip.classList.remove('invisible_tooltipTransform');
}
}



//наводим на прозрачную область, выплывает белая подложка, меняется цвет шрифта

function handleMouseOverBarItem(e) {
if (e.target.className=='bar1'
||(e.relatedTarget==null&&e.target.className=='bar1')
||e.target.className=='bar2'
||(e.relatedTarget==null&&e.target.className=='bar2')) {
invisible_bar.classList.add('invisible_barTransform');

logo.src='img/navbar-logo.png'

//меняем цвет цвет шрифта левого бара
for (item of items_bar) {
if (item.dataset.tooltip=='new'||item.dataset.tooltip=='special') 

item.classList.add('item_bar_withInvisible_red');
item.classList.add('item_bar_withInvisible');


}


//меняем цвет цвет шрифта полосы навигации----------------------------
for (item of text_item_nav_bar) {
item.classList.add('item_nav_bar_withInvisible');
}

for (item of icons_nav_bar) {
item.classList.add('icon_nav_bar_invert')
}



}
}


 //убрали курсор с бара
function handleMouseOutBarItem(e) {
if ((e.relatedTarget==null)
||(e.relatedTarget.className=='bg')
||(e.relatedTarget.className=='bg1')
||(e.relatedTarget.className=='bg2')
) {
invisible_bar.classList.remove('invisible_barTransform');


//возвращаем цвет у элементов баров
for (item of items_bar) {
item.classList.remove('item_bar_withInvisible');
item.classList.remove('item_bar_withInvisible_red');
logo.src='img/navbar-logo-white.png'
}

for (item of text_item_nav_bar) {
item.classList.remove('item_nav_bar_withInvisible');
}

for (item of icons_nav_bar) {
item.classList.remove('icon_nav_bar_invert')
}

}
}

//-----------------------------------------------------------------------------------------------------
//ОБРАБОТЧИКИ НАВЕДЕНИЯ НОВИНКИ ОДЕЖДА АКСЕССУАРЫ
document.addEventListener('mouseover', handleMouseOverNew);
document.addEventListener('mouseout', handleMouseOutNew);
document.addEventListener('mouseover', handleMouseOverClothes);
document.addEventListener('mouseout', handleMouseOutClothes);
document.addEventListener('mouseover', handleMouseOverAccessories);
document.addEventListener('mouseout', handleMouseOutAccessories);

function handleMouseOverNew(e) {
if (e.target.dataset.tooltip!='new') return
if (invisible_tooltip.children[0]) return

addingNew = true;



newMenuImgs[0].style=`background-image: url('./base/img/cloth/dresses/0/0 (${6}).jpg')`
newMenuImgs[1].style=`background-image: url('./base/img/cloth/dresses/0/0 (${5}).jpg')`
newMenuImgs[2].style=`background-image: url('./base/img/cloth/dresses/0/0 (${7}).jpg')`
newMenuImgs[3].style=`background-image: url('./base/img/cloth/dresses/0/0 (${9}).jpg')`


setTimeout(()=>{
if (!addingNew) return


invisible_tooltip.append(newMenu);
newMenu.classList.add('newMenu')
}, 250);

}

function handleMouseOutNew(e) {
if (e.target.dataset.tooltip=='new') return

addingNew=false;

}



//---------------------------------------------------------------------------

function handleMouseOverClothes(e) {
if (e.target.dataset.tooltip!='clothes') return
if (invisible_tooltip.children[0]) return

addingCloth=true;

clothesMenuImgs[0].style=`background-image: url('./base/img/cloth/dresses/0/0 (${1}).jpg')`
clothesMenuImgs[1].style=`background-image: url('./base/img/cloth/dresses/0/0 (${4}).jpg')`
clothesMenuImgs[2].style=`background-image: url('./base/img/cloth/dresses/0/0 (${8}).jpg')`


setTimeout(()=>{
if (!addingCloth) return
invisible_tooltip.append(clothesMenu)
clothesMenu.classList.add('clothesAccessoriesMenu')
}, 250);

}


function handleMouseOutClothes(e) {
if (e.target.dataset.tooltip=='clothes') return

addingCloth=false;

if ((e.relatedTarget==null)
||(e.relatedTarget.className=='bg')
||(e.relatedTarget.className=='bg1')
||(e.relatedTarget.className=='bg2')
||(e.relatedTarget.dataset.tooltip=='accesories')
||(e.relatedTarget.dataset.tooltip=='new')) {

clothesMenu.classList.remove('clothesMenu');
if (invisible_tooltip.firstChild) invisible_tooltip.firstChild.remove();
}
}

//------------------------------------------------------------------------------
function handleMouseOverAccessories(e) {

if (e.target.dataset.tooltip!='accesories') return
if (invisible_tooltip.children[0]) return


addingAccessories = true;


accessoriesMenuImgs[0].style=`background-image: url('./base/img/cloth/dresses/0/0 (${2}).jpg')`
accessoriesMenuImgs[1].style=`background-image: url('./base/img/cloth/dresses/0/0 (${10}).jpg')`
accessoriesMenuImgs[2].style=`background-image: url('./base/img/cloth/dresses/0/0 (${11}).jpg')`

setTimeout(()=> {

if (!addingAccessories) return

invisible_tooltip.append(accessoriesMenu)
accessoriesMenu.classList.add('clothesAccessoriesMenu')
}, 250);

}

function handleMouseOutAccessories(e) {
if (e.target.dataset.tooltip=='accessories') return

addingAccessories = false;

if ((e.relatedTarget==null)
||(e.relatedTarget.className=='bg')
||(e.relatedTarget.className=='bg1')
||(e.relatedTarget.className=='bg2')
||(e.relatedTarget.dataset.tooltip=='clothes')
||(e.relatedTarget.dataset.tooltip=='accesories')) {

accessoriesMenu.classList.remove('clothesAccessoriesMenu');
if (invisible_tooltip.firstChild) invisible_tooltip.firstChild.remove();
}
}

//ОБРАБОТЧИКИ ПОЛОСЫ ПРАВЫЙ БАР--------------------------------------------------------

document.addEventListener('click', clickHandleCountry)
document.addEventListener('click', clickHandleSearch)
document.addEventListener('click', clickHandleEnter)
//document.addEventListener('click', clickHandleCart)



function clickHandleCountry (e) {
if (!e.target.closest('.location')) return

navBarMenu.classList.add('navBarMenu_transform')
navBarMenuLeftBlack.style.display='block';


//прячем тултипы
handleMouseOutBarItem(e);
if (invisible_tooltip.firstChild) invisible_tooltip.firstChild.remove();
hiddenTooltip(e)

setTimeout(()=>{
navBarContent.append(countryContent)

countryContent.style.display='flex';
},350)


}


//ОБРАБОТЧИК КНОПКИ ЗАКРЫТЬ----------------------------------------------
document.addEventListener('click', clickHandleBtnClose);

function clickHandleBtnClose(e) {
if ((e.target.className=='btnClose')||(e.target.className=='navBarMenuLeftBlack_invisible')) {



for (item of navBarContent.children) {
item.style.display='none';
}
navBarMenuLeftBlack.style.display='none';
navBarMenu.classList.remove('navBarMenu_transform');

searchBar.value='';
phoneNumberValue.value=''
passwordValue.value=''

}
}


//ОБРАБОТЧИКИ КЛИКОВ СПИСКА СТРАН И ВЫБОРА ЯЗЫКА----------------------------------------------
document.addEventListener('click', clickHandleCountryListItem)
document.addEventListener('click', clickHandleContSelectLanguageBack)

function clickHandleCountryListItem(e) {

if (!(e.target.dataset.country=='selectCountry')) return

countryContent.style.display='none';


navBarContent.append(contSelectLanguage);
contSelectLanguage.style.display='flex';

switch(e.target.id) {
case 'country1': 
contSelectLanguage.lastElementChild.previousElementSibling.innerHTML='DEUTSCH';
contSelectLanguage.lastElementChild.innerHTML='ENGLISH';
break;

case 'country2': 
contSelectLanguage.lastElementChild.previousElementSibling.innerHTML='FRANCAIS';
contSelectLanguage.lastElementChild.innerHTML='ENGLISH';
break;

case 'country3': 
contSelectLanguage.lastElementChild.previousElementSibling.innerHTML='POLSKI';
contSelectLanguage.lastElementChild.innerHTML='ENGLISH';
break;

case 'country4': 
contSelectLanguage.lastElementChild.previousElementSibling.innerHTML='ENGLISH';
contSelectLanguage.lastElementChild.innerHTML='العربية';
break;

case 'country5': 
contSelectLanguage.lastElementChild.previousElementSibling.innerHTML='ENGLISH';
contSelectLanguage.lastElementChild.innerHTML='العربية';
break;

case 'country6': 
contSelectLanguage.lastElementChild.previousElementSibling.innerHTML='ENGLISH';
contSelectLanguage.lastElementChild.innerHTML='العربية';
break;

case 'country7': 
contSelectLanguage.lastElementChild.previousElementSibling.innerHTML='ENGLISH';
contSelectLanguage.lastElementChild.innerHTML='';
break;

case 'country8': 
contSelectLanguage.lastElementChild.previousElementSibling.innerHTML='ENGLISH';
contSelectLanguage.lastElementChild.innerHTML='';
break;

case 'country9': 
contSelectLanguage.lastElementChild.previousElementSibling.innerHTML='РУССКИЙ';
contSelectLanguage.lastElementChild.innerHTML='ENGLISH';
break;

case 'country10': 
contSelectLanguage.lastElementChild.previousElementSibling.innerHTML='РУССКИЙ';
contSelectLanguage.lastElementChild.innerHTML='ENGLISH';
break;

case 'country11': 
contSelectLanguage.lastElementChild.previousElementSibling.innerHTML='DEUTSCH';
contSelectLanguage.lastElementChild.innerHTML='ENGLISH';
break;

case 'country12': 
contSelectLanguage.lastElementChild.previousElementSibling.innerHTML='ENGLISH';
contSelectLanguage.lastElementChild.innerHTML='РУССКИЙ';
break;

}

}


function clickHandleContSelectLanguageBack(e) {
if (!(e.target.id=='contSelectLanguageBack')) return

contSelectLanguage.style.display='none';
countryContent.style.display='flex';
}


function clickHandleSearch(e) {
if (!e.target.closest('.search')) return

navBarMenu.classList.add('navBarMenu_transform')
navBarMenuLeftBlack.style.display='block';


//прячем тултипы
handleMouseOutBarItem(e);
if (invisible_tooltip.firstChild) invisible_tooltip.firstChild.remove();
hiddenTooltip(e)

setTimeout(()=>{
navBarContent.append(searchContent)

searchContent.style.display='flex';
},350)
}



function clickHandleEnter(e) {
if (!e.target.closest('.enterUser')) return

navBarMenu.classList.add('navBarMenu_transform')
navBarMenuLeftBlack.style.display='block';


//прячем тултипы
handleMouseOutBarItem(e);
if (invisible_tooltip.firstChild) invisible_tooltip.firstChild.remove();
hiddenTooltip(e)

setTimeout(()=>{
navBarContent.append(enterContent)

enterContent.style.display='flex';
},350)

phoneCodeList.style.display='none';
}

document.addEventListener('click', clickHandleAuthBtnEnterUser)

function clickHandleAuthBtnEnterUser(e) {
if (e.target.className!='authorizationBtn') return

}

document.addEventListener('click', clickHandleChoosePhoneCode)

function clickHandleChoosePhoneCode(e) {
if (!(e.target.closest('#choosePhoneCode'))) return
phoneCodeList.style.display='flex';
}



document.addEventListener('click', clickHandleChoosePhoneCodeItem)

function clickHandleChoosePhoneCodeItem(e) {
if (!(e.target.closest('.itemPhoneCodeList'))) return

let codePhone = document.querySelector('#codePhone');

codePhone.innerHTML = e.target.closest('.itemPhoneCodeList').firstChild.nodeValue;

phoneCodeList.style.display='none';
}



