CREATE DATABASE studentsdb
    DEFAULT CHARACTER SET = "utf8mb4";

USE studentsdb;

CREATE TABLE `subjects` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`subject_name` varchar(255) NOT NULL
);

CREATE TABLE `faculty` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`location` varchar(255) NULL
);

CREATE TABLE `students` (
`student_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`email` varchar(255) NULL,
`faculty_id` int(10) unsigned NOT NULL,
CONSTRAINT `fk_faculty` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `students_subjects` (
`student_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`subject_id` varchar(255) NOT NULL,
`students_mark` varchar(255) NOT NULL,
CONSTRAINT `fk_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `fk_subject` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);