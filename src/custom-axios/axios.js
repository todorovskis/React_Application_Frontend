import axios from "axios";

const instance = axios.create({

    baseURL: "http://localhost:8080/api/",
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export default instance

/*
     axios.create is essentially a factory to create new instances of Axios.
     Let’s say you want two instances of Axios: one to call service A and
     another to call service B, where A can work with a timeout of 100ms
     and B needs a timeout of 500ms. This is easily possible with
     axios.create.
 */