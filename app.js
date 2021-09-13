const Class = (cl, id) => document.getElementsByClassName(cl)[id]
const Id = id => document.getElementById(id)

const SvG = (input) => {
    let result = ""

    for (let i = 0; i < input.length; i++) {
        if (i > 0 && input[i - 1] === "<" || input[i - 1] === "/") result += input[i].toUpperCase()
        else if (i > 1 && input[i - 1] === "-") result += input[i].toUpperCase()
        else {
            if (input[i] !== "-") result += input[i]

        }
    }

    return result
}


Class("func", 0).addEventListener("click", () => {
    Class("result", 0).value = SvG(Class("enter", 0).value)
    if (Class("enter", 0).value.length > 0) {
        Class("result", 0).select()
        Class("result", 0).setSelectionRange(0, 99999)
        navigator.clipboard.writeText(Class("result", 0).value)
        Class("copied", 0).style.display = "flex"
    }
})

Class("close", 0).addEventListener("click", () => {
    Class("copied", 0).style.display = "none"
})