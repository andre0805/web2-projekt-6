<script>

export default {
  data() {
    return {
      movies: [
        {
          "id": "aae7ca6e-a9fe-428b-9e37-c7484396cb90",
          "tmdbId": 955916,
          "imdbId": "tt14371878",
          "title": "Lift",
          "description": "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
          "releaseDate": "2024-01-10",
          "genres": [
            {
              "id": 28,
              "name": "Action"
            },
            {
              "id": 35,
              "name": "Comedy"
            },
            {
              "id": 80,
              "name": "Crime"
            }
          ],
          "duration": null,
          "director": "F. Gary Gray",
          "actors": [
            "Kevin Hart",
            "Gugu Mbatha-Raw",
            "Sam Worthington"
          ],
          "languages": [
            "English",
            "Italian"
          ],
          "countries": [
            "United States"
          ],
          "posterUrl": "https://image.tmdb.org/t/p/w500/46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg",
          "rating": null
        },
        {
          "id": "a623d6f9-8e49-459d-87ed-f2c2e1e38f31",
          "tmdbId": 753342,
          "imdbId": "tt13287846",
          "title": "Napoleon",
          "description": "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
          "releaseDate": "2023-11-22",
          "genres": [
            {
              "id": 36,
              "name": "History"
            },
            {
              "id": 10752,
              "name": "War"
            },
            {
              "id": 18,
              "name": "Drama"
            }
          ],
          "duration": 158,
          "director": "Ridley Scott",
          "actors": [
            "Joaquin Phoenix",
            "Vanessa Kirby",
            "Tahar Rahim"
          ],
          "languages": [
            "English",
            "French",
            "Russian",
            "German",
            "Italian"
          ],
          "countries": [
            "United States"
          ],
          "posterUrl": "https://image.tmdb.org/t/p/w500/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
          "rating": 6.5
        },
        {
          "id": "fbd1d353-24ba-44a7-941f-afb5d9b37f78",
          "tmdbId": 609681,
          "imdbId": "tt10676048",
          "title": "The Marvels",
          "description": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
          "releaseDate": "2023-11-08",
          "genres": [
            {
              "id": 878,
              "name": "Science Fiction"
            },
            {
              "id": 12,
              "name": "Adventure"
            },
            {
              "id": 28,
              "name": "Action"
            }
          ],
          "duration": 105,
          "director": "Nia DaCosta",
          "actors": [
            "Brie Larson",
            "Teyonah Parris",
            "Iman Vellani"
          ],
          "languages": [
            "English",
            "Urdu"
          ],
          "countries": [
            "United States"
          ],
          "posterUrl": "https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
          "rating": 5.9
        },
        {
          "id": "cfbf3cc8-f382-4124-aab6-3e10b0bf9523",
          "tmdbId": 906126,
          "imdbId": "tt16277242",
          "title": "Society of the Snow",
          "description": "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
          "releaseDate": "2023-12-13",
          "genres": [
            {
              "id": 18,
              "name": "Drama"
            },
            {
              "id": 36,
              "name": "History"
            }
          ],
          "duration": 144,
          "director": "J.A. Bayona",
          "actors": [
            "Enzo Vogrincic",
            "Agustín Pardella",
            "Matías Recalt"
          ],
          "languages": [
            "Spanish"
          ],
          "countries": [
            "Spain",
            "Chile",
            "Uruguay",
            "United States"
          ],
          "posterUrl": "https://image.tmdb.org/t/p/w500/2e853FDVSIso600RqAMunPxiZjq.jpg",
          "rating": 7.9
        },
        {
          "id": "6c92eb9a-286e-4dc1-ab13-65499acb1580",
          "tmdbId": 899445,
          "imdbId": "tt14865406",
          "title": "Deep Fear",
          "description": "A solo trip aboard a yacht takes a terrifying turn when a woman encounters three drug traffickers clinging to the shattered remains of a boat. They soon force her to dive into shark-infested waters to retrieve kilos of cocaine from the sunken wreck.",
          "releaseDate": "2023-10-18",
          "genres": [
            {
              "id": 28,
              "name": "Action"
            },
            {
              "id": 9648,
              "name": "Mystery"
            },
            {
              "id": 53,
              "name": "Thriller"
            },
            {
              "id": 27,
              "name": "Horror"
            }
          ],
          "duration": 84,
          "director": "Marcus Adams",
          "actors": [
            "Mãdãlina Ghenea",
            "Ed Westwick",
            "Macarena Gómez"
          ],
          "languages": [
            "English"
          ],
          "countries": [
            "United Kingdom"
          ],
          "posterUrl": "https://image.tmdb.org/t/p/w500/ruujFw7J0Nd3BSjbN3QODym82Qs.jpg",
          "rating": 4.9
        },
        {
          "id": "d2917837-054e-46e5-89ee-17b0c4d65e5a",
          "tmdbId": 572802,
          "imdbId": "tt9663764",
          "title": "Aquaman and the Lost Kingdom",
          "description": "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
          "releaseDate": "2023-12-20",
          "genres": [
            {
              "id": 28,
              "name": "Action"
            },
            {
              "id": 12,
              "name": "Adventure"
            },
            {
              "id": 14,
              "name": "Fantasy"
            }
          ],
          "duration": 124,
          "director": "James Wan",
          "actors": [
            "Jason Momoa",
            "Patrick Wilson",
            "Yahya Abdul-Mateen II"
          ],
          "languages": [
            "English"
          ],
          "countries": [
            "United States",
            "United Kingdom",
            "Canada",
            "Australia",
            "Iceland"
          ],
          "posterUrl": "https://image.tmdb.org/t/p/w500/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
          "rating": null
        },
        {
          "id": "ba74a7b2-3c30-4648-b702-f22bdaea6c9a",
          "tmdbId": 1155089,
          "imdbId": "tt29195117",
          "title": "Justice League: Crisis on Infinite Earths Part One",
          "description": "Death is coming. Worse than death: oblivion. Not just for our Earth, but for everyone, everywhere, in every universe! Against this ultimate destruction, the mysterious Monitor has gathered the greatest team of Super Heroes ever assembled. But what can the combined might of Superman, Wonder Woman, Batman, The Flash, Green Lantern and hundreds of Super Heroes from multiple Earths even do to save all of reality from an unstoppable antimatter armageddon?!",
          "releaseDate": "2024-01-09",
          "genres": [
            {
              "id": 16,
              "name": "Animation"
            },
            {
              "id": 878,
              "name": "Science Fiction"
            },
            {
              "id": 28,
              "name": "Action"
            }
          ],
          "duration": 93,
          "director": "Jeff Wamester",
          "actors": [
            "Alexandra Daddario",
            "Matt Bomer",
            "Jensen Ackles"
          ],
          "languages": [
            "English"
          ],
          "countries": [
            "United States"
          ],
          "posterUrl": "https://image.tmdb.org/t/p/w500/zR6C66EDklgTPLHRSmmMt5878MR.jpg",
          "rating": null
        },
        {
          "id": "df8ce43a-b18c-4c8d-91f5-2977d23e54ae",
          "tmdbId": 918692,
          "imdbId": "tt17352384",
          "title": "Granit",
          "description": "Mozambique requests from Russia is being helped in the fight against militants of the \"Islamic State\" and a special group led by a commander with the call sign Granit is coming to the country.",
          "releaseDate": "2021-12-29",
          "genres": [
            {
              "id": 28,
              "name": "Action"
            },
            {
              "id": 10752,
              "name": "War"
            }
          ],
          "duration": 100,
          "director": "Denis Neymand",
          "actors": [
            "Aleksandr Baranovskiy",
            "Oleg Chernov",
            "Evgeniy Dobryakov"
          ],
          "languages": [
            "Russian"
          ],
          "countries": [
            "Russia"
          ],
          "posterUrl": "https://image.tmdb.org/t/p/w500/zLJn4U2qlWIzlFP5SsyFJUDQjfs.jpg",
          "rating": 6.1
        },
        {
          "id": "f084283c-ac4b-48f6-b7f8-a3ba045ce51b",
          "tmdbId": 927107,
          "imdbId": "tt2016303",
          "title": "The Bricklayer",
          "description": "Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.",
          "releaseDate": "2024-01-03",
          "genres": [
            {
              "id": 28,
              "name": "Action"
            },
            {
              "id": 53,
              "name": "Thriller"
            }
          ],
          "duration": 110,
          "director": "Renny Harlin",
          "actors": [
            "Aaron Eckhart",
            "Nina Dobrev",
            "Clifton Collins Jr."
          ],
          "languages": [
            "English"
          ],
          "countries": [
            "Greece",
            "Bulgaria",
            "United States"
          ],
          "posterUrl": "https://image.tmdb.org/t/p/w500/pwOQ9lqLX1OgsJRSybS662wMcu8.jpg",
          "rating": null
        },
        {
          "id": "00dd8dad-5363-46fa-a3c9-16c32f3a6401",
          "tmdbId": 866398,
          "imdbId": "tt15314262",
          "title": "The Beekeeper",
          "description": "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
          "releaseDate": "2024-01-10",
          "genres": [
            {
              "id": 28,
              "name": "Action"
            },
            {
              "id": 53,
              "name": "Thriller"
            }
          ],
          "duration": 105,
          "director": "David Ayer",
          "actors": [
            "Jason Statham",
            "Emmy Raver-Lampman",
            "Bobby Naderi"
          ],
          "languages": [
            "English"
          ],
          "countries": [
            "United Kingdom",
            "United States"
          ],
          "posterUrl": "https://image.tmdb.org/t/p/w500/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
          "rating": null
        },
        {
          "id": "2fa13d82-e181-409d-9aa5-1c94144f3489",
          "tmdbId": 787699,
          "imdbId": "tt6166392",
          "title": "Wonka",
          "description": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
          "releaseDate": "2023-12-06",
          "genres": [
            {
              "id": 35,
              "name": "Comedy"
            },
            {
              "id": 10751,
              "name": "Family"
            },
            {
              "id": 14,
              "name": "Fantasy"
            }
          ],
          "duration": 116,
          "director": "Paul King",
          "actors": [
            "Timothée Chalamet",
            "Gustave Die",
            "Murray McArthur"
          ],
          "languages": [
            "English"
          ],
          "countries": [
            "United States",
            "United Kingdom",
            "Canada"
          ],
          "posterUrl": "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
          "rating": 7.3
        },
        {
          "id": "984c9450-06d0-47ef-ae6e-feebd33a4321",
          "tmdbId": 508883,
          "imdbId": "tt6587046",
          "title": "The Boy and the Heron",
          "description": "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
          "releaseDate": "2023-07-14",
          "genres": [
            {
              "id": 16,
              "name": "Animation"
            },
            {
              "id": 12,
              "name": "Adventure"
            },
            {
              "id": 14,
              "name": "Fantasy"
            }
          ],
          "duration": 124,
          "director": "Hayao Miyazaki",
          "actors": [
            "Soma Santoki",
            "Masaki Suda",
            "Kô Shibasaki"
          ],
          "languages": [
            "Japanese"
          ],
          "countries": [
            "Japan"
          ],
          "posterUrl": "https://image.tmdb.org/t/p/w500/jDQPkgzerGophKRRn7MKm071vCU.jpg",
          "rating": 7.7
        },
      ],
      genres: [
        {
          id: null,
          name: "All",
        },
        {
          "id": 28,
          "name": "Action"
        },
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 16,
          "name": "Animation"
        },
        {
          "id": 35,
          "name": "Comedy"
        },
        {
          "id": 80,
          "name": "Crime"
        },
        {
          "id": 99,
          "name": "Documentary"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10751,
          "name": "Family"
        },
        {
          "id": 14,
          "name": "Fantasy"
        },
        {
          "id": 36,
          "name": "History"
        },
        {
          "id": 27,
          "name": "Horror"
        },
        {
          "id": 10402,
          "name": "Music"
        },
        {
          "id": 9648,
          "name": "Mystery"
        },
        {
          "id": 10749,
          "name": "Romance"
        },
        {
          "id": 878,
          "name": "Science Fiction"
        },
        {
          "id": 10770,
          "name": "TV Movie"
        },
        {
          "id": 53,
          "name": "Thriller"
        },
        {
          "id": 10752,
          "name": "War"
        },
        {
          "id": 37,
          "name": "Western"
        },
      ],
      selectedGenre: null
    };
  },
  computed: {
    filteredMovies() {
      if (this.selectedGenre) {
        return this.movies.filter(movie => movie.genres.map(genre => genre.id).includes(this.selectedGenre));
      } else {
        return this.movies;
      }
    },
  },
  methods: {
    setSelectedGenre(genre) {
      this.selectedGenre = genre.id;
      console.log("Selected genre:", this.selectedGenre);
    },
  },

};
</script>

<template>
  <genre-carousel :genres=genres :selectedGenreId="selectedGenre" @selectGenre="setSelectedGenre" />

  <div class="movie-grid">
    <movie-item v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
  </div>
</template>

<style scoped>
.movie-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  gap: 20px;
  background: #e01111;
}
</style>
