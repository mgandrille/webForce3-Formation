use sakila;
show tables;
SELECT * FROM film_text;

SELECT *
FROM actor
WHERE first_name LIKE "Scarlett";

SELECT *
FROM actor
WHERE last_name LIKE "Johansson" ;

# SELECT DISTINCT last_name
SELECT last_name, COUNT(first_name)
FROM actor
GROUP BY last_name;

SELECT DISTINCT first_name, last_name
FROM actor
WHERE last_name LIKE '%SON';

SELECT *
FROM language
ORDER BY name;

SELECT *
FROM film_text
WHERE description LIKE "%shark%" or "%crocodile%";