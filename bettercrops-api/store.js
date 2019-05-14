var transactions = []
var finishedJourneys = []

const saveTx = tx => {
    transactions.push(tx)
    return '123'
}

const findTxByJourney = journeyId => {
    return transactions.filter(tx => tx.journeyId == journeyId)
}

const finishJourney = journeyId => {
    finishedJourneys.push(journeyId)
}

const getCurrentJourney = bagId => {
    const bagTx = transactions.filter(tx => tx.bagId == bagId).filter(tx => !finishedJourneys.includes(tx.journeyId))
    return bagTx.length ? bagTx[0].journeyId : null
}

module.exports = {
    saveTx,
    findTxByJourney,
    finishJourney,
    getCurrentJourney
}