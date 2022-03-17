-- Part1
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
    task(title, description, created, updated, due_date, status_id, user_id)
VALUES
    ('Bake muffins', 'For 5 people', '2020-10-04 03:16:42', '2020-10-05 16:56:58', '2020-11-05 16:50:50', 2, 6);
    
-- Change the title of a task
UPDATE
    task
SET title = 'Iron clothes'
WHERE id = 2;
-- Change a task due date
UPDATE 
    task
SET due_date = '2021-10-04 03:16:42'
WHERE id = 3;
-- Change a task status
UPDATE 
    task
SET status_id = 1
WHERE id = 4;
-- Mark a task as complete
UPDATE 
    task
SET status_id = 3
WHERE id = 5;
-- Delete a task
DELETE 
FROM
    task
WHERE
    id = 6;


-- Part 3

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT 
    task.title, user.email
FROM
    task
JOIN 
    user
ON task.user_id = user.id
WHERE email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT 
    task.title, user.name, task.status_id
FROM 
    task
JOIN
    user
ON task.user_id = user.id
WHERE status_id = 1 AND user.name = 'Donald Duck';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT
    task.title, user.name, task.created
FROM
    task
JOIN
    user
ON  task.user_id = user.id
WHERE user.name = 'Maryrose Meadows' AND month(task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT 
    month(created), COUNT(id) as task_amount
FROM
    task
GROUP BY month(created) ;


