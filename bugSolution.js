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
    $addFields: {
      results: {
        $ifNull: ["$results", []] // Add this line to handle empty arrays
      }
    }
  },
  {
    $unwind: "$results"
  }
];

collectionA.aggregate(pipeline).toArray((err, docs) => {
  // ...
});
```