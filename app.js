
var adjective = ["a driven", "a conversion-driven", "a passionate", "an engaged", "an excited", "a strategy-driven", "an experienced market-driven", "a design-oriented", "a conversion oriented", "a freelance", "an prodigious", "a front-end", "a back-end", "a full-stack", "an solution-finding", "an innovative", "a synergy-creating", "an accomplished", "a content-producing", "an expert", "an innovative", "a masterful"];
var designer = ["designer", "developer", "creator", "builder", "UI/UX designer", "coder", "futurist", "visionary", "designer and developer", "freelancer", "web-creator", "web-developer", "web-designer", "programmer", "product-designer"];
var whoCodes = ["experiences", "digital experiences", "compelling experiences", "websites", "the future", "conversions", "value", "responsive navigation bars", "responsive modern websites", "modern web experiences", "digital experiences", "your digital world", "things online", "stuff online", "beautiful code", "beautiful code", "frameworks", "the latest frameworks", "beautiful and functional websites", "blazing fast software", "lightning fast software", "elegant solutions", "solutions", "elegant code for a 21st century audience", "progressive web apps", "forward-thinking solutions", "your market strategy", "your SEO rank", "a variety of web services", "the power of web technologies", "better brand solidification", "simple and efficient code"];
var readyToStart = ["Ready to make your ideas reality?", "How can we help your business?", "Let's create something.", "Let's make something awesome.", "Ready to start a new project?", "Let's write the future together.", "Are you ready to begin?", "Let's turn clicks into conversions.", "Let's build your reality.", "When do you want to level up?", "The sky is the limit.", "How can I add value to your organization?", "Hire me please.", "Let's work together.", "When do you want to begin?", "The future is waiting.", "Turn your ideas into reality.", "I will make your ideas reality.", "I turn ideas into reality.", "Let's talk, let's build.", "What do you want to make?", "How will you leave your mark?", "Your customers will thank you.", "Put the power of the web in your pocket.", "Please hire me, I'm desperate."]
var languages = ["Python", "React", "CSS", "HTML", "Javascript", "SASS", "Vue", "Jquery", "a proprietary coding language based on Egyptian hieroglyphs", "a Turing machine", "a magic 8 ball", "Ancient Sumerian", "C++"]
var bullshit = ["synergy", "cohesion", "fusion", ""]

var verbPresent = ["makes", "creates", "builds", "writes", "uses", "drives", "understands", "serves", "constructs", "assembles", "produces", "powers"];
var Tinder = ["Tinder", "Google", "Facebook", "The IOS app store", "Twitter", "Pintrest", "Zoom", "Slack", "Bing", "Hotmail", "Gmail", "Yahoo News"]
var butFor = ["dogs", "horses", "single-mothers", "flat-earthers", "fundamentalist Christians", "large teams", "enterprise applications"]
var BillGates = ["Bill Gates", "Tim Cook", "William Defoe", "Eric Andre", "Steve Wozniak", "Elon Musk", "Pete Cashmore"]
var actionArray = ["eat breakfast", "watch movies"]
var marketArray = ["value driven investing", "black market DVD sellers", "the way people shop online", "the way people send letters to their loved ones"]
var liveBreathe = ["I live and breathe code.", "Code is my life.", "I was born a coder.", "I choose code over sleep.", "Code, sleep, repeat.", "I think in javascript.", "Ruby on Rails is my love language.", "I was born to build websites.", "I build the future.", "'Websites' is my middle name.", "From child to man, code I can.", "#coder", "What can I say, I'm a natural.", "Modest, humble, amazing.", "My dreams run on Javascript and React.", "My stack is better than yours.", ]
var readArray = ["I knew how to read.", "I could brush my teeth.", "George W. Bush Senior was president.", "I knew how to tie my shoes.", "I hit puberty.", "I turned 7.", "my family had named me.", "I could read the code I was writing.", "C++ was invented."]
var powerArray = [" a thousand suns", " Steve Job's spirit", " a second CPU", "4 graphics cards in SLI", "10 men", "magic", "dark spirits", "strange occurances", "wet willies", "Pixar's render farm", "phones connected with bittorrent", "100 bitcoins in December 2017", "accelerated GPU processing", "unsafe CPU clocking", "synergy", "Bootstrap grid", ""];

