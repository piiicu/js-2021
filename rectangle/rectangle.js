document.querySelector('div')
        .addEventListener("click", function () {
            document.querySelector('div')
                    .classList.add("disappear")
        })

document.querySelector('div')
        .addEventListener("animationend", function () {
            document.querySelector("div")
                    .classList.remove("disappear")
        })

// arrow function: inlocuirea denumirii "function" cu sageata "=>"
        document.querySelector('div')
        .addEventListener("click", () => document.querySelector('div').classList.add("disappear"))