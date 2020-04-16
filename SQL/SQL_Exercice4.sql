# Depuis la BDD Sakila
# Affiche le nom des catégories

use sakila;

SELECT category.category_id, film.title, category.name
FROM film_category
INNER JOIN film 
	ON film.film_id = film_category.film_id
INNER JOIN category
	ON category.category_id = film_category.category_id