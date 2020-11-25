const api_url_base = 'https://api.themoviedb.org/3/';
const api_key = 'bd2a9dc4670609b1dcc9d5fd6281d9bc';
const casualsearch = Math.floor(Math.random() * 4)
const film = ["pippo", "natale", "estate", "inverno", "horror"];
var app = new Vue({
    el: '#root',
    data: {
        movie: []
        //length: 0
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
                //this.length = this.movie.length;
                //console.log(this.length);
            });
    },
    methods: {
        calcolaStars(index){
            return Math.round((this.movie[index].vote_average) / 2);

        }

        //movielength(){
            //let bool = true;
            //setTimeout(function(){
                //if(this.length == 0){bool = false; }
            //}, 1000);
            //return bool;
        //}
    }
});
