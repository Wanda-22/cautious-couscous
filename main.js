var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
}
    recognition.onresult=function(q){
        console.log(q);
        Content=q.results[0][0].transcript.toLowerCase();
        console.log(Content);
        if (Content=="selfie") {
            speak();
            console.log("Taking selfie"); 
        }
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    var synth = window.speechSynthesis;
    sd = "Taking your next Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(sd);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        img= "selfie1";
        sd = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(sd);
        synth.speak(utterThis);
        take_selfie();
    
    },5000);

    setTimeout(function(){
        img= "selfie2";
        sd = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(sd);
        synth.speak(utterThis);
        take_selfie();
    
    },10000);

    
    setTimeout(function(){
        img= "selfie3";
        take_selfie();
        
    },15000);


}

function take_selfie() {
    console.log(img);
    Webcam.snap( function(data_uri) {
        if (img=="selfie1") {
            document.getElementById('result1').innerHTML = 
         '<img id="selfie1" src="'+data_uri+'"/>';  
        }
        if (img=="selfie2") {
            document.getElementById('result2').innerHTML = 
         '<img id="selfie2" src="'+data_uri+'"/>';  
        }
        if (img=="selfie3") {
            document.getElementById('result3').innerHTML = 
         '<img id="selfie3" src="'+data_uri+'"/>';  
        }
    } );
 }