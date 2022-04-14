import axios from 'axios';

var tableService = {

    //request a table page from database via http GET request
    async getUsers(page) {
        var tableUsers = null;
        await axios
            .get("http://localhost:8081/users", {
                data: {
                    page: page.toString()
                }
            })
            .then(response => {
                tableUsers = response.data;
            })
            .catch(e => (console.log(e)))

        return tableUsers;
    }
}

export default tableService;