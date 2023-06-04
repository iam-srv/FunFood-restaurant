// function getMenu() {
//     let endpoint = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';
  
//     setTimeout(() => {
//       fetch(endpoint)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           // Replace console.log with the desired logic to display the data
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     }, 3000); // Set the desired delay in milliseconds (e.g., 3000 for 3 seconds)
//   }
  
//   getMenu();
  
  let obj = 
    [
        {
          "id": 1,
          "name": "Cheeseburger",
          "price": 5.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
        },
        {
          "id": 2,
          "name": "Pizza",
          "price": 8.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
        },
        {
          "id": 3,
          "name": "Tacos",
          "price": 3.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
        },
        {
          "id": 4,
          "name": "Sushi",
          "price": 11.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
        },
        {
          "id": 5,
          "name": "Pasta",
          "price": 9.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
        },
        {
          "id": 6,
          "name": "Fried Chicken",
          "price": 7.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
        },
        {
          "id": 7,
          "name": "Grilled Cheese Sandwich",
          "price": 4.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
        },
        {
          "id": 8,
          "name": "Steak",
          "price": 15.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
        },
        {
          "id": 9,
          "name": "Caesar Salad",
          "price": 6.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
        },
        {
          "id": 10,
          "name": "Fish and Chips",
          "price": 8.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
        },
        {
          "id": 11,
          "name": "Ramen",
          "price": 9.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
        },
        {
          "id": 12,
          "name": "Burrito",
          "price": 7.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
        },
        {
          "id": 13,
          "name": "Pho",
          "price": 8.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
        },
        {
          "id": 14,
          "name": "Pad Thai",
          "price": 9.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
        },
        {
          "id": 15,
          "name": "Gyro",
          "price": 6.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
        },
        {
          "id": 16,
          "name": "Ice Cream",
          "price": 3.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
        },
        {
          "id": 17,
          "name": "Smoothie",
          "price": 4.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
        },
        {
          "id": "18",
          "name": "Apple Pie",
          "price": 4.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
        },
        {
          "id": 19,
          "name": "Chocolate Cake",
          "price": 5.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
        },
        {
          "id": 20,
          "name": "Pancakes",
          "price": 4.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
        },
        {
          "id": 21,
          "name": "Cupcake",
          "price": 2.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
        },
        {
          "id": 22,
          "name": "Crepes",
          "price": 5.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
        },
        {
          "id": 23,
          "name": "Club Sandwich",
          "price": 6.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
        },
        {
          "id": 24,
          "name": "Falafel",
          "price": 5.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
        },
        {
          "id": 25,
          "name": "Curry",
          "price": 9.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
        }
      ]


  const header = document.querySelector("header");

  window.addEventListener("scroll" , function(){
    header.classList.toggle("sticky" , window.scrollY > 0);
  });

  
  function getMenu(obj){

    const container = document.getElementsByClassName("container-box")[0];
  
    for(let i = 0; i < obj.length; i++){
      let item = obj[i];

      let elements = `
      <div class="c-mainbx">
      <div class="container-img">
          <img src="${item.imgSrc}" alt="api image">
      </div>
      <div class="container-text">
          <p>${item.name}</p>
           <b>${item.price}$</b>
      </div>
      `
      container.innerHTML += elements;
    }

  }
  
  window.addEventListener("load",getMenu(obj) );

  //  take order function

  function takeOrder(obj) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const selectedBurgers = [];
        for (let i = 0; i < obj.length; i++) {
          let item = obj[i];
           
          if(item.name.includes("urger")){ // selecting the burgers from the list
          selectedBurgers.push(obj[i]);
          console.log(obj[i]);
        }
      }
     
        resolve(selectedBurgers);
      }, 2500);
    });
  }

  


function randomBurgers() {
  let randomBurgers = [];

  takeOrder(obj)
    .then(selectedBurgers => {
      console.log("Order received:");
      
      if (selectedBurgers.length > 3) {
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * selectedBurgers.length);
          randomBurgers.push(selectedBurgers[randomIndex]);
        }
      } else {
        randomBurgers = selectedBurgers;
      }

      renderBurgers(randomBurgers);
    })
    .catch(error => {
      console.error("Error occurred while taking the order:", error);
    });
}

function renderBurgers(randomBurgers) {
  const container = document.getElementsByClassName("container-box")[0];
  container.innerHTML = "";
  
  for (let i = 0; i < randomBurgers.length; i++) {
    let item = randomBurgers[i];

    let elements = `
      <div class="c-mainbx">
        <div class="container-img">
          <img src="${item.imgSrc}" alt="api image">
        </div>
        <div class="container-text">
          <p>${item.name}</p>
          <b>${item.price}$</b>
        </div>
      </div>
    `;

    container.innerHTML += elements;
  }
}

// orderPrep
function orderPrep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

function placeOrder(){
orderPrep()
  .then(orderStatus => {
    console.log("Order status:", orderStatus);
    // Handle the order status as needed
  })
  .catch(error => {
    console.error("Error occurred during order preparation:", error);
  });

  let popup = document.getElementsByClassName("model-container")[0];
  popup.style.transform = 'scale(1)';

  let status = document.getElementById("status");
  const message = `Your order is placed. To pay please click the pay button`;

  status.innerText = message;

  document.getElementById("pay-button").innerText = "Pay Now"
}


// payment

function payOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
}

function payment(){
payOrder()
  .then(orderStatus => {
    console.log("Payment status:", orderStatus);
    
    let status = document.getElementById("status");
    const message = `Payment Successfull`;
    status.innerText = message;

    document.getElementById("pay-button").style.display = "none";
    document.getElementById("cancel").innerText = "close";
  })
  .catch(error => {
    console.error("Error occurred during payment:", error);
  });
  
}



const payButton = document.getElementById("pay-button");

payButton.addEventListener("click", function() {
  
  payOrder()
    .then(orderStatus => {
      if (orderStatus.paid) {
        orderStatus.paid = true;
        console.log("Payment completed. Order status:", orderStatus);
        alert("Thank you for eating with us today!");
      } else {
        console.log("Payment not completed.");
      }
    })
    .catch(error => {
      console.error("Error occurred during payment:", error);
    });
});

//  thank you function
function thankyouFnc() {
  payOrder()
    .then(orderStatus => {
      if (orderStatus.paid) {
        alert("Thank you for eating with us today!");
      } else {
        console.log("Payment not completed.");
      }
    })
    .catch(error => {
      console.error("Error occurred during payment:", error);
    });
}

function closePopup(){

  document.getElementsByClassName("model-container")[0].style.transform = "scale(0)"
}