const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    },
  ];

  

  const accountTypeChecker = (accountBalanceHistory) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/
  
    // Write your logic here  - No pressure 😁 //
    let result = 'B';
    let calDiff = Math.abs(accountBalanceHistory[0].account.balance.amount - accountBalanceHistory[1].account.balance.amount);
    for( let i = accountBalanceHistory.length - 1 ; i > 0 ; i-- ){
    let getDiff = Math.abs(accountBalanceHistory[i].account.balance.amount - accountBalanceHistory[i-1].account.balance.amount);
        if(getDiff != calDiff){
            result = 'A';
            break;
        } 
    }
     return result ; 
  }; 

  console.log(accountTypeChecker(accountBalanceHistory));
