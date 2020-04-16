# Depuis la BDD Sakila
# Afficher tous les films de la catégorie 5

use sakila;

SELECT category_id, title
FROM film_category
INNER JOIN film 
	ON film.film_id = film_category.film_id
WHERE category_id = 5;