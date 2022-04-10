import axios from 'axios';

var tableService = {

    //request a table page from database via http GET request
    getUsers(page) {
        var tableUsers = null;
        axios
            .get("http://localhost:8081/users", page)
            .then(response => (this.tableUsers = response))
            .catch(e => (console.log(e)))
        return tableUsers;
    }
}

export default tableService;
