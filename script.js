let eventType = prompt("What type of event are you attending?")
console.log(eventType)

let tempfahr = prompt("What is the temperature outside?")
console.log(tempfahr)

let result;

if (eventType === "casual" && tempfahr < 54) {
    result = `Since it is ${tempfahr} degrees and you are going to a ${eventType} you should wear something comfy and a coat.`;
    console.log(result)
} else if (eventType === "casual" && tempfahr >= 54 && eventType === "casual" && tempfahr <= 70) {
    result = `Since it is ${tempfahr} degrees and you are going to a ${eventType} you should wear something comfy and a jacket.`;
    console.log(result)
} else if (eventType === "casual" && tempfahr >70) {
    result = `Since it is ${tempfahr} degrees and you are going to a ${eventType} you should wear something comfy and no jacket.`;
    console.log(result)
}

if (eventType === "semi-formal" && tempfahr < 54) {
    result = `Since it is ${tempfahr} degrees and you are going to a ${eventType} you should wear a polo and a coat.`;
    console.log(result)
} else if (eventType === "semi-formal" && tempfahr >= 54 && eventType === "casual" && tempfahr <= 70) {
  result = `Since it is ${tempfahr} degrees and you are going to a ${eventType} you should wear a polo and a jacket.`;
  console.log(result)
} else if (eventType === "semi-formal" && tempfahr >70) {
    result = `Since it is ${tempfahr} degrees and you are going to a ${eventType} you should wear a polo and no jacket.`;
    console.log(result)
}

if (eventType === "formal" && tempfahr < 54) {
    result = `Since it is ${tempfahr} degrees and you are going to a ${eventType} you should wear a suit and a coat.`;
    console.log(result)
} else if (eventType === "formal" && tempfahr >= 54 && eventType === "casual" && tempfahr <= 70) {
  result = `Since it is ${tempfahr} degrees and you are going to a ${eventType} you should wear suit and a jacket.`;
  console.log(result)
} else if (eventType === "formal" && tempfahr >70) {
    result = `Since it is ${tempfahr} degrees and you are going to a ${eventType} you should wear suit and no jacket.`;
    console.log(result)
}