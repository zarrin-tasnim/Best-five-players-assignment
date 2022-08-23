

const playerListArray = [];
function buttonSelect(element) {
    let playerName = element.parentNode.parentNode.children[0].innerText;
    playerListArray.push(playerName);

    const ol = document.getElementById('list')
    ol.innerText = '';

    var length = playerListArray.length;

    for (let i = 0; i < playerListArray.length; i++) {

        let name = playerListArray[i];
        const li = document.createElement('li');
        li.innerText = `${name}`
        ol.appendChild(li);
        element.disabled = true;

        if (document.getElementById('list').childElementCount == 5) {
            alert('Can not add more');
            return false;
        }
    }

}


document.getElementById('calculate').addEventListener('click', function () {

    const perPlayerCostField = document.getElementById('per-player-number');
    const perPlayerCostString = perPlayerCostField.value;
    const perPlayerCost = parseFloat(perPlayerCostString);
    perPlayerCostField.value = '';
    // console.log(perPlayerCost);

    const playerExpenseTotal = document.getElementById('per-player-number-total');
    const playerTotalExpenceString = playerExpenseTotal.innerText;
    const playerTotalExpence = parseFloat(playerTotalExpenceString);

    // console.log(playerTotalExpence);
    let numberOfPlayer = document.getElementById("list").children.length;

    //set player expense
    const newPlayerExpenseTotal = perPlayerCost * numberOfPlayer;
    setTextElementValueById('per-player-number-total', newPlayerExpenseTotal);

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
    managerCostField.value = '';
    // console.log(perManagerCost);

    // Coach
    const coachCostField = document.getElementById('coach-expense');
    const perCoachCostString = coachCostField.value;
    const perCoachCost = parseFloat(perCoachCostString);
    coachCostField.value = '';


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
// common function
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);

    textElement.innerText = newValue;

}
