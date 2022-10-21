// Need refactor? 
export const getCurrentTheme = () => {
    let theme = localStorage.getItem("darkMode")

    if (theme === null || !["true", "false"].includes(theme)) {
        localStorage.setItem("darkMode", "false");
        theme = localStorage.getItem("darkMode");
    }

    if (theme == "true") {
        return true
    } else {
        return false
    }
}

export const setTheme = () => {
    let theme = getCurrentTheme()
    // console.log("Changing theme!")

    if (theme === true) {
        localStorage.setItem("darkMode", "false")
    } else {
        localStorage.setItem("darkMode", "true")
    }
}