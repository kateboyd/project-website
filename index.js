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
        <div class="project-container flex flex-col xl:flex-row items-center justify-center xl:my-20 xl:mx-20 my-5 mx-5 xl:gap-10 xl:p-10 p-5 xl:max-h-450 items-stretch">
            <div class="my-auto xl:w-1/2 w-full justify-center min-h-350 max-h-450 max-w-700"><img class="mx-auto shadow-2xl" src="${project.image}" alt="${project.name} project image"></div>
            <div id="proj-desc${id}" class="xl:min-w-900 xl:max-h-490 shadow-2xl xl:w-1/2 w-full proj-desc content-center xl:pt-20 xl:pb-10 py-10 bg-gradient-to-tl from-orange-50 to-orange-100">
                <h3 class="pb-10 text-3xl"><strong>${project.name}</strong></h3>
                <button id="button${id}" class="hover:text-purple-600 details-button my-auto text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Click for more details</button>
                <div class="xl:min-w-950 content-center pl-20 pr-20 text-wrap hidden">
                    <p class="text-xl overflow-y-auto xl:max-h-36">${project.description}</p><br>
                    <p class="text-lg">Check out the live page <a href="${project.page}" target="_blank"><strong class="text-xl">here</strong></a></p><br>
                    <p class="text-lg">GitHub repo <a href="${project.repo}" target="_blank"><strong class="text-xl">here <i class="fa-brands fa-github"></i></strong></a></p><br>
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

    document.querySelector(".home-button").addEventListener("click", () => {
        const resetdetails = document.querySelectorAll('.details-button')
        resetdetails.forEach((button, id) => {
                document.querySelector(`#proj-desc${id} div`).classList.add('hidden')
                document.querySelector(`#button${id}`).classList.remove('hidden')
            })
        })
        })
    