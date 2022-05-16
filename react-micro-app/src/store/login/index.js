import { flow, makeAutoObservable } from "mobx"

class Store {
    githubProjects = []
    state = "pending"

    constructor() {
        makeAutoObservable(this, {
            fetchProjects: flow
        })
    }

    // 注意星号, 这是一个 generator 函数!
    *fetchProjects() {
        this.githubProjects = []
        this.state = "pending"
        try {
            // Yield 代替 await.
            const projects = yield fetchGithubProjectsSomehow()
            const filteredProjects = this.somePreprocessing(projects)
            this.state = "done"
            this.githubProjects = filteredProjects
        } catch (error) {
            this.state = "error"
        }
    }

    somePreprocessing (projects) {
      console.log(projects)
    }
}

function fetchGithubProjectsSomehow () {
  
}

export default Store