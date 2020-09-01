/* eslint-disable no-undef */
/* eslint-disable ghost/ember/no-observers */
class ActiveLink {
    constructor(element, link, config) {
        this.element = element
        this.link = link
        this.config = config
        this.handleIntersection = this.handleIntersection.bind(this)
        if (document.readyState === `complete`) {
            this.handler()
        } else {
            window.addEventListener(`load`, this.handler)
        }
    }

    handler() {
        this.element = document.querySelector(this.element)
        this.run()
    }

    run() {
        const observer = new IntersectionObserver(this.handleIntersection, this.config)
        observer.observe(this.element)
    }

    handleIntersection(entries, observer) {
        const entry = entries[0]
        console.log(`Este entry es de: ${this.link}:`)
        console.log(entry)
        const isVisible = entry.IntersectionObserver >= this.config.threshold
        const links = document.getElementsByClassName(this.link)
        if (entry.isIntersecting) {
            for (const link of links) {
                this.addActiveClass(link)
            }
        } else {
            for (const link of links) {
                this.removeActiveClass(link)
            }
        }
    }

    addActiveClass(link) {
        link.classList.add(`active`)
    }

    removeActiveClass(link) {
        link.classList.remove(`active`)
    }
}

export default ActiveLink