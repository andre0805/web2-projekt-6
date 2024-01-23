URL aplikacije u cloudu: https://web2-projekt-6.onrender.com


Svojstva aplikacije:

1. interpolation/one-way binding - DA
	- frontend/src/views/MoviesView.vue, :32, :33, :36
	- kopmonenti za prikaz žanrova se prosljeđuje lista žanrova, a komponenti za prikaz filmova se prosljeđuje lista filmova

2. two-way binding - DA
	- frontend/src/views/SearchView.vue, :30
	- varijabla searchQuery povezana je s inputom za pretraživanje
	- svaka promjena u inputu se odmah reflektira u varijabli, a svaka promjena varijable se reflektira na prikazane filmove

3. methods - DA
	- frontend/src/components/movies-list/MoviesList.vue, :10
	- koristi se za odabir filma koji se zatim prikazuje u detalje

4. computed properties - DA
	- frontend/src/components/movies-list/MovieDetails.vue, :4
	- koriste se za prikaz detalja o filmu

5. barem jedan scoped style - DA
	- frontend/src/components/movies-list/MovieDetails.vue, :95

6. koristiti barem jedan lifecycle hook - DA
	- frontend/src/views/MoviesView.vue, :20
	- koristi se za postavljanje trenutnog žanra na 'All' prije nego se komponenta prikaže

7. routing (više stranica) - DA
	- frontend/src/router/index.js, :8
	- Router omogućuje prikaz različitih stranica ovisno o URL-u
	    - / - prikazuje početnu stranicu (HomeView)
	    - /movies - prikazuje sve filmove (MoviesView)
	    - /search - prikazuje stranicu za pretraživanje filmova (SearchView)
	    - /:not_found(.*)* - prikazuje 404 stranicu (PageNotFoundView)
	
7.1 aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) - DA
	- provjeriti se može tako da se ručno upiše URL u browseru, npr. https://web2-projekt-6.onrender.com/movies

7.2 dinamičko usmjeravanje s 404 stranicom ("catch all") - DA
	- frontend/src/router/index.js, :28
	- provjeriti se može tako da se ručno upiše URL u browseru, npr. https://web2-projekt-6.onrender.com/blabla

8. (barem) dvije komponente - DA
	- frontend/src/components/movies-list/MoviesList.vue, frontend/src/components/movies-list/MoviesListItem.vue
	- komponenta MoviesList prikazuje listu filmova, a komponenta MoviesListItem prikazuje pojedini film u listi

8.1 komponenta bez stanja, koristiti properties - DA
	- frontend/src/components/movies-list/MoviesListItem.vue, :3
	- koristi 'movie' property za prikaz kartice filma u list filmova

8.2 komponenta sa stanjem - DA
	- frontend/src/components/movies-list/MoviesList.vue, :4
	- koristi 'selectedMovie' varijablu pomoću koje se prati koji je film odabran

9. barem jedna komponenta mora emitirati barem jedan event - DA
	- frontend/src/components/genre-carousel/GenreCarousel.vue, :4, :16
	- komponenta emitira event 'selectGenre' kada se odabere žanr, a komponenta MoviesView sluša taj event i prikazuje filmove tog žanra

10. store (Pinia) - DA
	- frontend/src/stores/movies.js
	- koristi se na više mjesta, npr. u frontend/src/views/MoviesView.vue, :10, :18

11. asinkroni dohvat podataka s backenda - DA
	- frontend/src/stores/movies.js, :40, :59 (dohvat filmova i žanrova s backenda)
