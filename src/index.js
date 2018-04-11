function getRoutes(attr, id) {
  if(id) {
    return fetch("http://localhost:3000/api/v1/" + attr + "/" + id.toString()).then(res => res.json())
  } else {
    return fetch("http://localhost:3000/api/v1/" + attr).then(res => res.json())
  }
}
function deleteReq(attr, id, obj) {
  return fetch("http://localhost:3000/api/v1/" + attr + "/" + id.toString(), {
    method: "delete",
    header: {'content-type': 'application/json'},
    body: JSON.stringify()
    // obj.delete(id)
  }).then(res => res.json())
}
function makeTheNotes(notes) {
  notes.forEach(note => new Note(note.id, note.title, note.body))
}
// function showMeTheNotes(notes) {console.log("NOtes!!!", notes)}
// function putTheFirstOnThePage() {
//   console.log(Note.all()[0].body)
//   Note.all().forEach (note => document.body.innerHTML += `<div>${note.body}</div>`)
// }
function noteSelected(e) {
  clickedNote = Note.all().find(function(element) {
    return e.target.id == "n"+element.id
  })
  if (clickedNote) {
    console.log(clickedNote.id)
    renderNote(clickedNote)
  }else {
     console.log("ERROR: Note Found!!!")
   }
  // for (var i = 0; i < Note.all().length; i++) {
  //   if (e.target.id == "n"+Note.all()[i].id) {
  //     console.log(e.target.id)
  //
  //   }
  // }
}

function renderNote(foundNote) {
  document.body.innerHTML = ""
  document.body.innerHTML += `<h1 id=n${foundNote.id}>${foundNote.title}</h1> <br> <p>${foundNote.body}</p> `
}


document.addEventListener("DOMContentLoaded", function() {
  // console.log(Note)
  const USERS = getRoutes("users")


  const NOTES = getRoutes("notes")
  // Howard's code
  NOTES.then(noteJson => {
    makeTheNotes(noteJson)
    sidebar = Note.render()
    sidebar.addEventListener("click", noteSelected)
    // deleteReq("notes", i, Note)
    // showMeTheNotes(noteJson)
    // putTheFirstOnThePage()
  })
})
