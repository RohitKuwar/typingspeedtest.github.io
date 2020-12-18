const setOfWords = [
    "Sachin Ramesh Tendulkar is an Indian former international cricketer who served as captain of the Indian national team. He is widely regarded as one of the greatest batsmen in the history of cricket. He is the highest run scorer of all time in International cricket.",
    "Artificial intelligence is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals. The term 'artificial intelligence' is often used to describe machines (or computers) that mimic 'cognitive' functions that humans associate with the human mind, such as 'learning' and 'problem solving'",
    "Mahendra Singh Dhoni is a former Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2016 and in Test cricket from 2008 to 2014. Under his captaincy, India won the inaugural 2007 ICC World Twenty20, the 2010 and 2016 Asia Cups, the 2011 ICC Cricket World Cup and the 2013 ICC Champions Trophy.",
    "Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications (Web apps), electronic businesses, and social network services.",
    "The Ministry of Culture plays a vital role in the preservation and promotion of art and culture. Its aim is to develop ways and means by which basic cultural and aesthetic values and perceptions remain active and dynamic among the people. It also undertakes programmes for the promotion of various manifestations of contemporary art. ",
    "Tata Motors Group is a $35 billion organisation. It is a leading global automobile manufacturing company. Its diverse portfolio includes an extensive range of cars, sports utility vehicles, trucks, buses and defence vehicles. Tata Motors is one of India's largest OEMs offering an extensive range of integrated, smart and e-mobility solutions.",
    "Machine learning is the study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence. Machine learning algorithms build a model based on sample data, known as 'training data'. Machine learning algorithms are used in a wide variety of applications, such as email filtering and computer vision.",
    "It’s time to roll out your yoga mat and discover the combination of physical and mental exercises that for thousands of years have hooked yoga practitioners around the globe. The beauty of yoga is that you don’t have to be a yogi or yogini to reap the benefits. Whether you are young or old, overweight or fit, yoga has the power to calm the mind and strengthen the body.",
    "An economy is an area of the production, distribution and trade, as well as consumption of goods and services by different agents. Understood in its broadest sense. The economy is defined as a social domain that emphasize the practices, discourses, and material expressions associated with the production, use, and management of resources",
    "Plasma is the clear, straw-colored liquid portion of blood that remains after red blood cells, white blood cells, platelets and other cellular components are removed. It is the single largest component of human blood, comprising about 55 percent, and contains water, salts, enzymes, antibodies and other proteins. "
]
 
const msg = document.getElementById('msg');
const typedWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    let endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    console.log(Number.isNaN(totalTime));
    console.log(totalTime);

    let totalStr = typedWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totalTime) * 60);

    let finalMsg = `Your speed of typing is ${speed} words per minutes.`;
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;


words1.forEach(function(item, index){
    if(item == words2[index]){
        cnt++;
    }
})

let errorWords = (words1.length - cnt);
return(` Out of ${words1.length} words, you typed ${cnt} words correct and the total number of missing words are ${errorWords}.`);
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener('click', function(){
    if(this.innerText == "Start"){
        typedWords.disabled = false;
        msg.style.background = "green";
        playGame();
    } else if(this.innerText == "Done"){
        typedWords.disabled = true;
        btn.innerText = "Start";
        msg.style.cssText = "background:hotpink;color:black";
        endPlay();
    }
});
