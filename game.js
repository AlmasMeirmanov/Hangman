// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var commonWords = [
  "the",
  "of",
  "and",
  "a",
  "to",
  "in",
  "is",
  "you",
  "that",
  "it",
  "he",
  "was",
  "for",
  "on",
  "are",
  "as",
  "with",
  "his",
  "they",
  "I",
  "at",
  "be",
  "this",
  "have",
  "from",
  "or",
  "one",
  "had",
  "by",
  "word",
  "but",
  "not",
  "what",
  "all",
  "were",
  "we",
  "when",
  "your",
  "can",
  "said",
  "there",
  "use",
  "an",
  "each",
  "which",
  "she",
  "do",
  "how",
  "their",
  "if",
  "will",
  "up",
  "other",
  "about",
  "out",
  "many",
  "then",
  "them",
  "these",
  "so",
  "some",
  "her",
  "would",
  "make",
  "like",
  "him",
  "into",
  "time",
  "has",
  "look",
  "two",
  "more",
  "write",
  "go",
  "see",
  "number",
  "no",
  "way",
  "could",
  "people",
  "my",
  "than",
  "first",
  "water",
  "been",
  "call",
  "who",
  "oil",
  "its",
  "now",
  "find",
  "long",
  "down",
  "day",
  "did",
  "get",
  "come",
  "made",
  "may",
  "part"
]
var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]
var buttons = letters.map(item => `<button>${item}</button>`).join("")
document.querySelector("#button").innerHTML = buttons

var filtered = commonWords.filter(item => item.length >= 3)
console.log(filtered)
var word = filtered[Math.floor(Math.random() * filtered.length)]
console.log(word)

var answer = []
for (var i = 0; i < word.length; i++) {
  answer[i] = "_"
}
var remainingLetters = word.length
//while (remainingLetters >= 0 && word.length < lives)

var lives = 5

console.log(lives)
document.querySelector("#lives").innerHTML = lives

$("button").on("click", function(e) {
  this.disabled = true
  var value = $(this).html()
  console.log(value)

  var showletter = answer
  for (var j = 0; j < word.length; j++) {
    if (word[j] === value) {
      answer[j] = value
      alert("You got it!")
      document.querySelector("#answer").innerHTML = answer.join("")
      console.log(answer)
    }
    if (word != value) {
      lives = lives = -1
    }
    //if ((lives = 5)) {
    //alert("You Loose!")
    //}
  }
})
