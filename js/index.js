
function renderVacancies(list){
    const ulVacancies = document.getElementById('list-vacancies')

    list.forEach(element => {
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const divLocal = document.createElement('div')
        const span = document.createElement('span')
        const spanLocal = document.createElement('span')
        const descriptionP = document.createElement('p')
        const divBtn = document.createElement('div')
        const spanModelWork = document.createElement('span')
        const spanModelWorkSecond = document.createElement('span')
        const divBtnApply = document.createElement('div')
        const btnApply = document.createElement('button')

        li.classList = 'card-vacancies'

        h3.innerText = element.title

        divLocal.classList = 'div-local-company'
        span.innerText = element.enterprise
        spanLocal.innerText = element.location

        descriptionP.classList = 'description-vacancies'
        descriptionP.innerText = element.descrition 

        divBtn.classList = 'div-btn-apply'
        spanModelWork.classList = 'model-work'
        spanModelWorkSecond.classList = 'model-work'
        spanModelWork.innerText = element.modalities[0]
        btnApply.classList = 'btn-apply'
        btnApply.id = 'apply-vacancies'
        btnApply.innerText = 'Candidatar'

        divLocal.append(span,spanLocal)
        divBtnApply.append(btnApply)
        divBtn.append(spanModelWork,btnApply)
        li.append(h3,divLocal,descriptionP,divBtn)

        ulVacancies.append(li)
    });
    return ulVacancies
}

renderVacancies(jobsData)

function renderVacanciesSelect(list){
    const ulSelected = document.getElementById('list-selected')
    list.forEach(element => {
        const liSelect = document.createElement('li')
        const divTrash = document.createElement('div')
        const h3Select = document.createElement('h3')
        const btnTrash = document.createElement('button')
        const imgTrash = document.createElement('img')
        const divLocalCompany = document.createElement('div')
        const spanEnterprise = document.createElement('span')
        const spanLocal = document.createElement('span')

        liSelect.classList = 'card-selected'
        divTrash.classList = 'div-btn-trash'
        h3Select.innerText = element.title
        btnTrash.id = 'btn-trash'
        btnTrash.classList = 'btn-trash'
        imgTrash.src = './assets/img/buttonTrash.svg'

        divLocalCompany.classList = 'div-local-company'
        spanEnterprise.innerText = element.enterprise
        spanLocal.innerText = element.location

        btnTrash.append(imgTrash)
        divTrash.append(h3Select,btnTrash)

        divLocalCompany.append(spanEnterprise,spanLocal)
        
        liSelect.append(divTrash,divLocalCompany)
        ulSelected.append(liSelect)
    })
}

{/* <li class="card-selected">
    <div class="div-btn-trash">
        <h3>Pessoa desenvolvedora front-end - React JS</h3>
        <button class="btn-trash"><img src="./assets/img/buttonTrash.svg" alt="trash"></button>
    </div>

    <div class="div-local-company">
        <span>Kenzie Academy</span>
        <span>Curitiba</span>
    </div>
</li> */}








{/* <li class="card-vacancies">
    <h3>Pessoa desenvolvedora front-end - React JS</h3>
    <div class="div-local-company">
        <span>Kenzie Academy</span>
        <span>Curitiba</span>
    </div>

    <p class="description-vacancies">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio, tempora magnam aspernatur blanditiis quibusdam commodi perferendis pariatur, dicta ipsa veniam temporibus ipsam, incidunt quas optio voluptates nostrum! At, incidunt?</p>
    <div class="div-btn-apply">
        <span class="model-work">Home Office</span>
        <button class="btn-apply">Candidatar</button>
    </div> */}