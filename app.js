const Class = (cl, id) => document.getElementsByClassName(cl)[id]
const Id = id => document.getElementById(id)

const SvG = (input) => {
    let result = ""

    for (let i = 0; i < input.length; i++) {
        if (i > 0 && input[i - 1] === "<") result += input[i].toUpperCase()
        else if (i > 1 && input[i - 1] === "-") result += input[i].toUpperCase()
        else {
            if (input[i] !== "-") result += input[i]

        }
    }

    return result
}


Class("func", 0).addEventListener("click", () => {
    Class("result", 0).value = SvG(Class("enter", 0).value)
})