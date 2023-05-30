function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    const pfp = document.querySelector("#profile img")

    if (html.classList.contains("light")) {

      pfp.setAttribute("src", "./assets/avatar-light.png")
    } else {

      pfp.setAttribute("src", "./assets/avatar.png")
    }
}