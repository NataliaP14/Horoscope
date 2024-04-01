//setting variables for the fortunes
const capricornFortune = "Capricorn is the sign of success. This is why you’ve earned the reputation of being a hardworking, business-savvy money magnet."
const capricornFortune2 = "Never underestimate the power of a Capricorn for self-preservation. Somehow, the odds get evened.";
const capricornFortune3 = "Even at the youngest of ages, Capricorns have wisdom.";

const aquariusFortune = "Aquarius minds are like inventors, always thinking about new and cool ideas.";
const aquariusFortune2 = "I am the kind of person that wants to get up in front of crowds of strangers and perform monologues. To each their own";
const aquariusFortune3 = "Aquarius, the deep thicker and a revolutionary by birth, stops at nothing to prove themselves right”l.";

const piscesFortune = "You possess a unique, innate ability to see most aspects of most situations all at once!";
const piscesFortune2 = "I'm fiercely independent, but I'm also terrified of being alone.";
const piscesFortune3 = "I'd rather be hated for who I am than loved for who I am not.";

const ariesFortune = "Aries needs a partner willing to set sail at a moment's notice—impulsive and action-oriented, he prefers not to plan and overthink a situation";
const ariesFortune2 = "Aries individuals need to be first, but they will want you to be a passenger on their adventure ride.";
const ariesFortune3 = "Aries is active, energetic, excitable, impulsive, optimistic, open to change, and new experiences.";

const taurusFortune = "I believe in being strong when everything seems to be going wrong.";
const taurusFortune2 = "Taurus is as patient as time itself, as deep as the forest, with a dependable strength that can move mountains. But he's stubborn.";
const taurusFortune3 = "You can always tell the bull by his strong, silent attitude.";

const geminiFortune = "Like a typical Gemini I'm changeable, I can be two different types of people.";
const geminiFortune2 = "Gemini has a tendency to ride the roller coaster of life, spiraling skyward one minute and plunging into lows the next.";
const geminiFortune3 = "Forgive your enemies but never forget their names.";

const cancerFortune = "A camera molds memory into permanency for Cancerians, whose very minds are like sensitive film, recording every impression with vivid clarity.";
const cancerFortune2 = "Home is not where you live, but where they understand you.";
const cancerFortune3 = "You have galaxies inside your head, stop letting people tell you you cannot shine.";

const leoFortune = "Only those who are courageous enough to crack open their shell deserve the love of a Leo";
const leoFortune2 = "Leo is a combination of tender, loving soul, and a ready-to-snap firecracker.";
const leoFortune3 = "A Lion in love will conquer the world. They positively burst with energy and will fight enemies three times larger if their beloved is threatened.";

const virgoFortune = "I'm an open book, but I am still a hardcover.";
const virgoFortune2 = "I dont live in the ordinary world. Im committed to dreaming dreams that mortals never dared to dream before, and building something beyond my wildest imagination.";
const virgoFortune3 = "Because I give myself grace, and therefore I have the capacity to see your humanness too";

const libraFortune = "Im pretty good at thinking about everything—all of my consequences—before I make a decision, and I think about everything that’s going to happen because of that decision.";
const libraFortune2 = "Like gentle doves of peace, they go around mediating and patching tip quarrels between others; still they enjoy a good argument themselves.";
const libraFortune3 = "When we create peace and harmony and balance in our minds, we will find it in our lives.";

const scorpioFortune = "You are love. You are danger in the lock. Let your enemies feel your wrath for beauty is your throne.";
const scorpioFortune2 = "I am not like everyone else. I dont pretend to be. I dont want to be. I am me.";
const scorpioFortune3= "Scorpio is like the phoenix. rising from the ashes stronger and more resilient.";

const sagittariusFortune = "Theyd rather be a blazing wildfire than a dimming candle; always igniting the fire within their soul that could never be put out.";
const sagittariusFortune2 = "Embrace what makes you unique, even if it makes other uncomfortable";
const sagittariusFortune3 = "The world is full of magic things, patiently waiting for our senses to grow sharper.";


