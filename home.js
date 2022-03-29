const btn_hide = document.getElementById('btn-hide');
const btn_appear = document.getElementById('btn-appear');
const nav_block = document.getElementById('nav-block');
const collapsed_nav = document.getElementById('collapsed-nav-block');

btn_hide.addEventListener('click', function() {
    console.log('hide');
    nav_block.classList.add('hide');
    collapsed_nav.classList.remove('hide');
})

btn_appear.addEventListener('click', function() {
    console.log('appear');
    collapsed_nav.classList.add('hide');
    nav_block.classList.remove('hide');
})

const links = document.getElementsByTagName('a');

for (let i=0; i<links.length; i++)
{
    links[i].setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}