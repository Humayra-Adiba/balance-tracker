import React from 'react'

function IncomeExpenses({income, expense}) {
  return (
    <>
        <div className='flex justify-around'>
            <div className='text-green-500'>
            <h3 className='font-bold'>Total Income</h3>
            <p className='text-xl'>{income}</p>
            </div> 
            <div className='text-red-500'>
            <h3 className='font-bold'>Expenses</h3>
            <p className='text-xl'>{expense}</p>
            </div>
        </div>
    </>
  )
}

export default IncomeExpenses