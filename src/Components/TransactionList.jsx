import React from 'react'

function TransactionList({transactions}) {
  return (
    <>
        <ul className='list-none container mx-auto'>
            {transactions.map((transaction) => (
                <li key={Math.random()} className={` p-2 mt-2 ${transaction.amount > 0 ? "bg-green-200" : "bg-red-200"}` }>
                  
                  {transaction.text}

                  <span className='float-right'>{transaction.amount}</span>

                </li>
            ))
                
            }
        </ul>
    </>
  )
}

export default TransactionList