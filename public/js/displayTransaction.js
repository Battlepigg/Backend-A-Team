let displayTransaction = document.querySelector(".transaction-appendhere");

//! DOUGHNUT CHART START
const data = {
    labels: [
      'Auto and Transport',
      'Bills & Utilities',
      'Business Services',
      'Education',
      'Entertainment',
      'Fees and Charges',
      'Financial',
      'Food & Dining',
      'Gifts & Donations',
      'Health & Fitness',
      'Home',
      'Income',
      'Investments',
      'Kids',
      'Loan Payments',
      'Misc Expenses',
      'Personal Care',
      'Pets',
      'Shopping',
      'Taxes',
      'Transfer',
      'Travel',
      'Uncategorized'
    ],
    datasets: [{
      label: 'Spending Summary',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
        
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
          },
        cutoutPercentage: 85,
        animation: {
            animateScale: true
        },
        responsive: true,
        maintainAspectRatio: false
    }
  };

  const myChart = new Chart(
    document.getElementById('student-doughnut-chart'),
    config
);

// DOUGHNUT CHART END

//! EXPENSE CHART START 
// const expenseData = {
//     labels: [
//       'Last Month',
//       'This Month'
//     ],
//     datasets: [{
//       label: 'Expense Comparison',
//       data: [19050,21020],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)'
        
//       ],
//       hoverOffset: 4
//     }]
//   };

//   const expenseConfig = {
//     type: 'bar',
//     data: expenseData,
//     options: {
//         indexAxis: 'y',
//         animation: {
//             animateScale: true
//         },
//         responsive: true,
//         maintainAspectRatio: false
//     }
//   };

//   const expenseChart = new Chart(
//     document.getElementById('monthly-Expense-Chart'),
//     expenseConfig
// );

const updateDoughnut = (results)=>{
    results.forEach(transaction => {
        console.log("step 1");
        switch(transaction.category){
            
            case 'Auto and Transport':
                myChart.data.datasets[0].data[0] += transaction.amount;
                break;
            case 'Bills & Utilities':
                myChart.data.datasets[0].data[1] += transaction.amount;
                break;
            case 'Business Services':
                myChart.data.datasets[0].data[2] += transaction.amount;
                break;
            case 'Education':
                myChart.data.datasets[0].data[3] += transaction.amount;
                break;
            case 'Entertainment':
                myChart.data.datasets[0].data[4] += transaction.amount;
                break;
            case 'Fees and Charges':
                myChart.data.datasets[0].data[5] += transaction.amount;
                break;
            case 'Financial':
                myChart.data.datasets[0].data[6] += transaction.amount;
                break;
            case 'Food & Dining':
                myChart.data.datasets[0].data[7] += transaction.amount;
                break;
            case 'Gifts & Donations':
                myChart.data.datasets[0].data[8] += transaction.amount;
                break;
            case 'Health & Fitness':
                myChart.data.datasets[0].data[9] += transaction.amount;
                break;
            case 'Home':
                myChart.data.datasets[0].data[10] += transaction.amount;
                break;
            case 'Income':
                myChart.data.datasets[0].data[11] += transaction.amount;
                break;
            case 'Investments':
                myChart.data.datasets[0].data[12] += transaction.amount;
                break;
            case 'Kids':
                myChart.data.datasets[0].data[13] += transaction.amount;
                break;
            case 'Loan Payments':
                myChart.data.datasets[0].data[14] += transaction.amount;
                break;
            case 'Misc Expenses':
                myChart.data.datasets[0].data[15] += transaction.amount;
                break;
            case 'Personal Care':
                myChart.data.datasets[0].data[16] += transaction.amount;
                break;
            case 'Pets':
                myChart.data.datasets[0].data[17] += transaction.amount;
                break;
            case 'Shopping':
                myChart.data.datasets[0].data[18] += transaction.amount;
                break;
            case 'Taxes':
                myChart.data.datasets[0].data[19] += transaction.amount;
                break;
            case 'Transfer':
                myChart.data.datasets[0].data[20] += transaction.amount;
                break;
            case 'Travel':
                myChart.data.datasets[0].data[21] += transaction.amount;
                break;
            case 'Uncategorized':
                myChart.data.datasets[0].data[22] += transaction.amount;
                break;
        }
    });
    console.log("step 2");
    myChart.update();
}

const updateExpenseChart = (results)=>{

}


const getTransactionRecord = async () =>{
    let result = await fetch('http://localhost:3000/api');
    let resultRecord = await result.json();
    let recordArr = resultRecord.records
    console.log(recordArr);
    let eachDisplay = ""
    recordArr.forEach(eachTransaction=>{
        console.log(eachTransaction);
        console.log(eachTransaction.description);
        
        eachDisplay +=`
            <tr>
                
                <td class="text-center">${eachTransaction.date}</td>
                <td>${eachTransaction.description}</td>
                <td>${eachTransaction.amount}</td>
                <td>${eachTransaction.type}</td>
                <td>${eachTransaction.category}</td>
            
            </tr>
        `
        displayTransaction.innerHTML = eachDisplay
    })

    updateDoughnut(recordArr)
}


getTransactionRecord()
