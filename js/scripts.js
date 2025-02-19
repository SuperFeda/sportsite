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
            <div class="flex-results">
                <div class="result-element" style="background:rgba(255,69,0,0.85);">
                    <h3 class="title-with-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0284 1.11813C9.69728 1.2952 9.53443 1.61638 9.49957 1.97965C9.48456 2.15538 9.46201 2.32986 9.43136 2.50363C9.3663 2.87248 9.24303 3.3937 9.01205 3.98313C8.5513 5.15891 7.67023 6.58926 5.96985 7.65195C3.57358 9.14956 2.68473 12.5146 3.06456 15.527C3.45234 18.6026 5.20871 21.7903 8.68375 22.9486C9.03 23.0641 9.41163 22.9817 9.67942 22.7337C10.0071 22.4303 10.0238 22.0282 9.94052 21.6223C9.87941 21.3244 9.74999 20.5785 9.74999 19.6875C9.74999 19.3992 9.76332 19.1034 9.79413 18.8068C10.3282 20.031 11.0522 20.9238 11.7758 21.5623C12.8522 22.5121 13.8694 22.8574 14.1722 22.9466C14.402 23.0143 14.6462 23.0185 14.8712 22.9284C17.5283 21.8656 19.2011 20.4232 20.1356 18.7742C21.068 17.1288 21.1993 15.3939 20.9907 13.8648C20.7833 12.3436 20.2354 10.9849 19.7537 10.0215C19.3894 9.29292 19.0534 8.77091 18.8992 8.54242C18.7101 8.26241 18.4637 8.04626 18.1128 8.00636C17.8332 7.97456 17.5531 8.06207 17.3413 8.24739L15.7763 9.61686C15.9107 7.44482 15.1466 5.61996 14.1982 4.24472C13.5095 3.24609 12.7237 2.47913 12.1151 1.96354C11.8094 1.70448 11.5443 1.50549 11.3525 1.36923C11.2564 1.30103 11.1784 1.24831 11.1224 1.21142C10.7908 0.99291 10.3931 0.923125 10.0284 1.11813ZM7.76396 20.256C7.75511 20.0744 7.74999 19.8842 7.74999 19.6875C7.75 18.6347 7.89677 17.3059 8.47802 16.0708C8.67271 15.6572 8.91614 15.254 9.21914 14.8753C9.47408 14.5566 9.89709 14.4248 10.2879 14.5423C10.6787 14.6598 10.959 15.003 10.9959 15.4094C11.2221 17.8977 12.2225 19.2892 13.099 20.0626C13.5469 20.4579 13.979 20.7056 14.292 20.8525C15.5 20.9999 17.8849 18.6892 18.3955 17.7882C19.0569 16.6211 19.1756 15.356 19.0091 14.1351C18.8146 12.7092 18.2304 11.3897 17.7656 10.5337L14.6585 13.2525C14.3033 13.5634 13.779 13.5835 13.401 13.3008C13.023 13.018 12.8942 12.5095 13.092 12.0809C14.4081 9.22933 13.655 6.97987 12.5518 5.38019C12.1138 4.74521 11.6209 4.21649 11.18 3.80695C11.0999 4.088 10.9997 4.39262 10.8742 4.71284C10.696 5.16755 10.4662 5.65531 10.1704 6.15187C9.50801 7.26379 8.51483 8.41987 7.02982 9.34797C5.57752 10.2556 4.71646 12.6406 5.04885 15.2768C5.29944 17.2643 6.20241 19.1244 7.76396 20.256Z" fill="#0F0F0F"/>
                        </svg>
                        <span>Калории:</span>
                    </h3>
                    <p>${Math.round(bmr)}</p>
                </div>
                <div class="result-element" style="background:rgba(255,165,0,0.85);">
                    <h3 class="title-with-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor" height="24" width="24" version="1.1" id="Layer_1" viewBox="0 0 482.813 482.813" xml:space="preserve">
                            <path d="M456.168,47.811L476.26,27.72L455.047,6.507l-20.08,20.08C413.075,9.352,386.22,0,357.923,0   c-18.75,0-37.544,4.291-54.351,12.411l-191.291,92.432c-20.032,9.68-38.228,22.626-54.081,38.479   c-77.54,77.539-77.54,203.705,0,281.244c37.562,37.562,87.502,58.248,140.622,58.248s103.061-20.686,140.622-58.247   c15.852-15.851,28.798-34.047,38.479-54.082l92.433-191.292C491.239,135.966,485.282,84.936,456.168,47.811z M443.344,166.142   l-92.432,191.291c-8.216,17.001-19.211,32.451-32.681,45.921c-31.896,31.895-74.303,49.46-119.409,49.46   c-45.107,0-87.514-17.565-119.409-49.46c-65.842-65.842-65.842-172.976,0-238.818c13.471-13.471,28.921-24.466,45.92-32.681   l191.291-92.432C329.385,33.258,343.665,30,357.923,30c25.337,0,49.155,9.864,67.067,27.776   C453.506,86.292,460.881,129.841,443.344,166.142z"/>
                            <path d="M198.822,180.444c-27.646,0-53.637,10.766-73.186,30.314c-40.355,40.354-40.355,106.017,0,146.371   c19.548,19.549,45.54,30.315,73.186,30.315s53.637-10.766,73.186-30.315c40.354-40.354,40.354-106.017,0-146.372   C252.459,191.21,226.468,180.444,198.822,180.444z M250.795,335.917c-13.882,13.882-32.34,21.528-51.973,21.528   s-38.09-7.646-51.973-21.528c-28.658-28.658-28.658-75.288,0-103.945c13.882-13.882,32.34-21.527,51.973-21.527   s38.09,7.646,51.973,21.527C279.452,260.629,279.452,307.259,250.795,335.917z"/>
                        </svg>
                        <span>Жиры:</span>
                    </h3>
                    <p>${Math.round((bmr * 0.3) / 9)} г.</p>
                </div>
                <div class="result-element" style="background:rgba(255,223,186,0.6);">
                    <h3 class="title-with-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M18.846,2H5.154A4.106,4.106,0,0,0,1.015,5.661,4,4,0,0,0,3,9.451V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V9.451a4,4,0,0,0,1.985-3.79A4.106,4.106,0,0,0,18.846,2ZM5,19V8.816a1,1,0,0,0-.665-.942A1.978,1.978,0,0,1,3.007,5.827,2.1,2.1,0,0,1,5.154,4h9.692a2.1,2.1,0,0,1,2.147,1.827,1.978,1.978,0,0,1-1.328,2.047A1,1,0,0,0,15,8.816V19a1,1,0,0,1-1,1H6A1,1,0,0,1,5,19ZM19.665,7.874A1,1,0,0,0,19,8.816V19a1,1,0,0,1-1,1H16.829c.364-1.032.056-2.011.171-10.549A3.96,3.96,0,0,0,18.444,4h.4a2.1,2.1,0,0,1,2.147,1.827A1.978,1.978,0,0,1,19.665,7.874Z"/></svg>
                        <span>Углеводы:</span>
                    </h3>
                    <p>${Math.round((bmr * 0.55) / 4)} г.</p>
                </div>
                <div class="result-element" style="background:rgba(60,179,113,0.7);">
                    <h3 class="title-with-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1"><defs><style>.cls-1{fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><path class="cls-1" d="M20.52,12.05c-2.76,2.76-7.5,3.66-9.87,1.3S9.19,6.24,12,3.48a5.88,5.88,0,0,1,8.69-.12A5.88,5.88,0,0,1,20.52,12.05Z"/><path class="cls-1" d="M12.43,14.43,8.84,18a1.94,1.94,0,0,0-.54,1.89,2,2,0,1,1-3.86,1.15,2.21,2.21,0,0,0-1.5-1.5A2,2,0,1,1,4.09,15.7,1.94,1.94,0,0,0,6,15.16l3.59-3.59"/></svg>
                        <span>Белки:</span>
                    </h3>
                    <p>${Math.round(weight * 0.8)} г. (для обычного человека)</br>${Math.round(weight * 1.55)} г. (для спортсменов)</p>
                </div>
            </div>
        </div>
        <div class="results-card">
            <h2 class="results-title">Статьи:</h2>
            <div class="flex-results">
                <a class="topic-link" href="./topics/bjy.html">
                    <h3 class="title-with-svg" svg-right="true">
                        <span>Функции БЖУ</span>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </h3>
                </a>
                <a class="topic-link" href="./topics/training.html">
                    <h3 class="title-with-svg" svg-right="true">
                        <span>Тренировки</span>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </h3>
                </a>
                <a class="topic-link" href="./topics/vitamins.html">
                    <h3 class="title-with-svg" svg-right="true">
                        <span>Витамины</span>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </h3>
                </a>
                <a class="topic-link" href="./topics/sports_supplements.html">
                    <h3 class="title-with-svg" svg-right="true">
                        <span>Спортивные добавки</span>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </h3>
                </a>
            </div>
        </div>
    </div>
    `
}
