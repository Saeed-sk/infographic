// dot's
let dots = document.querySelectorAll('.dot')
for (let i = 0; i <dots.length; i++) {
    dots[i].style.animationDuration = `1.${i}s`
}

let lines = document.querySelectorAll('.svg-line')
let headings = document.querySelectorAll('.heading')
let paragraphs = document.querySelectorAll('.paragraph')


for (let i = 0; i < headings.length; i++) {
    // mouse over
    headings[i].addEventListener("mouseover", () => {
        for (let j = 0; j < lines.length; j++) {
            if (j === i) {
                lines[i].classList.add('get-in')
                headings[j].classList.add('text-shadow')
            }
        }
        for (let j = 0; j < paragraphs.length; j++) {
            if (j === i) {
                paragraphs[i].classList.remove('scale-out')
                paragraphs[i].classList.add('tracking')
            }
        }
    })
    // mouse out
    headings[i].addEventListener("mouseout", () => {
        for (let j = 0; j < lines.length; j++) {
            if (j === i) {
                lines[i].classList.remove('get-in')
                headings[j].classList.remove('text-shadow')

            }
        }
        for (let j = 0; j < paragraphs.length; j++) {
            if (i === j) {
                paragraphs[i].classList.remove('tracking')
                paragraphs[i].classList.add('scale-out')
            }
        }
    })
}
