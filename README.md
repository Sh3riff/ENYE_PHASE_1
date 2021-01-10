# Enye - Phase 1 Assignment(Backend)

This Repo that holds the solution to Enye - Phase 1 Assignment

[Link to Backend](https://enye1-backend.herokuapp.com/)

## About the Backend

The backend is a Node-Express server that accepts that returns exchange rates based on query parameters.  
It has single endpoint at /api/rates & accept "base" & "currency" as queries. For instance,

```json
https://enye1-backend.herokuapp.com/api/rates?base=USD&currency=GBP,CAD,AUD

{"results":{"base":"USD","date":"2021-01-08","rates":{"CAD":1.2688163265,"GBP":0.7357387755,"AUD":1.2863673469}}}
```