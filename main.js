const api_url_base = 'https://api.themoviedb.org/3/';
const api_key = 'bd2a9dc4670609b1dcc9d5fd6281d9bc';
const url_base_locandina = 'https://image.tmdb.org/t/p/';
const dimensione_locandina = 'w185';
var app = new Vue({
    el: '#root',
    data: {
        movie: [],
        //length: 0
        languages: ["de", "en", "fr", "it", "pt"],
        isRicercaFatta : false,
        searchInput : '  '
    },
    methods: {
        ricerca() {

            var ricerca = this.searchInput;

            axios.get(api_url_base + 'search/movie', {
                params: {
                    api_key: api_key,
                    query: ricerca
                }
            }).then((risposta) => {

                    this.isRicercaFatta = true;

                    console.log(risposta);
                    this.movie = risposta.data.results;
                    console.log(this.movie)
                    //this.length = this.movie.length;
                    //console.log(this.length);
                });

            axios.get(api_url_base + 'search/tv', {
                params: {
                    api_key: api_key,
                    query: ricerca
                }
            }).then((risposta) => {

                    this.isRicercaFatta = true;

                    console.log(risposta);
                    this.movie = risposta.data.results;
                    console.log(this.movie)
                        //this.length = this.movie.length;
                        //console.log(this.length);
                });
        },
        calcolaStars(index){
            return Math.ceil((this.movie[index].vote_average) / 2);

        },

        checkLanguages(m,i){
            let bool;
            for(let index = 0; index < this.languages.length; index++){
                if(m[i].original_language == this.languages[index]){
                    return bool = true;
                }
            }
            return bool = false;
        }
    }
});
