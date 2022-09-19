const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test_cases(){
    //create driver
    let driver = await new Builder().forBrowser("chrome").build();

    // send driver to website
    await driver.get("https://github.com");

    //grab an element from the page
    await driver.findElement(By.partialLinkText("Sign in")).click();

    //display the title
    console.log(await driver.getTitle());

    // if the title isn't correct and the test
    if(await driver.getTitle() === "GitHub: Where the world builds software · GitHub"){
        console.log("Test is success");
    }else{
        console.log("Test is failed");
        return;
    }

    // input a username and password
    await driver.findElement(By.name("login")).sendKeys(streamCode);
    await driver.findElement(By.name("password")).sendKeys("**********",Key.RETURN);

    if(await driver.findElement(By.className("flash-close js-flash-close")).isDisplayed()){
        console.log("Test #2 success");
    }
    // setInterval(function(){
        driver.quit();
    // },10000);
}
test_cases();