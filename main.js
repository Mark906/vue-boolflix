const api_url_base = 'https://api.themoviedb.org/3/';
const api_key = 'bd2a9dc4670609b1dcc9d5fd6281d9bc';

var app = new Vue({
    el: '#root',
    data: {
        movie: []
    },

    mounted() {

        axios.get(api_url_base + 'search/movie', {
            params: {
                api_key: api_key,
                query: 'spiderman'
            }
        }).then((risposta) => {
                console.log(risposta);
                this.movie = risposta.data.results;
                console.log(this.movie);
            });
    }
});
