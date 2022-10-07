let newArrayStorage = []

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
        const btnRemove = document.createElement('button')

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
        btnApply.id = element.id
        btnApply.innerText = 'Candidatar'
        btnRemove.classList = 'btn-remove'
        btnRemove.id = element.id
        btnRemove.innerText = 'Remover candidatura'

        let takeLocal = JSON.parse(localStorage.getItem('@vagas:vagasSelecionadas')) || []

        const locationList = takeLocal.findIndex((object) => {
            return object.id == btnApply.id || object.id == btnRemove.id
        })

        if (locationList != -1) {
            btnApply.classList.toggle('btn-remove')
            btnApply.classList.toggle('btn-apply')
            btnRemove.classList.toggle('btn-apply')
            btnRemove.classList.toggle('btn-remove')
        }

       btnApply.addEventListener('click', () => {
            btnApply.classList.toggle('btn-remove')
            btnApply.classList.toggle('btn-apply')
            btnRemove.classList.toggle('btn-apply')
            btnRemove.classList.toggle('btn-remove')

            const newArrSelected = list.filter((element) => {
                return element.id === parseInt(btnApply.id)
            })
            newArrayStorage.push(newArrSelected[0])
            renderVacanciesSelect(newArrayStorage)

            localStorage.setItem('@vagas:vagasSelecionadas',JSON.stringify(newArrayStorage))
       })

       btnRemove.addEventListener('click',() => {
        btnApply.classList.toggle('btn-remove')
        btnApply.classList.toggle('btn-apply')
        btnRemove.classList.toggle('btn-apply')
        btnRemove.classList.toggle('btn-remove')

            findId(btnRemove.id)
            renderVacanciesSelect(newArrayStorage)
            localStorage.setItem('@vagas:vagasSelecionadas',JSON.stringify(newArrayStorage))
       })

        divLocal.append(span,spanLocal)
        divBtnApply.append(btnApply)
        divBtn.append(spanModelWork,btnApply,btnRemove)
        li.append(h3,divLocal,descriptionP,divBtn)

        ulVacancies.append(li)
    });
    return ulVacancies
}


function renderVacanciesSelect(list){
    const ulSelected = document.getElementById('list-selected')
    ulSelected.innerHTML = ''
    list.forEach(element => {
        const liSelect = document.createElement('li')
        const divTrash = document.createElement('div')
        const h3Select = document.createElement('h3')
        const btnTrash = document.createElement('button')
        const imgTrash = document.createElement('img')
        const divLocalCompany = document.createElement('div')
        const spanEnterprise = document.createElement('span')
        const spanLocal = document.createElement('span')

        liSelect.classList = 'card-selected animation'
        divTrash.classList = 'div-btn-trash'
        h3Select.innerText = element.title
        btnTrash.id = element.id
        btnTrash.classList = 'btn-trash'
        imgTrash.src = './assets/img/buttonTrash.svg'

        divLocalCompany.classList = 'div-local-company'
        spanEnterprise.innerText = element.enterprise
        spanLocal.innerText = element.location

        btnTrash.append(imgTrash)
        divTrash.append(h3Select,btnTrash)

        btnTrash.addEventListener('click',() => {
           removeItem(element)
           renderVacanciesSelect(newArrayStorage)
           let buttonsVacancies = document.querySelectorAll('.btn-apply')
           let buttonsRemove    = document.querySelectorAll('.btn-remove')
           buttonsVacancies.forEach((buttons)=> {
                if (buttons.id == btnTrash.id) {
                    buttons.classList.toggle('btn-apply')
                    buttons.classList.toggle('btn-remove')
                }
           })

           buttonsRemove.forEach((buttons) => {
                if (buttons.id == btnTrash.id) {
                    buttons.classList.toggle('btn-apply')
                    buttons.classList.toggle('btn-remove')
                }
           })
           localStorage.setItem('@vagas:vagasSelecionadas',JSON.stringify(newArrayStorage))
        })

        divLocalCompany.append(spanEnterprise,spanLocal)
        
        liSelect.append(divTrash,divLocalCompany)
        ulSelected.append(liSelect)
    })
    return ulSelected
}

function removeItem(element){
    let index = newArrayStorage.indexOf(element)
    newArrayStorage.splice(index,1)
}

function findId (id) {
    let find = newArrayStorage.findIndex((element) => {
        return element.id == id
    })
    console.log(find)
    newArrayStorage.splice(find,1)
}


let local = JSON.parse(localStorage.getItem('@vagas:vagasSelecionadas'))

function localJson (){
    if (local) {
        newArrayStorage = [...local,]
        renderVacanciesSelect(newArrayStorage)
    }
}

localJson()
renderVacancies(jobsData)
