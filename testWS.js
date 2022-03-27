const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function example(){
 
       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();
 
        // 1. Open landing page and get Title
        await driver.get("https://www.weekendshoes.ee/");
        let title = await driver.getTitle();
        console.log('1. The WeekendShoes.ee page Title is:', title);

        // 2. Go to subpage
        await driver.get("https://www.weekendshoes.ee/naistele/saapad.html");
        console.log('2. Page https://www.weekendshoes.ee/naistele/saapad.html opened');

        // 3. Add product to wishlist
        await driver.get("https://www.weekendshoes.ee/bugatti-poolsaapad-tonic-636401.html");
        await driver.findElement(By.css('#maincontent > div.columns > div > div.product.media > div.product-addto-links > a')).click();

        console.log('3. Product added to wishlist');

        // 4. Open the product via the wishlist
        setTimeout(async function () {
                await driver.findElement(By.id('wishlist-link-mobile')).click();
        }, 2000);
        setTimeout(async function () {
                await driver.findElement(By.className('action primary go-to-wishlist')).click();
                console.log('4. Wishlist opened');
        }, 6000);
            
        // 5. Add product to cart
        setTimeout(async function () {
                await driver.get("https://www.weekendshoes.ee/tamaris-poolsaapad-578211.html");
                await driver.findElement(By.xpath('//*[@id="product-addtocart-button"]/span')).click();
                await driver.findElement(By.xpath('//*[@id="product-options-wrapper"]/div/div/div/div/div[3]/div/ul/li[3]/div[1]')).click();
                await driver.findElement(By.xpath('//*[@id="product-addtocart-button"]/span')).click();
                console.log('5. Product added to cart');
        }, 8000);


        // 6. Go to Cart
        setTimeout(async function () {
                await driver.findElement(By.className('action viewcart')).click(); 
                console.log('6. Product cart opened');
        }, 20000);

        // 7. Increase the quantity of the product in the cart by 1
        setTimeout(async function () {
                const newLocal = 'action qty increase-qty increase-item-qty-btn';
                await driver.findElement(By.className(newLocal)).click();
                console.log('7. Increased product quantity');
        }, 27000);

        
        // 8. Remove product from the cart
        setTimeout(async function () {
                await driver.findElement(By.className('action action-delete')).click();
                console.log('8. Product removed from cart');
        }, 35000);


        // 9. Using search find products "Jope"
        setTimeout(async function () {
                var searchString = "Jope";
                await driver.get("https://www.weekendshoes.ee/");
                //maximize the window
                await driver.manage().window().maximize();
                //To send a search query by passing the value in searchString.
                await driver.findElement(By.id("search")).sendKeys(searchString, Key.RETURN);

                // 10. Filter search results by popularity
                await driver.findElement(By.id('sorter')).click();
                await driver.findElement(By.xpath('//*[@id="sorter"]')).click();
                await driver.findElement(By.css('#sorter>option[value="bestsellers"]')).click();
                console.log('9. Search "Jope" and sort by popularity');
        }, 37000);
        
        setTimeout(async function () {
                console.log('10. The End');
                await driver.quit();
        }, 70000);
 
}
 
example()