function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childrean
    domElement.setAttribute('href', reactElement.props.href)

    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    
    domElement.innerHTMl = reactElement.childrean
    
    for (const prop in reactElement.props) {
        if(prop == 'childrean') continue ;

        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)


}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    childrean: 'click me to visit google.com'
}



const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);