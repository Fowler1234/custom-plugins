const plugin = ({widgets, simulator, vehicle}) => {
    const container = document.createElement("div")
    container.setAttribute("style", `height: 100%; width: 100%;`)
    
    let options = {
    method: 'GET',
    headers: {}
    };

    const response =  await (await fetch('https://fowler1234.github.io/custom-plugins/plugin.html', options)).text();
    console.log(response);
    
    container.innerHTML = (`
       <div style="max-width: fit-content; margin: 0 auto; position: relative;">
	     <h1 class="smartphone-text" style="color: red; font-family: 'Lato'; width: 100%;height: 100%; box-sizing: border-box; padding-top: 25px; padding-right: 12px; padding-left: 12px; padding-bottom: 25px;">
          Welcome, Carla!!
         </h1>
     </div>
    `);

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
