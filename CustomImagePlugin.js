const plugin = ({widgets, simulator, vehicle}) => {
        const page1 = document.createElement("div")
        page1.setAttribute("style", `height: 100%; width: 100%; background-color: #679c92`)
        page1.innerHTML = (`
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <div class="text-center p-5" style="margin: 70px;">
        <br>
            <br>
            <img class="mb-4" src="https://raw.githubusercontent.com/Fowler1234/custom-plugins/5ab2ed07bd3d7ea7b5102b7588b3b5e9157726f3/logo_safe_max_2.png" height="110" width="110" alt="SafetyMax">
            <h1 class="smartphone-text" style="color: black; backgroundColor: '#679c92' font-family: 'Lato'; box-sizing: border-box; padding-top: 25px; padding-right: 12px; padding-left: 12px; padding-bottom: 25px;">
            Welcome, Carla!!
            </h1>
            <div id="bt1">Click me 2</button>
        </div>
        `);

        let ourButton = page1.querySelector("#bt1");
        ourButton.onclick = () => {
            ourButton.style.backgroundColor = "blue";
        }

        const page2 = document.createElement("div")
        page2.setAttribute("style", `height: 100%; width: 100%; background-color: #679c92`)
        page2.innerHTML = (`
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fowler1234.github.io/custom-plugins/breathing.css" crossorigin="anonymous">
        <div class="text-center p-5" style="margin: 70px;">
        <br>
        <br>
        <h2 class="smartphone-text" style="color: black; backgroundColor: '#679c92' font-family: 'Lato'; box-sizing: border-box;">
            You seem nervous today ... do you mind a meditation?
            </h2>

        <div class="container" style="z-index: 9999;">
            <div class="circle"></div>
        </div>
        <button class="btn btn-lg btn-primary btn-block" >Skip for today</button>
        </div>
        `);
    
    let boxGlobal = null

    widgets.register("CustomImage", (box) => {
        boxGlobal = box
        box.injectNode(page1)
        return () => {
            boxGlobal = null
            // Deactivation function for clearing intervals or such.
        }
    })

    return {
        set_page: (page) => {
            if (boxGlobal !== null) {
                if(page == "1"){
                    boxGlobal.injectNode(page1)
                }
                if(page == "2"){
                    boxGlobal.injectNode(page2)
                }
            }
        }
    }
}

export default plugin
