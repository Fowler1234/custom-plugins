const TemperatureTile = (isAirConOn, initialTemperature, finalTemperature) => {
    return (box) => {
        const div = document.createElement("div")
        const label = 'AirTemperature'

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
            <div style="display: flex; flex-direction: column; height: 100%; background-color: rgb(31 41 55); color: white; padding: 35px 20px; user-select: none; align-items: center;" data-signal="${isAirConOn}">
                <div style="margin-bottom: 10px;font-size: 1.1em;font-weight: bold;margin-top: auto;overflow: hidden;text-overflow: ellipsis;width: fit-content; max-width: 100%;" title="${label}">${label}</div>
                <div style="font-size: 1.1em; margin-bottom: 25px;" class="signal-value"><span></span> °C</div>
                <div style="margin-top: auto;"><i style="font-size: 3em;" class="fa-solid fa-temperature-half"></i></div>
            </div>
        </div>
        `)

        const intervalId = setInterval(async () => {
            const signalValueEl = div.querySelector(`[data-signal="${isAirConOn}"] .signal-value > span`)
            if (signalValueEl !== null) {
                signalValueEl.textContent = initialTemperature
            } else {
                throw new Error(`div couldn't be found.`)
            }
        }, 300)

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
        "TemperatureTile",
        TemperatureTile("Vehicle.Cabin.HVAC.IsAirConditioningActive", 35, 25)
    )
}

export default plugin
