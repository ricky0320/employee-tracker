INSERT INTO department(name)
VALUES 
  ('Sales'),
  ('Customer Support'),
  ('Finance'),
  ('Policy'),
  ('Human Resource')
  ('IT')
;

INSERT INTO role(id, title, salary, department_id)
VALUES
  ('Sales Manager', 85000, 1),
  ('Finance Officer', 60000, 3),
  ('Sales Representative', 45000, 1),
  ('Policy Advisor', 55000, 4),
  ('Hiring Manager', 70000, 5),
  ('Staff Coordinator', 39000, 5),
  ('Help Desk', 55000, 6),
  ('Customer success Manager', 60000, 2)
;

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
  ('Apple', 'Tasty', 3, 1),
  ('Orange', 'Sour', 1, NULL),
  ('Yorkshire', 'Terrier', 5, NULL),
  ('Husky', 'Bulky', 6, 8),
  ('Corgi', 'Chubby', 6, 8),
  ('Greyhound', 'Skinny' 6, 8),
  ('Joe', 'Happy', 4, NULL),
  ('Tim', 'Funny', 8, NULL),
;