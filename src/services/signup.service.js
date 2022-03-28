import axios from 'axios';

var tableService = {

    //Send signup data to database via http GET request
    getUsers(userData) {
        var status = null;
        axios
            .post('Path-to-backend', {
                params: {
                    userData: userData
                }
            })
            .then(response => (status = response))
            .catch(e => (console.log(e)))
        return status;
    }
}

export default tableService;
