const LogoTile = (vssSignal, initialTemperature, finalTemperature, vehicle) => {
    return (box) => {
        const div = document.createElement("div")
        const label = 'AirTemperature'
        var currentTemperature = initialTemperature

        div.innerHTML = (`
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'Lato', sans-serif;
        }
        </style>
        <div style="height: 100%; display: flex; flex-direction: column;">
            <div style="display: flex; flex-direction: column; height: 100%; background-color: rgb(103 156 146); color: white; padding: 35px 20px; user-select: none; align-items: center;">
                <img class="mb-4" src="https://raw.githubusercontent.com/Fowler1234/custom-plugins/5ab2ed07bd3d7ea7b5102b7588b3b5e9157726f3/logo_safe_max_2.png" height="110" width="110" alt="SafetyMax">                    
            </div>
        </div>
        `)

        box.injectNode(div)

        return () => {
            clearInterval(intervalId)
        }
    }
}

const plugin = ({widgets, simulator, vehicle}) => {
    widgets.register(
        "LogoTile",
        LogoTile()
    )
}

export default plugin