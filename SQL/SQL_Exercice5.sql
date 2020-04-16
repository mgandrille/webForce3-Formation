# Depuis la BDD Sakila
# regrouper les films par catégories

use sakila;

SELECT category.name, count(film.title) as nbFilms
FROM film_category
INNER JOIN film 
	ON film.film_id = film_category.film_id
INNER JOIN category
	ON category.category_id = film_category.category_id
GROUP BY category.name
ORDER BY nbFilms DESC;