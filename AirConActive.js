const AirConditioningTile = (vssSignal, vehicle) => {
    return (box) => {
        const div = document.createElement("div")
        const label = 'Air Conditioning'

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
            <div style="display: flex; flex-direction: column; height: 100%; background-color: rgb(103 156 146); color: white; padding: 35px 20px; user-select: none; align-items: center;" data-signal="${vssSignal}">
                <div style="margin-bottom: 10px;font-size: 1.1em;font-weight: bold;margin-top: auto;overflow: hidden;text-overflow: ellipsis;width: fit-content; max-width: 100%;" title="${label}">${label}</div>
                <div style="font-size: 1.1em; margin-bottom: 25px;" class="signal-value"><span>Off</span></div>
                <div style="margin-top: auto;"><i style="font-size: 3em;" class="fa-solid fa-wind"></i></div>
            </div>
        </div>
        `)

        const intervalId = setInterval(async () => {
            const strippedApi = vssSignal.split(".").slice(1).join(".")
            const isAirConOn = await vehicle[strippedApi].get()
            const signalValueEl = div.querySelector(`[data-signal="${vssSignal}"] .signal-value > span`)
            if(signalValueEl !== null) {
                if(isAirConOn) {
                    signalValueEl.textContent = "On"
                } else {
                    signalValueEl.textContent = "Off"
                }
            } else {
                throw new Error(`div couldn't be found.`)
            }
        }, 2000)

        box.injectNode(div)

        loadScript(box.window, "https://kit.fontawesome.com/c37d34b852.js")

        return () => {
            clearInterval(intervalId)
        }
    }
}

const loadScript = (boxWindow, url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const script = boxWindow.document.createElement("script");
            script.defer = true;

            script.src = url;
            boxWindow.document.head.appendChild(script);
            script.addEventListener("load", () => resolve());
        } catch (e) {
            reject();
        }
    });
}

const plugin = ({widgets, simulator, vehicle}) => {
    widgets.register(
        "AirConditioningTile",
        AirConditioningTile("Vehicle.Cabin.HVAC.IsAirConditioningActive", vehicle)
    )
}

export default plugin
