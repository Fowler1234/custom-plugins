const plugin = ({widgets, simulator, vehicle}) => {
    const page0 = document.createElement("div")
    page0.setAttribute("style", `height: 100%; width: 100%; background-color: #679c92`)
    page0.innerHTML = (`
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet">
    <div class="text-center p-5" style="margin: 70px;">
    <div style="border-radius: 0 0 15px 15px; background-color: #4b756d">
            <img class="mb-4" src="https://raw.githubusercontent.com/Fowler1234/custom-plugins/5ab2ed07bd3d7ea7b5102b7588b3b5e9157726f3/logo_safe_max_2.png" height="110" width="110" alt="SafeMax">
            <h3 style="padding-bottom: 20px;margin:-20px;font-family: 'Staatliches', cursive;color:white">SAFEMAX</h3>
    </div>


    <h3 class="driver-update" style="color: white; backgroundColor: '#679c92' font-family: 'Lato'; box-sizing: border-box; padding-top: 25px; padding-right: 12px; padding-left: 12px; padding-bottom: 25px;">
        Driver detected
    </h3>
    </div>
    `);

    const page1 = document.createElement("div")
    page1.setAttribute("style", `height: 100%; width: 100%; background-color: #679c92`)
    page1.innerHTML = (`
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <div class="text-center p-5" style="margin: 70px;">
        <div style="border-radius: 0 0 15px 15px; background-color: #4b756d">
        <img class="mb-4" src="https://raw.githubusercontent.com/Fowler1234/custom-plugins/5ab2ed07bd3d7ea7b5102b7588b3b5e9157726f3/logo_safe_max_2.png" height="110" width="110" alt="SafeMax">
        <h3 style="padding-bottom: 20px;margin:-20px;font-family: 'Copperplate', cursive;color:white">SafeMax</h3>
        </div>
        <h1 class="smartphone-text" style="color: white; backgroundColor: '#679c92' font-family: 'Lato'; box-sizing: border-box; padding-top: 25px; padding-right: 12px; padding-left: 12px; padding-bottom: 25px;">
            Welcome, Carla!
        </h1>
    </div>
  
    </div>
    `);

    const page2 = document.createElement("div")
    page2.setAttribute("style", `height: 100%; width: 100%; background-color: #679c92`)
    page2.innerHTML = (`
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fowler1234.github.io/custom-plugins/breathing.css" crossorigin="anonymous">
    <div class="text-center p-5" style="margin: 70px;">
    <br>
    <br>
    <h3 class="smartphone-text" style="color: white; backgroundColor: '#679c92' font-family: 'Lato'; box-sizing: border-box;">
        Take a minute to relax before you drive.
        </h3>

    <div class="container" style="z-index: 9999;">
        <div class="circle"></div>
    </div>
    <button class="btn btn-lg btn-primary btn-block" >Skip for today</button>
    </div>
    `);

    const page3 = document.createElement("div")
    page3.setAttribute("style", `height: 100%; width: 100%; background-color: #679c92`)
    page3.innerHTML = (`
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <div class="text-center p-5" style="margin: 70px;">
    <div style="border-radius: 0 0 15px 15px; background-color: #4b756d">
    <img class="mb-4" src="https://raw.githubusercontent.com/Fowler1234/custom-plugins/5ab2ed07bd3d7ea7b5102b7588b3b5e9157726f3/logo_safe_max_2.png" height="110" width="110" alt="SafeMax">
    <h3 style="padding-bottom: 20px;margin:-20px;font-family: 'Copperplate', cursive;color:white">SafeMax</h3>
    </div>
    <br>
    <br>
    <br>
    <br>
    <h3 class="smartphone-text" style="color: white; backgroundColor: '#679c92' font-family: 'Lato'; box-sizing: border-box;">
       Have a safe drive!
    </h3>
    </div>
    `);
    
    let boxGlobal = null

    widgets.register("CustomImage", (box) => {
        boxGlobal = box
        box.injectNode(page0)
        return () => {
            boxGlobal = null
            // Deactivation function for clearing intervals or such.
        }
    })

    return {
        set_page: (text) => {
            if (boxGlobal !== null) {
                    if (text == "1"){
                        boxGlobal.injectNode(page1)
                    }
                    else if (text == "2"){
                        boxGlobal.injectNode(page2)
                    }
                    else if(text == "3"){
                        boxGlobal.injectNode(page3)
                    }
                    else{
                        page0.querySelector(".driver-update").textContent = text
                        boxGlobal.injectNode(page0)   
                    }
            }
        }
    }
}

export default plugin
