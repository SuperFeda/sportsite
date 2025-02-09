const main_tag= document.querySelector("main")

const age_input= document.getElementById("age-input")
const weight_input= document.getElementById("weight-input")
const height_input= document.getElementById("height-input")
const active_input= document.getElementById("active-input")

document.getElementById("burger-btn").addEventListener("click", () => {
    document.getElementById("header-navbar").classList.toggle("no-display")
})

const generateBtn = () => {
    let age= document.getElementById("age-input")
    let sex= document.getElementById("sex-input")
    let weight= document.getElementById("weight-input")
    let height= document.getElementById("height-input")
    let active= document.getElementById("active-input")
    
    let varib = false
    if (age.value === "") {
        age_input.style.border = "2px solid red"
        varib = true
    }
    if (weight.value === "") {
        weight_input.style.border = "2px solid red"
        varib = true
    }
    if (height.value === "") {
        height_input.style.border = "2px solid red"
        varib = true
    }
    if (active.value === "") {
        active_input.style.border = "2px solid red"
        varib = true
    }

    if (varib === true) {
        return null
    }

    let bmr = BMR(age.value, height.value, weight.value, sex.value)

    genResults(
        bmr*active.value,
        weight.value
    )
}

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
    } else if (sex === "hermaphrodite") {
        bmr = 289.122 + (20.124 * weight) + (2.072 * height) - (8.176 * age)
    }
    return bmr
}

function genResults(bmr, weight) {
    try {
        document.getElementById("result-box").remove()
    } catch (e) {}

    main_tag.innerHTML += `
    <div class="results" id="result-box">
        <div class="results-card">
            <h2 class="results-title">Суточная норма:</h2>
            <p>Калории: ${Math.round(bmr)}</p>
            <p>Белки: ${Math.round(weight*0.8)} г. (для обычного человека); ${Math.round(weight*1.55)} г. (для спортсменов)</p>
            <p>Жиры: ${Math.round((bmr*0.3)/9)} г.</p>
            <p>Углеводы: ${Math.round((bmr*0.55)/4)} г.</p>
        </div>
        <div class="results-card">
            <h2 class="results-title">Функции БЖУ:</h2>
            <p>Белки (Б):</p>
            <p>Строительная. Белки являются основой структурного материала всех клеточных мембран, образуют основу протоплазмы любой живой клетки.</p> 
            <p>Транспортная.  Белки переносят различные вещества по крови и лимфе, например, кислород, углекислый газ, жирные кислоты, глюкозу, холестерин, липопротеиды, аминокислоты и др..</p> 
            <p>Регуляторная. Белки играют роль в регуляции и согласовании обмена веществ в различных клетках организма. Например, инсулин регулирует уровень глюкозы в крови, а также увеличивает образование жиров из углеводов.</p> 
            <p>Защитная. При попадании в организм чужеродного белка или микроорганизма образуются особые белки — антитела.</p> 
            <p>Двигательная. Двигательную функцию обеспечивают специальные сократительные белки, например актин и миозин, которые участвуют в сокращении скелетных мышц.</p>
            <p>Энергетическая. Белки могут быть использованы как источник энергии в условиях дефицита углеводов или жиров.</p> 
            <p>Жиры (Ж):</p>
            <p>являются второстепенным источником энергии после углеводов;</p>
            <p>служат строительным материалом для клеточных мембран, нервных волокон, гормонов и других биологически активных веществ;</p>
            <p>участвуют в переносе и усвоении жирорастворимых витаминов (А, D, E, K) и антиоксидантов;</p>
            <p>поддерживают температуру, защищая органы от переохлаждения;</p>
            <p>создают ощущение сытости и удовольствия от еды;</p>
            <p>обеспечивают вкус и аромат пищи.</p>
            <p>Углеводы (У):</p>
            <p>участвуют в регуляции обмена веществ, уровня сахара в крови, аппетита и насыщения;</p>
            <p>являются основным источником энергии для мозга и нервной системы;</p>
            <p>способствуют нормальному пищеварению и выведению шлаков из организма;</p>
            <p>поддерживают здоровье сердечно-сосудистой системы: помогают снижать уровень холестерина в крови и предотвращать развитие атеросклероза и ишемической болезни сердца.</p>
        </div>
    </div>
    `
}
