# Depuis la BDD Sakila
# Donner le film le plus loué par store

use sakila;

CREATE VIEW filmloues AS 
SELECT film.title, film.film_id, inventory.store_id
FROM rental
INNER JOIN inventory
	ON rental.inventory_id = inventory.inventory_id
INNER JOIN film
	ON inventory.film_id = film.film_id
INNER JOIN store
	ON inventory.store_id = store.store_id ;


SELECT store_id, count(film_id)
FROM filmloues
GROUP BY store_id
ORDER BY count(film_id)
