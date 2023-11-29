(() => {
    const refs = {
        menu:document.querySelector('[open-menu]'),
        opened:document.querySelector('[menu]'),
        back:document.querySelector('backdrop'),
        close:document.querySelector('[close-menu]')
    };
    function openMenu(){
      refs.opened.classList.toggle('section_menu')
      refs.opened.classList.toggle("menu_active") 
      document.body.classList.toggle("lock")
    }
    refs.menu.addEventListener("click", openMenu);
    refs.close.addEventListener("click", openMenu);
  })();