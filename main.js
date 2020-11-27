const api_url_base = 'https://api.themoviedb.org/3/';
const api_key = 'bd2a9dc4670609b1dcc9d5fd6281d9bc';
const url_base_poster = 'https://image.tmdb.org/t/p/';
const dimensione_poster = 'w185';
const poster_not_avaiable = 'img/poster_not_avaiable.jpg'
var app = new Vue({
    el: '#root',
    data: {
        movie: [],
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
        },

        get_url_poster(path) {
            if(path) { //se il valore esiste
                //ritorna poster
                return url_base_poster + dimensione_poster + path;
            }
            //altrimenti ritorna poster non disponibile
            return poster_not_avaiable;
        }
    }
});
