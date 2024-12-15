# MongoDB Aggregation: Handling Empty Lookup Results in $unwind

This repository demonstrates a common error encountered when using the `$unwind` stage in MongoDB aggregation pipelines after a `$lookup`.  If the `$lookup` stage returns no matching documents for a particular input document, the `$unwind` stage will throw an error.

## The Problem

The provided `bug.js` file contains code that performs a `$lookup` followed by a `$unwind`. The issue arises when a document in `collectionA` does not have a corresponding match in `collectionB`. In such cases, the `$results` array will be empty, and the `$unwind` operator will fail.

## The Solution

The `bugSolution.js` file offers a solution using the `$addFields` and `$ifNull` operators to handle cases with empty arrays before `$unwind`. By adding a default value, we can avoid the error and gracefully handle documents with no matching entries.

## How to Reproduce

1.  Ensure you have a MongoDB instance running.
2.  Create collections `collectionA` and `collectionB` and populate them with appropriate data to reproduce the scenario of missing matches.
3.  Run `bug.js` to see the error.
4.  Run `bugSolution.js` to see the error resolved.
