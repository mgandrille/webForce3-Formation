-- Quel est le top 5 des films les plus loués ?
select count(film.film_id) as countFilms, film.title
from rental
inner join inventory on inventory.inventory_id = rental.inventory_id
inner join film on film.film_id = inventory.film_id
group by film.film_id
order by countFilms desc
limit 0, 5;

-- Quel est le top 5 des acteurs ayant fait louer le plus de films ?
select count(actor.actor_id) as "Nombre de films loués", concat(actor.first_name, " ", actor.last_name) as Acteur
from rental
inner join inventory on inventory.inventory_id = rental.inventory_id
inner join film on film.film_id = inventory.film_id
inner join film_actor on film.film_id = film_actor.film_id
inner join actor on film_actor.actor_id = actor.actor_id
group by actor.actor_id
order by count(actor.actor_id) desc
limit 0, 5;

-- Nombre de films loués par magasin
select store.store_id, CONCAT("Magasin de ", city.city) as "Lieu", count(rental.rental_id) as "Nombre de films loués"
from rental
inner join inventory on inventory.inventory_id = rental.inventory_id
inner join film on film.film_id = inventory.film_id
inner join customer on customer.customer_id = rental.customer_id
inner join store on customer.store_id = store.store_id
inner join address on address.address_id = store.address_id
inner join city on city.city_id = address.city_id
group by store.store_id
order by count(film.title) desc