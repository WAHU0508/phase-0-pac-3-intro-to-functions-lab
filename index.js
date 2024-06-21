//test1
function shout(string) {
    return string;
}
console.log(shout("Hello!".toUpperCase()));
function shout(string) {
    return string.toUpperCase();
}
console.log(shout("Hello!"));
//test2
function whisper(string) {
    return string;
}
console.log(whisper("HELLO!".toLowerCase()));
function whisper(string) {
    return string.toLowerCase();
}
console.log(whisper("HELLO!"));
//test3
function logShout(string) {
    console.log(string.toUpperCase())
}
logShout("Hello!");
//test4
function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper("HELLO!");
//test5
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    else if (string === string.toUpperCase()){
        return "YES INDEED!";
    }
    else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}
console.log(sayHiToHeadphonedRoommate('hello'));
console.log(sayHiToHeadphonedRoommate('HELLO'));
console.log(sayHiToHeadphonedRoommate('Let\'s have dinner together!'));
