# BetterCrops API

## GET /journey/:bagId

### Response

Response Code: *200*

Response Body:

```
[
    {
        txId: String,
        journeyId: String,
        timestamp: String (JSON time formatted)
        bagId: String,
        measurement: {
            capacity: Int
        },
        price: {
            amount: Float,
            currency: String
        },
        sellerId: String,
        buyerId: String,
        scannerId: String
    },
    {
        ...
    },
    ...
]
```

## POST /transaction

Request Body:

```
{
    bagId: String,
    measurement: {
        capacity: Int
    },
    price: {
        amount: Float,
        currency: String
    },
    sellerId: String,
    buyerId: String,
    scannerId: String
}
```

Response Code: *201*

Response Body:

```
{
    txId: String,
    journeyId: String,
    timestamp: String (JSON time formatted)
}
```

## POST /journey/:bagId/finish

- TODO