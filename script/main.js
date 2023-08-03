    let lenght1 = document.getElementById("lenght1")
    let lenght2 = document.getElementById("lenght2")

    let option1 = document.getElementById("option1")
    let option2 = document.getElementById("option2")

    function check() {
        if (option1.value == "m") {
            if (option2.value == "cm") {
                lenght2.value = parseFloat(lenght1.value) * 100
            }else if (option2.value == "in") {
                lenght2.value = parseFloat(lenght1.value) * 39.37
            }else if (option2.value == "km") {
                lenght2.value = parseFloat(lenght1.value) / 1000
            }
        }
        else if (option1.value == "cm") {
            if (option2.value == "m") {
                lenght2.value = parseFloat(lenght1.value) / 100  
            }else if (option2.value == "in") {
                lenght2.value = parseFloat(lenght1.value) / 2.54
            }else if (option2.value == "km") {
                lenght2.value = parseFloat(lenght1.value) / 100000
            }
        }
        else if (option1.value == "in") {
            if (option2.value == "cm") {
                lenght2.value = parseFloat(lenght1.value) * 2.54
            }else if (option2.value == "m") {
                lenght2.value = parseFloat(lenght1.value) / 39.37   
            }else if (option2.value == "km") {
                lenght2.value = parseFloat(lenght1.value) / 39370
            }
        }
        else if (option1.value == "km") {
            if (option2.value == "m") {
                lenght2.value = parseFloat(lenght1.value) * 1000
            }else if (option2.value == "cm") {
                lenght2.value = parseFloat(lenght1.value) * 100000
            }else if (option2.value == "in") {
                lenght2.value = parseFloat(lenght1.value) * 39370
            }
        }
    } 