
function domManipulation(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.setAttribute("href",reactElement.props.href)
    domElement.setAttribute("target",reactElement.props.target)
    domElement.innerHTML= reactElement.children
    container.appendChild(domElement)

}

const reactElement={
    type:"a",
    props:
    {
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to visit"
}
const container = document.getElementById("root")

domManipulation(reactElement,container)
