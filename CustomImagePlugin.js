const plugin = ({widgets, simulator, vehicle}) => {
    const container = document.createElement("div")
    container.setAttribute("style", `height: 100%; width: 100%;`)
    
     let options = {
    method: 'GET',
    headers: {}
    };

    const response =  await (await fetch('https://fowler1234.github.io/custom-plugins/plugin.html', options)).text();
    console.log(response);
 
    container.innerHTML = response;

    let boxGlobal = null

    widgets.register("CustomImage", (box) => {
        boxGlobal = box
        box.injectNode(container)
        return () => {
            boxGlobal = null
            // Deactivation function for clearing intervals or such.
        }
    })

    return {
        set_text: (text) => {
            if (boxGlobal !== null) {
                container.querySelector(".smartphone-text").textContent = text
            }
        }
    }
}

export default plugin
