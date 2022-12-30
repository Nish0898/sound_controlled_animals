function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wSv5iH6gi/model.json', modelReady);
}

function modelReady(){
    console.log ("modelReady");
}