CREATE DATABASE mealsharingdata
DEFAULT CHARACTER SET = 'utf8mb4';

USE  mealsharingdata;

CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL, 
  `location` varchar(255) NOT NULL ,
  `when` varchar(255) NULL DEFAULT NULL,
  `max_reservations`  int(10) NULL DEFAULT NULL,
  `price` decimal(5,2) NOT NULL,
  `created_date` DATE NOT NULL
);

CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int(32) NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` DATE NOT NULL, 
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NULL DEFAULT NULL,
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text(10) NULL DEFAULT NULL,
  `review_meal_id` int(10) unsigned NOT NULL, 
  `stars` int(10) unsigned NOT NULL,
  `created_date` DATE NOT NULL,
  CONSTRAINT `fk_review_meal_id` FOREIGN KEY (`review_meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Inserts to meal table
INSERT INTO meal(title, description, location, price, created_date, max_reservations)
VALUES
('Carbonara', 'Designating pasta that is mixed, just after boiling, with a sauce of sautéed bacon,
Parmesan cheese, pepper, and beaten eggs, formed as the eggs are cooked slightly by the hot pasta.', ' Holsteinsgade 1, 8300 Odder', 144.50, '2021-10-10', Null),
('Avocado toast', 'Avocado toast can be a nutritious breakfast, as avocados are a good source of healthy fats and very filling.', ' Holsteinsgade 1, 8660 Skanderborg', 70.00, '2021-10-13', Null),
('Sticky and Spicy Baked Cauliflower', 'Battering and oven-baking large cauliflower florets gives them a slightly crackly, just-rich-enough exterior that’s ideal for coating in a sticky-sweet gochujang glaze.', ' Holsteinsgade 1, 8660 Skanderborg', 170.40, '2021-10-14', Null),
('Greek salat', 'Popular salad generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, pepper, Greek oregano, and olive oil.', ' M. P. Bruuns Gade 25, 8000 Aarhus', 100.10, '2021-10-11', 3),
('Vanilla Cake', 'A classic butter cake but with Japanese techniques applied for the most plush, soft and moist yellow cake like you’ve never had before.', ' M. P. Bruuns Gade 25, 8000 Aarhus', 60.50, '2021-09-11', 5)

-- Inserts to reservation table
INSERT INTO reservation(number_of_guests, created_date, contact_phonenumber, contact_name, meal_id)
VALUES 
(3, '2021-10-11', '+ 45 50 000 00', 'John', 1),
(5, '2021-11-11', '+ 45 50 001 00', 'Alex', 7),
(2, '2021-11-12', '+ 45 50 001 10', 'Maria', 5)
(4, '2021-11-13', '+ 45 50 001 11', 'Natalia', 6)

-- Inserts to review table
INSERT INTO review(title, review_meal_id, created_date, stars)
VALUES 
('Review for carbonara', 1 , '2021-08-12', 3 ),
('Review avocado toast', 5 , '2021-09-16', 7 ),
('Review for Greek salat', 7 , '2021-10-12', 9),
('Review for vanill cake', 8 , '2021-08-19', 1 )

-- Meal - Queries to write
-- Get all meals
SELECT 
  title
FROM 
  meal;

-- Get a meal with any id, fx 1
SELECT 
  title
FROM meal
WHERE id = 2;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
	meal 
SET
	price  = 150 
WHERE id = 1; 

-- Delete a meal with any id, fx 1
DELETE FROM 
  meal
WHERE id = 2; 

-- Reservation - Queries to write
-- Get all reservations
SELECT 
  *
FROM
  reservation;

-- Get a reservation with any id, fx 1
SELECT 
  created_date
FROM reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
	reservation 
SET
	number_of_guests = 4 
WHERE id = 1; 

-- Delete a reservation with any id, fx 1
DELETE FROM 
  reservation
WHERE id = 12; 

-- Review - Queries to write
-- Get all reviews
SELECT
  *
FROM
  review;

-- Get a review with any id, fx 1
SELECT 
  *
FROM 
  review
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
	review 
SET
	stars = 5 
WHERE	id = 1; 

-- Delete a review with any id, fx 1
DELETE FROM 
  reservation
WHERE id = 1; 

-- Additional queries
-- Functionality
-- Get meals that has a price smaller than a specific price fx 90
SELECT
 *
FROM
  meal
WHERE price < 90;

-- Get meals that still has available reservations
SELECT
  meal.title, meal.max_reservations, COUNT(reservation.meal_id) as reservation_amount
FROM meal
JOIN reservation 
ON meal.id = reservation.meal_id
GROUP BY meal.title, meal.max_reservations
HAVING reservation_amount < meal.max_reservations;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT 
  *
FROM
  meal
WHERE title LIKE '%toast';

-- Get meals that has been created between two dates
SELECT
  *
FROM
 meal
WHERE created_date BETWEEN '2021-10-11' AND '2021-11-11';

-- Get only specific number of meals fx return only 5 meals
SELECT
  *
FROM
  meal
LIMIT 4;

-- Get the meals that have good reviews
SELECT
  meal.title
FROM meal
JOIN review ON meal.id = review.review_meal_id
WHERE  review.stars > 6
GROUP BY meal.title;

-- Get reservations for a specific meal sorted by created_date
SELECT
  *
FROM reservation
JOIN meal ON reservation.meal_id = meal.id
WHERE  meal.title = 'Carbonara'
ORDER BY reservation.created_date;

-- Sort all meals by average number of stars in the reviews
SELECT
 meal.title as meal_title, AVG(review.stars) as average_number
FROM meal
JOIN review ON meal.id = review.review_meal_id
GROUP BY meal_title
ORDER BY average_number;







