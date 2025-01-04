INSERT INTO Estudiantes (ID, Nombre, Carrera, Edad)
VALUES (1, 'Juan Pérez', 'Ingeniería', 22);


SELECT Nombre, Carrera
FROM Estudiantes
WHERE Edad > 21;


UPDATE Estudiantes
SET Edad = 23
WHERE ID = 1;


DELETE FROM Estudiantes
WHERE ID = 1;

CREATE TABLE Estudiantes (
                           ID INT PRIMARY KEY,
                           Nombre VARCHAR(50),
                           Carrera VARCHAR(50),
                           Edad INT
);


SELECT * FROM Estudiantes
WHERE Carrera = 'Ingeniería';


SELECT * FROM Estudiantes
ORDER BY Edad DESC;


SELECT COUNT(*) AS TotalEstudiantes
FROM Estudiantes;
