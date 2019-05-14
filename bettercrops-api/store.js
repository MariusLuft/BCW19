var transactions = []

const saveTx = tx => {
    transactions.push(tx)
    return '123'
}

const findTxByJourney = journeyId => {
    return transactions.filter(tx => tx.journeyId == journeyId)
}

const getCurrentJourney = bagId => {
    const bagTx = transactions.filter(tx => tx.bagId == bagId)
    return bagTx.length ? bagTx[0].journeyId : null
}

module.exports = {
    saveTx,
    findTxByJourney,
    getCurrentJourney
}