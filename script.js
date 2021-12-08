const types =
    [
        { bun: ["Brown Bread", "Whole Wheat", "Multigrain", "White Bread"] },
        { cheese: ["No cheese", "Double Cheese", "CheeseBurst!", "Single Cheese"] },
        { tikki: ["Paneer Tikki", "Chicken Tikki", "Soyabean Tikki", "Aalu Tikki"] },
        { sauce: ["Mayonise", "Thousand Island", "Mustard Sause", "Green Chili Sause"] },
        { stuffing: ["Olives", "Lettuce", "Onions", "Tomatoes"] }
    ]

const optNames = ["bun", "cheese", "tikki", "sauce", "stuffing"]
var app = new Vue({
    el: '#root',
    data: {
        burger: [],
        currentNum: 0,
        options: ["Brown Bread", "Whole Wheat", "Multigrain", "White Bread"],
        currentChoice: "bun",
    },
    // methods: {
    //     addBuns: function () { },
    //     addItem: function () { },
    //     confirmSelect: function () { },
    //     signOut: function () { },
    // }
})
const myform = document.querySelector("#myform")
const smallwrap = document.querySelector("#smallwrap")
let bunColor
myform.addEventListener("click", (event) => {
    event.stopPropagation()
    if (app.currentNum < 4) {
        myform.querySelector(`input[value="${event.target.innerText}"]`).checked = true
        // myform.style.display = "none"
        var thing = document.createElement("div")
        thing.classList.add(app.currentChoice)
        var choosed = myform.querySelector("input[name=option]:checked")
        thing.id = choosed.value
        thing.innerText = choosed.value
        if (app.currentNum == 0) {
            switch (thing.innerText) {
                case "Brown Bread": {
                    bunColor = "chocolate"
                    break
                }
                case "Whole Wheat": {
                    bunColor = "rgb(245, 185, 73)"
                    break
                }
                case "Brown Bread": {
                    bunColor = "chocolate"
                    break
                }
                case "White Bread": {
                    bunColor = "rgb(245, 185, 73)"
                    break
                }
            }
            thing.style.backgroundColor = bunColor
        }
        document.querySelector("#bottombun").style.backgroundColor = bunColor
        if (!((choosed.value) == "No cheese"))
            smallwrap.appendChild(thing)
        if (choosed.value == 'Double Cheese') {
            var newThing = document.createElement("div")
            newThing.classList.add(app.currentChoice)
            smallwrap.appendChild(newThing)
        }
        app.burger.push(choosed.value)
        app.currentNum++
        app.currentChoice = optNames[(app.currentNum)]
        app.options = types[(app.currentNum)][app.currentChoice]
    }
    else {
        myform.querySelector(`input[value="${event.target.innerText}"]`).checked = true
        // myform.style.display = "none"
        var thing = document.createElement("div")
        thing.classList.add(app.currentChoice)
        var choosed = myform.querySelector("input[name=option]:checked")
        thing.id = choosed.value
        thing.innerText = choosed.value
        console.log(thing.innerText);
        switch (thing.innerText) {
            case "Olives": {
                thing.style.backgroundColor = "darkgreen"
                break
            }
            case "Lettuce": {
                thing.style.backgroundColor = "green"
                break
            }
            case "Onions": {
                thing.style.backgroundColor = "pink"
                break
            }
            case "Tomatoes": {
                thing.style.backgroundColor = "crimson"
                break
            }
        }
        smallwrap.appendChild(thing)
        app.burger.push(choosed.value)
        document.querySelector("#action").innerHTML = "<h3>Do You want a burger like this?</h3>"
        document.querySelector("#myform").remove()
        const finbut = document.createElement("button")
        finbut.id = "final"
        finbut.innerHTML = "<h1>Yes, Show my Bill</h1>"
        document.querySelector("#root").appendChild(finbut)
        document.querySelector("#final").addEventListener("click", () => {
            document.querySelector("#action").innerHTML = "<h3>Your Bill</h3>"
            finbut.remove()
            document.querySelector("#bigwrap").style.display = "none"
            document.querySelector("#bill").style.display = "initial"
            const orBut = document.createElement("button")
            orBut.id = "order"
            orBut.innerHTML = "<h1>Buy!</h1>"
            document.querySelector("#root").appendChild(orBut)
            document.querySelector("#order").addEventListener("click", () => {
                document.querySelector("#action").innerHTML = "<h3>Your Order is Ready!</h3>"
                document.querySelector("#bigwrap").style.display = "flex"
                document.querySelector("#bigwrap").style.flexDirection = "column"
                // document.querySelector("#smallwrap").children
                document.querySelector("#bill").style.display = "none"
                orBut.remove()
            })
        })

    }
})