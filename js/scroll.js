const scrollFunc = () => {
    const links = document.querySelectorAll('.scroll-link');

    const newArray = [...links];

    seamless.polyfill();

    newArray.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
        
            const id = link.getAttribute('href').substring(1);
            const section = document.getElementById(id);
            
            if (section) {
                seamless.elementScrollIntoView(section, {
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })
    })
}

scrollFunc();
