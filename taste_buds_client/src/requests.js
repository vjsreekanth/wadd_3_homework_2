const BASE_URL = `http://localhost:3000/api/v1`;

export const Recipe = {
    index(){
        return fetch(`${BASE_URL}/recipes`)
        .then(res => {
            console.log(res)
            return res.json();
        })
    },

    show(id){
        return fetch(`${BASE_URL}/recipes/${id}`)
        .then(res => {
            console.log(res)
            return res.json()})
    },
}

export const Review = {
    index(){
        return fetch(`${BASE_URL}/reviews`)
        .then(res => {
            console.log(res);
            return res.json();
        })
    },
}

export const Session = {
    create(params){
        return fetch(`${BASE_URL}/session`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    },
    destroy(){
        return fetch(`${BASE_URL}/session`, {
            method: 'DELETE',
            credentials: 'include',
        }).then(res => res.json())
    }
}

export const User = {
    current(){
        return fetch(`${BASE_URL}/users/current`, {
            credentials: 'include',
        }).then(res => res.json())
    },
    create(params){
        return fetch(`${BASE_URL}/users`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: params})
        }).then(res => res.json())
    }
}
