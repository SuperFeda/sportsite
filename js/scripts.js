const main_tag= document.getElementById("main")

const age_input= document.getElementById("age-input")
const weight_input= document.getElementById("weight-input")
const height_input= document.getElementById("height-input")
const sex_input= document.getElementById("sex-input")
const active_input= document.getElementById("active-input")


document.getElementById("calc-btn").addEventListener("click", () => {
    let varib = false
    if (age_input.value === "") {
        age_input.style.border = "2px solid red"
        varib = true
    }
    if (weight_input.value === "") {
        weight_input.style.border = "2px solid red"
        varib = true
    }
    if (height_input.value === "") {
        height_input.style.border = "2px solid red"
        varib = true
    }
    if (active_input.value === "") {
        active_input.style.border = "2px solid red"
        varib = true
    }

    if (varib === true) {
        return null
    }

    let bmr = BMR(age_input.value, height_input.value, weight_input.value, sex_input.value)

    genResults(
        bmr*active_input.value,
        weight_input.value
    )

})

age_input.addEventListener("click", () => {age_input.style.border = "2px solid transparent"})
weight_input.addEventListener("click", () => {weight_input.style.border = "2px solid transparent"})
height_input.addEventListener("click", () => {height_input.style.border = "2px solid transparent"})
active_input.addEventListener("click", () => {active_input.style.border = "2px solid transparent"})

function BMR(age, height, weight, sex) {
    let bmr
    if (sex === "woman") {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
    } else if (sex === "man") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    }
    return bmr
}

function genResults(bmr, weight) {
    main_tag.innerHTML += `
    <div class="results">
        <div class="results-card">
            <h2 class="results-title">Суточная норма:</h2>
            <p class="results-p">Калории: ${Math.round(bmr)}</p>
            <p class="results-p">Белки: ${Math.round(weight*0.8)} г. (для обычного человека); ${Math.round(weight*1.55)} г. (для спортсменов)</p>
            <p class="results-p">Жиры: ${Math.round((bmr*0.3)/9)} г.</p>
            <p class="results-p">Углеводы: ${Math.round((bmr*0.55)/4)} г.</p>
        </div>
        <div class="results-card">
            <h2 class="results-title">Функции БЖУ:</h2>
            <p class="results-p">Б:</p>
            <p class="results-p">Ж:</p>
            <p class="results-p">У:</p>
        </div>
        <div class="results-card">
            <h2 class="results-title">Что способствует:</h2>
            <p class="results-p">Похудению:</p>
            <p class="results-p">Набору веса:</p>
        </div>
        <div class="results-card">
            <h2 class="results-title">Витамины:</h2>
            <p class="results-p">...</p>
        </div>
        <div class="results-card">
            <h2 class="results-title">Виды тренеровок:</h2>
            <p class="results-p">...</p>
        </div>
    </div>
    `
}
