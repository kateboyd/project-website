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
        data.projectdata.forEach((project) => {
            document.querySelector(".project-container").classList.remove("hidden")
            document.querySelector(".project-container").innerHTML += `
            <div class="project-container flex flex-col md:flex-row items-center justify-center gap-10 my-20 mx-auto">
            <div class="w-1/2">
                <img class="" src="${project.image}" alt="Beach Profile Photo">
            </div>
            <div class="w-1/2 proj-desc content-center p-20 text-wrap">
                <h3 class="pb-10 text-xl"><strong>${project.name}</strong></h3>
                <p>${project.description}</p><br>
                <a href="#">${project.page}</a><br>
                <a href="#">${project.repo}</a>
            </div>
        </div>
        `

})
})
    