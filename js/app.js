var time = new Date().getHours(); 
if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.write(greeting);