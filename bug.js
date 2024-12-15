```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results"
    }
  },
  {
    $unwind: "$results" // This is the problematic line.  The unwind stage assumes every document has at least one result from the lookup
  }
];

collectionA.aggregate(pipeline).toArray((err, docs) => {
  // ...
});
```