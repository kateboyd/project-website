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
        document.querySelector(".project-container").innerHTML += `
        <div class="project-container flex flex-col lg:flex-row items-center justify-center lg:my-20 my-5 mx-5 lg:gap-10 lg:p-10 p-5">
            <img class="lg:w-1/2 w-full justify-center" src="${project.image}" alt="${project.name} project image">
            <div id="proj-desc${id}" class="lg:w-1/2 w-full proj-desc content-center text-wrap lg:py-20 py-5">
                <h3 class="pb-10 text-3xl"><strong>${project.name}</strong></h3>
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