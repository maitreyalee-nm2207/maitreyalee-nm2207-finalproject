// waving pride flag

function prideFlag1() {
    document.getElementById("prideFlag").src= "resources/prideflag2.png"
}

function prideFlag2() {
    document.getElementById("prideFlag").src= "resources/prideflag.png"
}


// back to top button

let topButton = document.getElementById("topButton");

// When the user scrolls down 500px from the top of the document, button will appear
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// pie chart: oppose VS support section 377A based on IPS report

const pieQ1 = new Chart("PieQ1", 
{
    type: "pie",
    data: {
        labels: ["Oppose", "Support"],
        datasets: [ {
            data: [16.6, 83.3],
            backgroundColor: ["rgb(250,128,114)", "rgb(144,238,144)"],
            hoverOffset: 4,
            }]
        },
    options: {
        plugins:{
            title:{
                display: true,
                text: ["Support VS Opposition for","Section 377A in 2018"],
                padding: {top:10, bottom:10},
            }
        }
   }
});


// pie chart: agrree or disagree with statement based on Ipsos report

const pieQ2 = new Chart("PieQ2", 
{
    type: "pie",
    data: {
        labels: ["Disagree", "Agree"],
        datasets: [ {
            data: [51.5, 48.5],
            backgroundColor: ["rgb(250,128,114)", "rgb(144,238,144)"],
            hoverOffset: 4,
            }]
        },
    options: {
        plugins:{
            title:{
                display: true,
                text: ["'I am more accepting of same-sex relationships","than I was before.' (2018)"],
                padding: {top:10, bottom:10},
            }
        }
   }
});


// pie chart: button to update chart: 2018 VS 2022

document.getElementById("button2018").addEventListener("click", function changePerception() {
    
    pieQ1.data.datasets[0].data[0] = 16.6;
    pieQ1.data.datasets[0].data[1] = 83.3;
    
    pieQ2.data.datasets[0].data[0] = 51.5;
    pieQ2.data.datasets[0].data[1] = 48.5;
    
    pieQ1.options.plugins.title.text = ["Support VS Opposition for","Section 377A in 2018"];
    pieQ2.options.plugins.title.text = ["'I am more accepting of same-sex relationships","than I was before.' (2018)"];
    
    pieQ1.update();
    pieQ2.update();

    // console.log("test 2018 button");

    setTimeout(()=>{alert("Hmm, Singaporeans aren't very accepting of the community in the past.");}, 1000);

});

document.getElementById("button2022").addEventListener("click", function changePerception() {
    
    pieQ1.data.datasets[0].data[0] = 30.8;
    pieQ1.data.datasets[0].data[1] = 69.2;

    pieQ2.data.datasets[0].data[0] = 36.6;
    pieQ2.data.datasets[0].data[1] = 63.4;
    
    pieQ1.options.plugins.title.text = ["Support VS Opposition for","Section 377A in 2022"];
    pieQ2.options.plugins.title.text = ["'I am more accepting of same-sex relationships","than I was before.' (2022)"];

    // console.log(pieQ1.options.plugins.title.text);

    pieQ1.update();
    pieQ2.update();

    setTimeout(()=>{alert("But it seems like there is a growing acceptance now!");}, 1000);

});


// bar chart: 2013 VS 2018 perception based on IPS report

const labelPerception=["'Sexual relations between two same-sex adults was always wrong.'", "'Gay marriage was always wrong.'", "'A gay couple adopting a child was always wrong.'"];

const dataPerception = {
    labels: labelPerception,
    datasets: [
        {
            label: "2013",
            data: [61.6, 58.5, 45.9],
            borderWidth: 2,
            backgroundColor: "rgb(143, 187, 188)",
            borderColor: "rgb(143, 187, 188)",
        },
        {
            label: "2018",
            data: [50.4, 48.5, 41.2],
            borderWidth: 2,
            backgroundColor: "rgb(250, 170, 210)",
            borderColor: "rgb(250, 170, 210)",
        },
    ]
}

new Chart("singaporean-perception-change",
    {
        type: "bar",
        data: dataPerception,
        options: {
            maintainAspectRatio: false,
            legend: {
                display: true
            },
            plugins: {
                title: {
                    display: true,
                    text: ["Singaporeans' perceptions on the LGBTQ+ community","from 2013 to 2018"],
                    padding: {top: 10, bottom: 30},
                }
            }
        }
    });


// functions to hide and show texts whenever the buttons are clicked

function acceptanceText() {
    let aText = document.getElementById("aText");
    if (aText.style.display === "none") {
        aText.style.display = "block";
      } else {
        aText.style.display = "none";
      }
};

function exposureText() {
    let eText = document.getElementById("eText");
    if (eText.style.display === "none") {
        eText.style.display = "block";
      } else {
        eText.style.display = "none";
      }
};

function discussionText() {
    let dText = document.getElementById("dText");
    if (dText.style.display === "none") {
        dText.style.display = "block";
      } else {
        dText.style.display = "none";
      }
};


