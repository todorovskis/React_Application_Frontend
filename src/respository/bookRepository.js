import axios from '../custom-axios/axios'

const BookService = {
    fetchAuthors: () => {
        return axios.get("/authors");
    },

    fetchCountries: () => {
        return axios.get("/countries");
    },

    fetchBooks: () => {
        return axios.get("/books");
    },

    fetchCategories: () => {
        return axios.get("/categories");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/${id}/delete`);
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    addBook: (name, category, authorId, availableCopies) => {
        return axios.post("/books/add", {
            "name": name,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies
        });
    },
    editBook: (id, name, category, authorId, availableCopies) => {
        return axios.put(`/books/${id}/edit`, {
            "name": name,
            "category": category,
            "authorId": authorId,
            "availableCopies": availableCopies
        })
    },
    isTaken: (id) => {
        return axios.put(`/books/${id}/taken`);
    }
}

export default BookService