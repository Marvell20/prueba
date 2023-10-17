CREATE TABLE SALARIES (
    ID INT PRIMARY KEY NOT NULL,
    PROFESSOR_NAME VARCHAR(35) NOT NULL,
    DEPARTMENT VARCHAR(35) NOT NULL,
    SALARY INT
);

INSERT INTO SALARIES (ID, PROFESSOR_NAME, DEPARTMENT, SALARY) VALUES
(1, 'John Doe', 'Computer Science', 100000),
(2, 'Jane Doe', 'Computer Science', 110000),
(3, 'Peter Parker', 'Physics', 120000),
(4, 'Mary Jane Watson', 'Physics', 130000),
(5, 'Bruce Wayne', 'Batman', 140000),
(6, 'Clark Kent', 'Superman', 150000),
(7, 'Tony Stark', 'Computer Science', 160000),
(8, 'Steve Rogers', 'Computer Science', 170000);

#PUNTO 2.4
SELECT 
    DEPARTMENT, COUNT(*) AS CANT_REPITE
FROM
    SALARIES
GROUP BY DEPARTMENT
HAVING COUNT(*) > 1
ORDER BY COUNT(*) DESC;

#PUNTO 2.5
SELECT DISTINCT
    DEPARTMENT
FROM
    SALARIES;