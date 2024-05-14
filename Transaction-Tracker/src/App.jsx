import './App.css'
import React from 'react'
import TransactionComponent from './Transaction-tracker/Ttraker'

function App() {
  const [transaction, setTransaction] = React.useState({
    Name: "",
    Amount: "",
    Payement: "",
  })
  const [transactions, setTransactions]= React.useState([])
  const [searchTerm, setSearchTerm] = React.useState({ 
    searchterm: "",
  });

  function handleSubmit(e){
    e.preventDefault()
    setTransactions([...transactions, transaction])
    setTransaction({
      Name: "",
      Amount: "",
      Payement: "",
    })
  }

  function searchTransaction(term) {
    const filteredTransactions = transactions.filter((transaction) => {
      const { Name, Amount, Payment } = transaction;
      return (
        Name.toLowerCase().includes(term) ||
        Amount.toString().includes(term) //||
        // Payment.includes(term)
      );
    });

    return filteredTransactions;
  }

  return (
    <div>
      <h1>Transaction Tracker</h1>

      <input type="text" name="" id="" placeholder='Search' value={searchTerm.searchterm} onChange={(e) => setSearchTerm({
        ...searchTerm,searchterm:e.target.value
      })}/>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="Uname" placeholder='Enter your Name' value={transaction.Name} onChange={(e) => {setTransaction({
          ...transaction,Name:e.target.value
        })}}/>

        <input type="number" name="" id="amount" placeholder='Enter the amount' value={transaction.Amount} onChange={(e) => {setTransaction({
          ...transaction,Amount:e.target.value
        })}}/>

        <input type="text" name="" id="payement" placeholder='Send/Recieve' value={transaction.Payement} onChange={(e) => {setTransaction({
          ...transaction,Payement:e.target.value
        })}}/>

        <button type="submit">Submit</button>
      </form>
      <h2>My Transaction List</h2>
      <div>
      {searchTransaction(searchTerm).map((transaction, index) => (
        <TransactionComponent
          key={index}
          Name={transaction.Name}
          Amount={transaction.Amount}
          Payment={transaction.Payment}
        />
      ))}
      </div>
    </div>
  )
}

export default App