// bar chart: Gen Z VS Baby Boomer perception based on 2018 report by Ipsos

const labelAge = [
   ["'I believe that Singaporeans should be able to participate","in same-sex relationships.'"], 
   ["'I am more accepting of same-sex relationships","than I was five years ago.'"],
   ["'Most Singaporeans are more accepting of same-sex relationships","than they were five years ago.'"]
];

const dataAge = {
    labels: labelAge,
    datasets: [
        {
            label: "Gen Z",
            data: [56, 59, 54],
            borderWidth: 1,
            backgroundColor: "rgb(174, 191, 235)",
            borderColor: "rgb(174, 191, 235)",
        },
        {
            label: "Baby Boomers",
            data: [48, 23, 37],
            borderWidth: 1,
            backgroundColor: "rgb(200, 235, 183)",
            borderColor: "rgb(200, 235, 183)",
        },
    ]
}

new Chart("age-difference",
    {
        type: "bar",
        data: dataAge,
        options: {
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    position: "top",
                    text:["Gen Zs VS Baby Boomers perception","on the LGBTQ+ community"],
                    fontFamily: "monospace",
                    fontSize: 24,
                    fontColor: 'rgb(0,120,0)',
                }
            }
        }
    });


// typewriter effect for conclusion header

let i = 0;
let txt = "So... What's next for Singapore?";
let speed = 130; // speed in miliseond


function typeWriter() {
    
    // start with 0 letters, so the typewriter will start
    if (i < txt.length) {
    document.getElementById("conclusionHeader").innerHTML += txt.charAt(i);
    
    // increasing i by 1 every milisecond
    i++;
    setTimeout(typeWriter, speed);
  }
}


// doughnut chart: for users to vote whether they oppose or support Section 377A

const votePie = new Chart("votePie", 
{
    type: "doughnut",
    data: {
        labels: ["Oppose Section 377A", "Support Section 377A"],
        datasets: [ {
            data: [], // initialise data array with empty array
            backgroundColor:
                ["rgb(255, 115, 126)", "rgb(110, 219, 136)"],
            hoverOffset: 4,
            }]
        },
    options: {
        plugins:{
            title:{
                display: true,
                text: "Do you support or oppose Section 377A?",
                padding: {top:10, bottom:10},
            }
        }
    }
});


// input data from fetch API endpoint into votePie

const getOpinions = () => {
    fetch("https://nm2207-db.vercel.app/api/377").then((response) =>
      response.json().then((v) => {
        const opposeNum = v[0].oppose; // v is value
        const supportNum = v[0].support;
        votePie.data.datasets[0].data = [opposeNum, supportNum];
        votePie.update(); // initialise data of votePie, set to the numbers stored in the server
      })
    );
  };

getOpinions(); // need to call the function for the pie to be updated


// button: vote support or oppose Section 377A

const supportButton = document.getElementById("supportButton");

supportButton.addEventListener("click", function () {

    updateChart("support");
    console.log("support is clicked");

}
);

const opposeButton = document.getElementById("opposeButton");

opposeButton.addEventListener("click", function () {
    
    updateChart("oppose");
    console.log("oppose is clicked");

}
);


// connect votePie to the server via fetch API, and updates votePie everytime the respective buttons are clicked

const updateChart = (type) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: type }),
    };
    fetch("https://nm2207-db.vercel.app/api/377", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");

        //
        const data = isJson && (await response.json());

        console.log(data);

        console.log("support votes: " + data.value.support);
        console.log("oppose votes: " + data.value.oppose);
  
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        console.log(data.value);
        if (type === "support") {
            votePie.data.datasets[0].data[1] = data.value.support + 1; // need to add 1 to the value in the server for votePie to be updated
            votePie.update(); //update your chart with new value for support
        } else if (type === "oppose") {
            votePie.data.datasets[0].data[0] = data.value.oppose + 1;
            votePie.update(); //update your chart with new value for oppose
        }
    })
      .catch((error) => {
        console.log(error);
      });
  };
  

// pride flag colour changer: generate random value to get random color

let scaling = function(bigValue) {

    let scaleV = 0;

    let sinValue = Math.sin(bigValue);
    
    // x: rgb value range
    xMax = 255;
    xMin = 0;

    // y: sin function range
    yMax = 1;
    yMin = -1;

    var percent = (sinValue - yMin) / (yMax - yMin);
    scaleV = percent * (xMax - xMin) + xMin;
    
    // return a value between 0 and 255 
    return scaleV;
};

let redValue = 255*Math.random();

document.getElementById("colorButton").addEventListener("click", function colorChanger() {

    redValue = redValue + 50;
    let scaledRed = scaling(redValue);
    let newRgbString = "rgb("+scaledRed+"," +0+ "," +0+")";

    colorButton.style.backgroundColor = newRgbString; // change colour of button everytime it is clicked
    console.log("change colour: " + newRgbString);
 }
 );
