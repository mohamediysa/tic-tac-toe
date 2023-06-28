let what_to_play = document.querySelectorAll(".what_to_play")
let choise = document.querySelectorAll(".choise")
let first_move = "xo"[Math.floor(Math.random() * 2)]
let x = 0;
let o = 0;
choise.forEach(e => {
    e.addEventListener("click", () => {
        if (e.dataset.alredy_clicked != "true") {
            e.innerText = first_move
            if (first_move == "o") {
                e.dataset.choosen = "o"
                first_move = "x"
            } else {
                e.dataset.choosen = "x"
                first_move = "o"
            }
        }
        e.dataset.alredy_clicked = "true"
        wining_pattern.forEach(g => {
            let [a, b, c] = [g[0], g[1], g[2]]
            if (choise[a].dataset.choosen != null && choise[b].dataset.choosen != null && choise[c].dataset.choosen != null) {
                if (choise[a].dataset.choosen == choise[b].dataset.choosen && choise[b].dataset.choosen == choise[c].dataset.choosen) {
                    choise[a].style.background = win_color
                    choise[b].style.background = win_color
                    choise[c].style.background = win_color
                    choise.forEach(l => {
                        l.dataset.alredy_clicked = "true"
                    })
                    let winner = choise[a].dataset.choosen;
                    if (winner == "x") {
                        x++
                        player_x.innerText = x
                    } else {
                        o++
                        player_o.innerText = o
                    }
                }
            }
        })
    })
})
let wining_pattern = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [3, 4, 5], [2, 4, 6], [2, 5, 8], [6, 7, 8]
]
let win_color = "#48cc48"
play_again.addEventListener("click", () => {
    choise.forEach(e => {
        e.innerText = ""
        e.removeAttribute("data-alredy_clicked")
        e.removeAttribute("data-choosen")
        e.removeAttribute("style")
    })
})