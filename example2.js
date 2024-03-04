const userDefinedGreetingMessage = function greetingUser(name){
    return function (greetingMessage){
        return name.concat(" ",greetingMessage);
    }
}

console.log(userDefinedGreetingMessage("sreekanth")("Good Morning"));
console.log(userDefinedGreetingMessage("Pwskills")("You are rocking"));