let birthMonth = "July";
let randomFortune = Math.floor(Math.random() * 3) + 1;

console.log("Your birth month is: " + birthMonth);


//prints out random fortune based on sign
if (birthMonth == "January") {
    if (randomFortune == 1) {
        console.log("Your random fortune is: \n" + capricornFortune);
    } else if (randomFortune == 2) {
        console.log("Your random fortune is: \n" + capricornFortune2);
    } else {
        console.log("Your random fortune is: \n" + capricornFortune3);
    }
}

if (birthMonth == "February") {
    if (randomFortune == 1) {
        console.log("Your random fortune is: \n" + aquariusFortune);
    } else if (randomFortune == 2) {
        console.log("Your random fortune is: \n" + aquariusFortune2);
    } else {
        console.log("Your random fortune is: \n" + aquariusFortune3);
    }
}

if (birthMonth == "March") {
    if (randomFortune == 1) {
        console.log("Your random fortune is: \n" + piscesFortune);
    } else if (randomFortune == 2) {
        console.log("Your random fortune is: \n" + piscesFortune2);
    } else {
        console.log("Your random fortune is: \n" + piscesFortune3);
    }
}

if (birthMonth == "April") {
    if (randomFortune == 1) {
        console.log("Your random fortune is: \n" + ariesFortune);
    } else if (randomFortune == 2) {
        console.log("Your random fortune is: \n" + ariesFortune2);
    } else {
        console.log("Your random fortune is: \n" + ariesFortune3);
    }
}

if (birthMonth == "May") {
    if (randomFortune == 1) {
        console.log("Your random fortune is: \n" + taurusFortune);
    } else if (randomFortune == 2) {
        console.log("Your random fortune is: \n" + taurusFortune2);
    } else {
        console.log("Your random fortune is: \n" + taurusFortune3);
    }
}

if (birthMonth == "June") {
    if (randomFortune == 1) {
        console.log("Your random fortune is: \n" + geminiFortune);
    } else if (randomFortune == 2) {
        console.log("Your random fortune is: \n" + geminiFortune2);
    } else {
        console.log("Your random fortune is: \n" + geminiFortune3);
    }
}

if (birthMonth == "July") {
    if (randomFortune == 1) {
        console.log("Your random fortune is: \n" + cancerFortune);
    } else if (randomFortune == 2) {
        console.log("Your random fortune is: \n" + cancerFortune2);
    } else {
        console.log("Your random fortune is: \n" + cancerFortune3);
    }
}

if (birthMonth == "August") {
    if (randomFortune == 1) {
        console.log("Your random fortune is: \n" + leoFortune);
    } else if (randomFortune == 2) {
        console.log("Your random fortune is: \n" + leoFortune2);
    } else {
        console.log("Your random fortune is: \n" + leoFortune3);
    }
}


if (birthMonth == "September") {
    if (randomFortune == 1) {
        console.log("Your random fortune is: \n" + virgoFortune);
    } else if (randomFortune == 2) {
        console.log("Your random fortune is: \n" + virgoFortune2);
    } else {
        console.log("Your random fortune is: \n" + virgoFortune3);
    }
}

if (birthMonth == "October") {
    if (randomFortune == 1) {
        console.log("Your random fortune is: \n" + libraFortune);
    } else if (randomFortune == 2) {
        console.log("Your random fortune is: \n" + libraFortune2);
    } else {
        console.log("Your random fortune : \n" + libraFortune3);
    }
}

if (birthMonth == "November") {
    if (randomFortune == 1) {
        console.log("Your random fortune is: \n" + scorpioFortune);
    } else if (randomFortune == 2) {
        console.log("Your random fortune is: \n" + scorpioFortune2);+
    } else {
        console.log("Your random fortune is: \n" + scorpioFortune3);
    }
}


if (birthMonth == "December") {
    if (randomFortune == 1) {
        console.log("Your random fortune is: \n" + capricornFortune);
    } else if (randomFortune == 2) {
        console.log("Your random fortune is: \n " + capricornFortune2);
    } else {
        console.log("Your random fortune is: \n" + capricornFortune3);
    }
}