function generate() {
  changeColor();
  var adjectiveNumber = Math.floor((Math.random() * adjective.length));
  var adjectiveReal = adjective[adjectiveNumber];

  var designerLength = designer.length;
  var designerNumber = Math.floor((Math.random() * designerLength));
  var designerReal = designer[designerNumber];

  var whoCodesLength = whoCodes.length;
  var whoCodesNumber = Math.floor((Math.random() * whoCodesLength));
  var whoCodesReal = whoCodes[whoCodesNumber];

  // VERB PRESENT
  var verbPresentLength = Math.floor((Math.random() * verbPresent.length));
  var verbPresentReal = verbPresent[verbPresentLength];
  // READY TO SIGN UP?
  var readyToStartLength = Math.floor((Math.random() * readyToStart.length));
  var readyToStartReal = readyToStart[readyToStartLength];
  // READY TO SIGN UP? 2
  var readyToStart2Length = Math.floor((Math.random() * readyToStart.length));
  var readyToStart2Real = readyToStart[readyToStart2Length];
  // TINDER
  var TinderNumber = Math.floor((Math.random() * Tinder.length));
  var TinderReal = Tinder[TinderNumber];
  // ButForHorses
  var butForNumber = Math.floor((Math.random() * butFor.length));
  var butForReal = butFor[butForNumber];
  // BillGates
  var BillGatesNumber = Math.floor((Math.random() * BillGates.length));
  var BillGatesReal = BillGates[BillGatesNumber];
  // BillGates1
  var BillGates1Number = Math.floor((Math.random() * BillGates.length));
  var BillGates1Real = BillGates[BillGates1Number];
  // LANGUAGES
  var language1Number = Math.floor((Math.random() * languages.length));
  var language2Number = Math.floor((Math.random() * languages.length));
  // action
  var actionNumber = Math.floor((Math.random() * actionArray.length));
  var action = actionArray[actionNumber];
  // market
  var marketNumber = Math.floor((Math.random() * marketArray.length));
  var market = marketArray[marketNumber];
  // liveBreathe
  var liveBreatheNumber = Math.floor((Math.random() * liveBreathe.length));
  var liveBreatheReal = liveBreathe[liveBreatheNumber];
  // read
  var readNumber = Math.floor((Math.random() * readArray.length));
  var read = readArray[readNumber];
  // power
  var powerNumber = Math.floor((Math.random() * powerArray.length));
  var power = powerArray[powerNumber];


  if (language1Number === language2Number) {
    var language1Number = language1Number + 1;
  }
  if (language1Number > languages.length) {
    var language1Number = language1Number - 2;
  }
  var language1 = languages[language1Number];
  var language2 = languages[language2Number];

  $(title).text("👋 Hi, I'm Seb. I'm " + adjectiveReal + " " + designerReal + " who " + verbPresentReal + " " + whoCodesReal + ".");
  $(subtitle).text(readyToStartReal);
  $(".about-paragraph").html("When I was young, I was a child who loved " + whoCodesReal + ". Because of this I knew that I had to become a " + designerReal + ".");
  $(".about-paragraph2").html("I was using " + language1 + " to write code before " + read);
  $(".about-paragraph3").html(liveBreatheReal);
  // PROJECT 1
  $(".project1").text("This project is like " + TinderReal + " but for " + butForReal + ". It is able to harness the power of " + power + " to make the app better. We have recently secured funding from " + BillGatesReal + ". This application was built using " + language1 + " for the front end, and " + language2 + " on the server-side.");
  // PROJECT 1 TITLE
  $(".project1-title").text(TinderReal + "-like Web Application");
  // PROJECT 2
  $(".project2").text("Looking at " + market + " I saw a huge untapped market. So I reached out to my good friend " + BillGates1Real + " who loved what I was doing and offered to fund the entire project. Together we will change the way consumers " + action + ".");
  // PROJECT 2 TITLE
  $(".project2-title").text("Collab with " + BillGates1Real);
  // Contact subtitle
  $(".contact-subtitle").text(readyToStart2Real);
}

var colorArray = ["#F9A826", "#00BFA6", "#2e73ce", "#9f63ff", "#F50057", "#3587A4", "#C1DFF0", "#ABC4AB", "#F28F3B", "#00CC99", "#FCA17D", "#DA627D", "#FCA17D", "#A7ADC6", "#9067C6", "#F7ECE1", "#FFBE86", "#FFB5C2", "#D8973C", "#BD632F", "#EA638C", "#558B6E", "#88A09E", "#6BBAEC", "94B9AF", "#F17300"]
function changeColor(){
  var number = Math.floor((Math.random() * colorArray.length) + 0);
  // for (i = 0; i < colorArray.length; i++) {
  //   var color = colorArray[i];
  //   var secondaryColor = colorArray[i];
  // }
  var color = colorArray[number];
  var secondaryColor = colorArray[number];
  $("body").get(0).style.setProperty("--accent-color", color);
  $(".accent-path").attr("fill", color);
  $(".lines").attr("stroke", color);
  $("body").get(0).style.setProperty("--accent-color2", secondaryColor + "33");
  $("body").get(0).style.setProperty("--light-color", secondaryColor + "11");
  $(".cls-2").attr("fill", secondaryColor + "11");
}

// ON ENTER RETURN
$(document).ready(generate())
$(document).keypress(function(e) {
  var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
      generate();
    }
})

// "started using HTML before I learned to read"