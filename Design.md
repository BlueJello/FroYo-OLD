## Table of Contents
<!-- MarkdownTOC depth=2 -->

- Allowed Actions
- School
- Teacher
- Student
- Class
- Assignment
- Grade
- Constants

<!-- /MarkdownTOC -->

## Allowed Actions
+ `Delete` is not allowed anywhere unless otherwise specified.
+ `Update` only allowed by `Admins` by default.
+ `Create` only allowed by `Admins` by default.
+ `Find` only allowed by `Admins` by default.


## School
### Description
Holds information about the school

### Schema
+ `id:` auto, required
+ `schoolName:` `string` `required`
+ `schoolAddress`

## Teacher
### Description
Teacher for classes.
### Associations
+ Belongs To Many: `Classes`

### Fields
+ `firstName:`
    + `required:` True
    + `type:` String
    + `validations:`
+ `lastName:`
    + `required:` True
    + `type:` String
    + `validations:`
+ `emailAddress:`
    + `required:` False
    + `type:` String
    + `validations:` IsEmail

## Student
### Description

### Allowed Actions
+ `Delete` is not allowed. Students should be archived instead.
+ `Update` only allowed by `Admins` by default.
+ `Create` only allowed by `Admins` by default.
+ `Find All` only allowed by `Admins` and `Teachers` by default. If called by a `Parent` only return their kids.
+ `Find One` allowed to be called by a `Parent` or a `Student` to retrieve their self or `Student`
### Fields
+ `firstName:`
    + `required:` True
    + `type:` String
    + `validations:`
+ `lastName:`
    + `required:` True
    + `type:` String
    + `validations:`
+ `emailAddress:`
    + `required:` False
    + `type:` String
    + `validations:` IsEmail
+ `address:`
    + `required:` False
    + `type:` String
    + `validations:` IsAddress
+ `enrollments:`
    + `required:` False
    + `collection:` Class
    + `as:` Student
    + `validations:` IsAddress

## Class
### Description

### Fields
*`type` is string unless otherwise specified*
+ `name:`
    + `required:` True
+ `gradeLevel:`
    + `required:` True
    + `validations:` Is a `gradeLevel`
+ `subject:`
    + `required:` True
    + `validations:` Is a `subject`
+ `teacher:`
    + `type:` Has One 
    + `required:` True
+ `students:`
    + `type:` Has Many
    + `via:` enrollments
    + `dominant:` True
+ `assignments:`
    + `type:` Has Many
    + `via:` class
    + `dominant:` True

## Assignment
### Description
Assignments will be tied to a `class`. Does not need to be tied to a `grade level` or a `subject` since a `class` already is.
### Fields
+ `name:`
    + `required:` True
    + `type:` String
    + `validations:`
+ `class:`
    + `type:` Reference
    + `reference type:` Has One
    + `required:` True
    + `validations:`

## Grade

## Constants
Can be a `subject` or a `grade level`. Will add more as more `constants` are needed. `Constants` should not change often.

### Fields
+ `key:`
    + `required:` True
    + `type:` String
    + `validations:` Is a Subject, Grade Level, Assignment Type
+ `value:`
    + `required:` True
    + `type:` String
    + `validations:`