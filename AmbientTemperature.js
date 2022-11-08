import TemperatureTile from "./TemperatureTile.js"

const plugin = ({widgets, simulator, vehicle}) => {
    widgets.register(
        "AmbientTemperature",
        TemperatureTile("Vehicle.Cabin.HVAC.IsAirConditioningActive", 35, 25)
    )
}

export default plugin
