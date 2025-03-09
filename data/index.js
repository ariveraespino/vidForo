
const commonData = {
    navigation: [
        {url:'/index.html', label:'Inicio'},
        {url:'/contactme.html', label:'Acerca de FLL'},
    ]
}

export const getPageContext = (pagePath) => {
    let pageData = {};
    switch (pagePath) {
        case  '/index.html':
            break;
        case '/contactme.html':
            break;
        default:
            break;
    }
    return {
        ...commonData,
        ...pageData
    }
}