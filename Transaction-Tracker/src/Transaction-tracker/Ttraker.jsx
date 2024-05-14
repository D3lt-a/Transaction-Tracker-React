

function TransactionComponent({Name,Amount,Payement}){
    return(
        <div id="Tlist">
            <p>{Name}</p>
            <p>{Amount}</p>
            <p>{Payement}</p>
            <hr />
        </div>
    )
}

export default TransactionComponent