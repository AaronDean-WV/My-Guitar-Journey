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
  
  export const addCompletedLesson = lessonId => {
    const userId = 1; // TODO: replace with actual user ID
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
  