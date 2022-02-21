INSERT INTO department(id, name)
VALUES 
  (1, 'Sales'),
  (2, 'Customer Support'),
  (3, 'Finance'),
  (4, 'Policy'),
  (5, 'Human Resource'),
  (6, 'IT');

INSERT INTO role(title, salary, department_id)
VALUES
  ('Sales Manager', 85000, 1),
  ('Finance Officer', 60000, 3),
  ('Sales Representative', 45000, 1),
  ('Policy Advisor', 55000, 4),
  ('Hiring Manager', 70000, 5),
  ('Staff Coordinator', 39000, 5),
  ('Help Desk', 55000, 6),
  ('Customer success Manager', 60000, 2);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
  ('Apple', 'Tasty', 3, 2),
  ('Orange', 'Sour', 1, NULL),
  ('Yorkshire', 'Terrier', 5, NULL),
  ('Husky', 'Bulky', 6, 3),
  ('Corgi', 'Chubby', 6, 3),
  ('Greyhound', 'Skinny', 6, 3),
  ('Joe', 'Happy', 4, NULL),
  ('Tim', 'Funny', 8, NULL);