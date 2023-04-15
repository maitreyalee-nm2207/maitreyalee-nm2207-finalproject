// waving pride flag

function prideFlag1() {
    // changes the image of the flag to a flipped version on mouse over
    document.getElementById("prideFlag").src= "resources/prideflag2.png"
}

function prideFlag2() {
    // changes the image of the flag to its original version on mouse out
    document.getElementById("prideFlag").src= "resources/prideflag.png"
}


// back to top button

let topButton = document.getElementById("topButton");

// function will be called upon scrolling
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    
    // when user scrolls down 500px from the top of the document, the button will appear
    topButton.style.display = "block";
  } else {

    // otherwise, the button will not appear
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// custom tracking cursor

const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function(e) {
    let x = e.pageX;
    let y = e.pageY;

    // update the position of the custom cursor element based on the mouse position
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

// pie chart: oppose VS support section 377A based on IPS report

const pieQ1 = new Chart("PieQ1", 
{
    type: "pie",
    data: {
        labels: ["Oppose", "Support"],
        datasets: [ {
            data: [16.6, 83.3],
            backgroundColor: ["rgb(180,218,240)", "rgb(240,208,166)"],
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
            backgroundColor: ["rgb(240,192,192)", "rgb(139,232,166)"],
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
    
    // assigning new data to the pie charts upon clicking the 2018 button
    
    pieQ1.data.datasets[0].data[0] = 16.6;
    pieQ1.data.datasets[0].data[1] = 83.3;
    
    pieQ2.data.datasets[0].data[0] = 51.5;
    pieQ2.data.datasets[0].data[1] = 48.5;

    // assigning new text to the pie charts upon clicking the 2018 button
    
    pieQ1.options.plugins.title.text = ["Support VS Opposition for","Section 377A in 2018"];
    pieQ2.options.plugins.title.text = ["'I am more accepting of same-sex relationships","than I was before.' (2018)"];
    
    pieQ1.update();
    pieQ2.update();

    // console.log("test 2018 button");

    setTimeout(()=>{alert("Hmm, Singaporeans aren't very accepting of the community in the past.");}, 1000);

});

document.getElementById("button2022").addEventListener("click", function changePerception() {
    
    // assigning new data to the pie charts upon clicking the 2022 button
    
    pieQ1.data.datasets[0].data[0] = 30.8;
    pieQ1.data.datasets[0].data[1] = 69.2;

    pieQ2.data.datasets[0].data[0] = 36.6;
    pieQ2.data.datasets[0].data[1] = 63.4;

    // assigning new text to the pie charts upon clicking the 2022 button
    
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
            borderColor: "rgb(138, 180, 181)",
            backgroundColor: "rgb(143, 187, 188, 0.7)",
        },
        {
            label: "2018",
            data: [50.4, 48.5, 41.2],
            borderWidth: 2,
            borderColor: "rgb(230, 154, 192)",
            backgroundColor: "rgb(250, 170, 210, 0.7)",
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

        // if text was hidden, clicking the button will show it again
        aText.style.display = "block";
      } else {

        // if text was already present, clicking the button will hide the text
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


// line chart: propoertion of Gen Z VS Baby Boomers in Singapore

let year = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
let genzAge = [926035, 935265, 946412, 939488, 946630, 960224, 974319, 985598, 
                1005151, 1027464, 1027881, 1018949, 1011269, 1003814, 997710, 
                992447, 988108, 988496, 980197, 967421, 953161, 920663, 922513];
let babyboomerAge = [235296, 243639, 251024, 248638, 264541, 279693, 294726, 305586,
                315790, 330132, 338387, 352645, 378636, 404437, 431601, 459715,
                487570, 516692, 547854, 581680, 614368, 639008, 678133];


new Chart("singapore-population", {
    type: 'line',
    data: {
        labels: year, // the different years as data, shown on x-axis
        datasets: [
            { 
            data: genzAge, // genzAge as dataset, shown on y-axis
            label: "Gen Z",
            borderColor:"rgb(159, 173, 212)",
            backgroundColor: "rgb(174, 191, 235, 0.3)",
            fill: true, // area below line will be coloured
            },
            { 
            data: babyboomerAge, // babyboomerAge as dataset, shown on y-axis
            label: "Baby Boomers",
            borderColor: "rgb(152, 189, 138)",
            backgroundColor: "rgb(176, 232, 153, 0.3)",
            fill: true // area below line will be coloured
            },
        ]}
});
                  

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
            borderWidth: 2,
            borderColor: "rgb(159, 173, 212)",
            backgroundColor: "rgb(174, 191, 235, 0.7)",
        },
        {
            label: "Baby Boomers",
            data: [48, 23, 37],
            borderWidth: 2,
            borderColor: "rgb(152, 189, 138)",
            backgroundColor: "rgb(176, 232, 153, 0.7)",
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
                    fontColor: 'rgb(0, 120, 0)',
                }
            }
        }
    });


// typewriter effect for conclusion header

let i = 0;
let text = "So... What's next for Singapore?";
let speed = 130; // speed in miliseond


function typeWriter() {
    
    // start with 0 letters, so the typewriter will start
    if (i < text.length) {

    // inserts text as defined above into "conclusionHeader" element in HTML
    // The charAt() method returns the character at the specified index in a string, which starts at 0.
    document.getElementById("conclusionHeader").innerHTML += text.charAt(i);
    
    // increasing number of letters by 1 every milisecond
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
                ["rgb(180, 218, 240)", "rgb(240, 208, 166)"],
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
        votePie.data.datasets[0].data = [opposeNum, supportNum]; // set data of votePie with data stored in server
        votePie.update(); // initialise data of votePie, set to the numbers stored in the server
      })
    );
  };

getOpinions(); // need to first call the function for the pie chart to be updated with the server values


// button: vote support or oppose Section 377A

const supportButton = document.getElementById("supportButton");

supportButton.addEventListener("click", function () {

    updateChart("support"); // call updateChart function that inputs the support vote into the server and updates the chart
    console.log("support is clicked");

}
);

const opposeButton = document.getElementById("opposeButton");

opposeButton.addEventListener("click", function () {
    
    updateChart("oppose"); // call updateChart function that inputs the oppose vote into the server and updates the chart
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
    fetch("https://nm2207-db.vercel.app/api/377", requestOptions) // fetches data from server which stores the number of oppose and support votes
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");

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
            votePie.update(); //updates my doughnut chart with new value for support
        } else if (type === "oppose") {
            votePie.data.datasets[0].data[0] = data.value.oppose + 1;
            votePie.update(); //updates my doughnut chart with new value for oppose
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

    redValue = redValue + 50; // increases R value by 50 everytime the button is clicked
    let scaledRed = scaling(redValue); // ensure that random value generated is within 0 to 255
    let newRgbString = "rgb("+scaledRed+"," +0+ "," +0+")"; // make sure only shades of red are generated

    colorButton.style.backgroundColor = newRgbString; // assigns a random rgb string to the button everytime it is clicked
    console.log("change colour: " + newRgbString);
 }
 );


 // submit button for contact form

 document.getElementById("buttonSubmit").addEventListener("click", function () {
    alert("Thanks for stopping by!");
 });
