class Stocks {
    constructor(rightHeader) {
        this.rightHeader = rightHeader
        this.getStocks = this.getStocks.bind(this)
        this.handleGetStocksError = this.handleGetStocksError.bind(this)
        this.handleGetStocksSuccess = this.handleGetStocksSuccess.bind(this)
    }

    handleGetStocksError(error) {
        console.log('Error!', error)
    }

    handleGetStocksSuccess(data) {
        console.log('Stocks Data!', data)

        for(let index = 0; index < data.data.length; index++) {
            let row = document.createElement('div')
            let columnLeft = document.createElement('div')
            let columnRight = document.createElement('div')
            row.className = 'row'
            columnLeft.className = 'col col-6'
            columnRight.className = 'col col-6'
            columnLeft.innerHTML = `${data.data[index].name}`
            columnRight.innerHTML = `${data.data[index]["change_pct"]}`
            if(data.data[index]['change_pct'] > 0) {
                columnRight.className = 'text-success'
            } else if(data.data[index]['change_pct'] < 0) {
                columnRight.className = 'text-danger'
            }
            row.appendChild(columnLeft)
            row.appendChild(columnRight)
            rightHeader.appendChild(row)
        }
    }

    getStocks() {
        $.ajax({
            url: `https://api.worldtradingdata.com/api/v1/stock?symbol=^GSPC,AAPL,TSLA,ALEC&api_token=EpVRLOV8c5D3xgJ0tiOqJgvwn8NXq8J40fXKio76co7lWimab6m6wraotkkX`,
            error: this.handleGetStocksError,
            success: this.handleGetStocksSuccess
        })
    }
}