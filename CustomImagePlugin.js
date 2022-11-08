const plugin = ({widgets, simulator, vehicle}) => {
    const container = document.createElement("div")

    container.setAttribute("style", `height: 100%; width: 100%; background-color: #679c92`)
    container.innerHTML = (`
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <div class="text-center">
        <br>
        <br>
        <img class="mb-4" src="https://raw.githubusercontent.com/Fowler1234/custom-plugins/5ab2ed07bd3d7ea7b5102b7588b3b5e9157726f3/logo_safe_max_2.png" height="110" width="110" alt="SafetyMax">
        <h1 class="smartphone-text" style="color: black; backgroundColor: '#679c92' font-family: 'Lato'; box-sizing: border-box; padding-top: 25px; padding-right: 12px; padding-left: 12px; padding-bottom: 25px;">
        Welcome, Carla!!
        </h1>
        <div id="bt1">Click me 2</button>
    </div>
    `);

    let ourButton = container.querySelector("#bt1");
    ourButton.onclick = () => {
        ourButton.style.backgroundColor = "blue";
    }

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
