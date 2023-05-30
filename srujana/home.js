let jsonArray = [
  {
    name: "xyz",
    price: "12",
    expiryDate: "2025-10-12",
  },
  {
    name: "abc",
    price: "20",
    expiryDate: "2025-12-12",
  },
  {
    name: "xyz1",
    price: "25",
    expiryDate: "2025-01-23",
  },
  {
    name: "abc1",
    price: "15",
    expiryDate: "2025-12-12",
  },
  {
    name: "abc2",
    price: "45",
    expiryDate: "2025-12-12",
  },
];
let productList = document.getElementById("productList");
let _tbodyList = jsonArray
  .map(
    (item) => `<tr>
                    <td>${item.name}</td>
                    <td>$${item.price}</td>
                    <td>${changeDateFormat(item.expiryDate)}</td>
                </tr>`
  )
  .join("");
productList.innerHTML = _tbodyList;

function changeDateFormat(date) {
  let _date = date.split("-");
  return `${_date[2]}-${_date[1]}-${_date[0]}`;
}

// api
let url = "https://fakestoreapi1.com/products";
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });

async function getData() {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();

// how to create a promise function without async keyword
function fun() {
  return new Promise((resolve, reject) => {
    if ("1" == 1) {
      resolve();
    } else {
      reject();
    }
  });
}

async function fun1() {
  if ("1" == 1) {
    return Promise.resolve();
  } else {
    return Promise.reject();
  }
}

fun1()
  .then(() => {})
  .catch(() => {});
