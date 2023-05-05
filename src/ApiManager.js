export const getUsers = () => {
    return fetch('http://localhost:8088/users')
    .then(response => response.json())
}

export const getAllLessons = () => {
    return fetch ('http://localhost:8088/lessons')
    .then(response => response.json())
} 

export const getChord = () => {
    return fetch('http://localhost:8088/chords')
      .then(response => response.json())
  }
  
  const localUser = localStorage.getItem("activeUser")
  const userObject = JSON.parse(localUser)

  export const addCompletedLesson = lessonId => {
    const userId = userObject.id; 
    const newRecord = {
      userId,
      lessonId
    };
    return fetch('http://localhost:8088/completedLessons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRecord)
    })
      .then(response => response.json());
  };
  
  export const getCompletedLesson = () => {
    return fetch('http://localhost:8088/completedLessons')
    .then(response => response.json())
  }