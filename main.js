const api_url_base = 'https://api.themoviedb.org/3/';
const api_key = 'bd2a9dc4670609b1dcc9d5fd6281d9bc';

var app = new Vue({
    el: '#root',
    data: {
        movie: [],
        value_star: 0
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
                for(let i=0; i<this.movie.length; i++){
                    this.stars[i] = Math.round((this.movie[i].vote_average) / 2);
                }
                for(let i=0; i<this.movie.length; i++){
                    console.log(this.movie[i].vote_average);
                }
            });
    },
    methods: {
        calcolaStars(index){
            let value = 0;
            return this.value_star = Math.round((this.movie[index].vote_average) / 2);

        }
    }
});
