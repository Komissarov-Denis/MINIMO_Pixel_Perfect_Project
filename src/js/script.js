window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.promo_header_hamburger-box-menu_menu_list');
  const menuItem = document.querySelectorAll('.promo_header_hamburger-box-menu_menu_list_item');
  const hamburger = document.querySelector('.promo_header_hamburger-box-menu_hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('promo_header_hamburger-box-menu_hamburger_active');
    menu.classList.toggle('promo_header_hamburger-box-menu_menu_list_active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('promo_header_hamburger-box-menu_hamburger_active');
      menu.classList.toggle('promo_header_hamburger-box-menu_menu_list_active');
    });
  });
});
