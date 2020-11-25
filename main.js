const api_url_base = 'https://api.themoviedb.org/3/';
const api_key = 'bd2a9dc4670609b1dcc9d5fd6281d9bc';
const casualsearch = Math.floor(Math.random() * 5) + 1
const film = ["pippo", "natale", "estate", "inverno", "horror"];

var app = new Vue({
    el: '#root',
    data: {
        movie: []
    },

    mounted() {

        axios.get(api_url_base + 'search/movie', {
            params: {
                api_key: api_key,
                query: film[casualsearch]
            }
        }).then((risposta) => {
                console.log(risposta);
                this.movie = risposta.data.results;
                console.log(this.movie)
            });
    },
    methods: {
        calcolaStars(index){
            return Math.round((this.movie[index].vote_average) / 2);

        }
    }
});
