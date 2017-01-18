const query = {
    constraintName: "IC-1. Unique DataSet",
    constraintDescription: "Every qb:Observation has exactly one associated qb:DataSet.",
    constraintClass: "SparqlConstraint",
    constraintResolver: "SparqlAskResolver",
    constraintParameter: {endpointUrl: "http://localhost:8890/sparql", sparqlQuery: "PREFIX rdf: <http:></http:>/www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http:></http:>/www.w3.org/2000/01/rdf-schema#> PREFIX skos: <http:></http:>/www.w3.org/2004/02/skos/core#> PREFIX qb: <http:></http:>/purl.org/linked-data/cube#> PREFIX xsd: <http:></http:>/www.w3.org/2001/XMLSchema#> PREFIX owl: <http:></http:>/www.w3.org/2002/07/owl#> ASK { { # Check observation has a data set ?obs a qb:Observation . FILTER NOT EXISTS { ?obs qb:dataSet ?dataset1 . } } UNION { # Check has just one data set ?obs a qb:Observation ; qb:dataSet ?dataset1, ?dataset2 . FILTER (?dataset1 != ?dataset2) } }"},
};

export default [query]
