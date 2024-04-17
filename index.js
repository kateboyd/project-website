document.querySelector(".project-button").addEventListener("click", () => {
    document.querySelector(".project-page").classList.remove("hidden")
    document.querySelector(".home-page").classList.add("hidden")
})

document.querySelector(".home-button").addEventListener("click", () => {
    document.querySelector(".home-page").classList.remove("hidden")
    document.querySelector(".project-page").classList.add("hidden")
})

fetch("index.json")
.then((response) => {
return response.json()
}).then((data) => {
console.log(data)
})

fetch("index.json")
.then((response) => {
    return response.json()
}).then((data) => {
    data.projectdata.forEach((project, id) => {
        document.querySelector(".project-container").classList.remove("hidden")
        document.querySelector(".project-container").innerHTML += `
        <div class="project-container flex flex-col md:flex-row items-center justify-center my-20 gap-10 mx-20">
        <div class="w-1/2">
            <img class="" src="${project.image}" alt="json project image">
        </div>
        <div id="proj-desc${id}" class="w-1/2 proj-desc content-center p-20 text-wrap">
            <h3 class="pb-10 text-xl"><strong>${project.name}</strong></h3>

            <button id="button${id}" class="details-button my-auto text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Click for more details</button>

            <div class="content-center pl-20 pr-20 text-wrap hidden">
                <p>${project.description}</p><br>
                <p>Check out the live page <a href="${project.page}" target="_blank"><strong class="text-xl">here</strong></a></p><br>
                <p>GitHub repo <a href="${project.repo}" target="_blank"><strong class="text-xl">here <i class="fa-brands fa-github"></i></strong></a></p><br>
            </div>
        </div>
        </div>
        `    
    })

    const details = document.querySelectorAll('.details-button')
    details.forEach((button, id) => {
        button.addEventListener('click', () => {
            console.log("click" + id)
            document.querySelector(`#proj-desc${id} div`).classList.remove('hidden')
            button.classList.add('hidden')
        })
    })

})