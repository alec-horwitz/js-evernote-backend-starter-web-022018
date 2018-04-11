const Note = (function() {
  let all = []
  return class Note  {
    constructor(id, title, body) {
      this.id = id
      this.title = title
      this.body = body
      all.push(this)
    }

    static render() {
      const sidebar = document.body.querySelector('.sidebar')
      sidebar.innerHTML = ""
      all.forEach (note => sidebar.innerHTML += `<div id=n${note.id}>${note.title}</div>`)
      return sidebar
    }

    static updateTitle(id, repl) {
      all[id-1].title = repl
    }

    static updateBody(id, repl) {
      all[id-1].body = repl
    }

    static all() {
      return [...all]
    }

    static delete(id) {
      if ((id > 0) && (id < all.length+1)) {
        all = [...all.slice(0,id-1),...all.slice(id)]
        return [...all]
      } else {
        console.log("ERROR: Bad Input!!!")
      }
    }
  }
})()
