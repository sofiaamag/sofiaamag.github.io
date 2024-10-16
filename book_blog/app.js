

const switchTheme = () => {
    const rootElem = document.documentElement;
    const dataTheme = rootElem.getAttribute('data-theme');

    newTheme = (dataTheme === 'light') ? 'dark' : 'light';

    rootElem.setAttribute('data-theme', newTheme);
}


document.querySelector('#theme-switcher').addEventListener('click', switchTheme);
