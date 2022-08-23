

const playerListArray = [];
function buttonSelect(element) {
    let playerName = element.parentNode.parentNode.children[0].innerText;
    playerListArray.push(playerName);

    const ol = document.getElementById('list')
    ol.innerText = '';


    for (let i = 0; i < playerListArray.length; i++) {

        let name = playerListArray[i];
        const li = document.createElement('li');
        li.innerText = `${name}`
        ol.appendChild(li);
        element.disabled = true;
    }

}


document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerCostField = document.getElementById('per-player-number');
    const perPlayerCost = perPlayerCostField.value;
    // console.log(perPlayerCost);

    const TotalElement = document.getElementById('per-player-number-total');
    const playerTotalExpence = TotalElement.innerText;
    // console.log(playerTotalExpence);

})

document.getElementById('calculate-total').addEventListener('click', function () {
    // Player Expense
    const playerExpenseText = document.getElementById('per-player-number-total');
    const perPlayerExpenseString = playerExpenseText.innerText;
    const perPlayerExpense = parseFloat(perPlayerExpenseString);

    // console.log(perPlayerExpense);


    // Manager
    const managerCostField = document.getElementById('manger-expense');
    const perManagerCostString = managerCostField.value;
    const perManagerCost = parseFloat(perManagerCostString);
    // console.log(perManagerCost);

    // Coach
    const coachCostField = document.getElementById('coach-expense');
    const perCoachCostString = coachCostField.value;
    const perCoachCost = parseFloat(perCoachCostString);



    //get total
    const playerExpenseTotalText = document.getElementById('total-amout');
    const PlayerExpenseTotalString = playerExpenseTotalText.innerText;
    const totalExpense = parseFloat(PlayerExpenseTotalString);
    // console.log(totalExpense);
    // Calculate total

    const newExpenseTotal = perPlayerExpense + perManagerCost + perCoachCost;

    // playerExpenseTotalText.innerText = newExpenseTotal;

    setTextElementValueById('total-amout', newExpenseTotal);



})

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);

    textElement.innerText = newValue;

}
