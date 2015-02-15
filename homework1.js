<<<<<<< HEAD
var authorsArray=[
    {
        authorName:"Алберт Айнщайн",
        info:"1879 - 1955",
        quotes:["Ala bala portokala.","edin drug citat","dasdasd dsasdasa","dasdas ldj1 daskljdwq"]
    },
    {
        authorName:"Проба мроба",
        info: "neshto",
        quotes:["citat edno","citat dve","citat tri"]
    }
];

=======
var authorsArray=[{
  authorName:"Алберт Айнщайн",
  info:"(1879 - 1955)",
  quotes:["Вечната загадка на света е неговата познаваемост","Всяко постижение в науката започва с опит и свършва с него","Въображението е по-важно от знанието"]
},
{
  authorName:"Наполеон Бонапарт",
  info: "(1769 — 1821)",
  quotes:["Чуждата глупост не ни прави по-умни","Никога не прекъсвай врага си, докато прави грешка","Славата отлита, но забравата е завинаги"]
},
{
  authorName:"Джордж Бърнард Шоу",
  info: "(1856-1950)",
  quotes:["Най-трудно е да се отговори на въпрос, на който отговорът е очевиден","Не е нужно да изядеш цялото яйце, за да разбереш, че е развалено"]
}

];

setTimeout(function(){ alert("You ran out of time"); }, 60000);


>>>>>>> 2b3233106f795ba7eb4bb3624b50978ff2c97385
var currentQuote = {
    quoteId:null,
    authorId:null,
    randomArray:null,
    isOk:false
}

function randomization(obj) {
    if(obj.length>0) {
        var randomAuthorId = Math.floor(Math.random()* obj.length);

        if(obj[randomAuthorId].quotes.length>0) {
            var randomId = Math.floor(Math.random()* obj[randomAuthorId].quotes.length);
            
            if(obj[randomAuthorId].quotes[randomId].length>0) {
                    var splitArray = obj[randomAuthorId].quotes[randomId].split(' ');
                    currentQuote.randomArray = shuffle(splitArray);
                    currentQuote.quoteId = randomId;
                    currentQuote.authorId = randomAuthorId;
                    currentQuote.isOk = true;
            } else {
                console.log("current quote is empty");
            }

            console.log("current random id is:"+randomId);

        } else {
            console.log("There are no quotes for "+obj.authorName);
        }
    } else {
        console.log("There are no authors");
    }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function compare() {
    if(document.getElementById("inputField").value===authorsArray[currentQuote.authorId].quotes[currentQuote.quoteId]) {
        alert("Correct!");
    } else {
        alert("Wrong answer!")
    }
}

function init() {
    randomization(authorsArray);

    if(currentQuote.isOk){
        document.getElementById("random").innerHTML='" '+ currentQuote.randomArray.join(" ") + ' "';
        document.getElementById("info").innerHTML=authorsArray[currentQuote.authorId].authorName+" "+authorsArray[currentQuote.authorId].info;
    } else {
        document.getElementById("inputField").style.display = 'none';
        document.getElementById("finish").style.display = 'none';
        document.getElementById("info").innerHTML="System error";
    }
}
init();
