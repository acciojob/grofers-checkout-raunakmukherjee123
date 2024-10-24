// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

function calculateTotal()
{
 const priceElements = document.querySelectorAll(".price");
 let total = 0;
priceElements.forEach((priceElement) => {
          total += parseFloat(priceElement.textContent);
        });
 const table=document.getElementById("main-table");
	const row=document.createElement("tr");
	const cell=document.createElement("td");
	cell.colSpan=2;
	cell.textContent="Total price is Rs"+total;
	row.appendChild(cell);
	table.appendChild(row);
}

//getSumBtn.addEventListener("click", getSum);

