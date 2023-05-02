export const getUsers = () => {
    return fetch('http://localhost:8088/users')
    .then(response => response.json())
}

export const getAllLessons = () => {
    return fetch ('http://localhost:8088/lessons')
    .then(response => response.json())
} 