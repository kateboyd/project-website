    document.querySelector(".project-button").addEventListener("click", () => {
        document.querySelector(".project-page").classList.remove("hidden")
        document.querySelector(".home-page").classList.add("hidden")
    })

    document.querySelector(".home-button").addEventListener("click", () => {
        document.querySelector(".home-page").classList.remove("hidden")
        document.querySelector(".project-page").classList.add("hidden")
    })