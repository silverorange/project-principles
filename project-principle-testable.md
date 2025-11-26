# Testable Principle

## Description

A project is testable when **it is designed in such a way that it is trivial to write small isolated tests for the business logic**. A testable project contains many small isolated tests that each test a single component of the system. Writing these isolated tests is simple and the scope of each test is small and obvious.

## Benefits

- ensures it is easy to write simple isolated tests
- ensures that tests run quickly
- ensures that tests identify the source of the issue
- ensures extremely high levels of code coverage for the core business logic

## Approach

Using the [Functional Core, Imperative Shell](https://functional-architecture.org/functional_core_imperative_shell/) pattern to design or refactor your code will result in a testable project.

All business logic code should be located in the functional core of a project. This code will be pure and isloated which makes it very easy to test. This code should contain all branching and data transformations.

The application entry point will then contain the imperative shell. This code will have state and side effects. This code will glue parts of the functional core together to achieve the desired outcome of the application. This code should have little to no branching. This code should end up being a high level description of how the desired outcome of the application will be reached.

## Links

- [Functional Core, Imperative Shell - Screencast](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell)
- [Functional Core, Imperative Shell - A Functional Software Architecture Pattern](https://functional-architecture.org/functional_core_imperative_shell/)
- [Simplify Your Code: Functional Core, Imperative Shell](https://testing.googleblog.com/2025/10/simplify-your-code-functional-core.html)
- [Ruby Conf 12 - Boundaries by Gary Bernhardt](https://www.youtube.com/watch?v=yTkzNHF6rMs)
- [Integrated Tests Are A Scam](https://www.youtube.com/watch?v=VDfX44fZoMc)

## Case Studies

### TODO: Add simplifed description of emrap-next changes

### TODO: Add a case study for React code
