INSERT INTO departments (name) 
VALUES ('Sales'),
        ('Accounting'),
        ('Production');

INSERT INTO roles (title, salary, department_id)
VALUES ('Lead Brewer', 55000, 3),
        ('Packaging Technician', 45000, 3),
        ('Cellarman', 40000, 3),
        ('Regional Sales Manager', 65000, 1),
        ('Salesperson', 50000, 1),
        ('General Manager', 70000, 1),
        ('Accountant', 80000, 2),
        ('Accounting Assistant', 40000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Matthew', 'Ferguson', 1, 6),
        ('Meghan', 'Jackson', 5, 4),
        ('Preston', 'Giles', 3, 6),
        ('Monica', 'Bridges', 4, 2),
        ('Kamil', 'Santos', 5, 4),
        ('Cade', 'Howell', 2, 4),
        ('Nora', 'Butler', 7, 4),
        ('Alvin', 'Fernandez', 8, 4),
        ('Timothy', 'Dowd', 6, 5);


