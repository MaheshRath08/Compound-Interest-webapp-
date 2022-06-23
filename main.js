let p = document.getElementById("p")
let r = document.getElementById("r")
let t = document.getElementById("t")
let btnEl = document.getElementById("btn")
let containerEl = document.getElementById("container")

btnEl.addEventListener("click", () => {
    let ci = eval()
    if (!(isNaN(ci))){
        containerEl.innerHTML = `<h1>Compound Interest is ${ci}</h1><button onclick="location.reload()">Retry</button>`
    }else{
        alert("Type numerical values")
        location.reload()
    }
})

function eval(){
    p = p.value
    r= r.value
    t= t.value
    if (p && r && t){
        let a = p*(Math.pow((1 + r/100),t))
        let ci = a - p
        return ci.toFixed(2)
    }
}