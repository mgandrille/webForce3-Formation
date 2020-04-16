-- Meilleur film loué par magasin

CREATE VIEW sales_per_movie_per_store AS

select store.store_id, film.film_id, film.title, count(*) as ventes
from rental
inner join inventory on inventory.inventory_id = rental.inventory_id
inner join film on film.film_id = inventory.film_id
inner join customer on customer.customer_id = rental.customer_id
inner join store on customer.store_id = store.store_id
inner join address on address.address_id = store.address_id
inner join city on city.city_id = address.city_id
group by store_id, film_id
order by ventes desc;
  

select 	store_id,
		max(ventes) as unitesVendues,
        substring_index(group_concat(title order by ventes desc), ',', 1) as title,
        substring_index(group_concat(film_id order by ventes desc), ',', 1) as film_id
from sales_per_movie_per_store
group by store_id;