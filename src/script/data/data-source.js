class DataSource {
    
    static search(key){
        const movies = [];
        return fetch(`http://omdbapi.com/?t=${key}&apikey=45d0d086`)
        .then(res => {
            return res.json();
        })
        .then(res => {
            if(res.Response == "True"){
                movies.push(res);
                return Promise.resolve(movies);
            }else {
                return Promise.reject(`${key} not found`);
            }
        })
    }
}

export default DataSource;