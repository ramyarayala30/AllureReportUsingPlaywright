import {test,expect} from '@playwright/test';

test('Testing text box',async({page})=>{
  await page.goto("https://demoqa.com/text-box");

  const username= page.locator('#userName');
  await username.fill('Ramyarayala');

  const email= page.locator('#userEmail');
  await email.fill('ramyarayala70@gmail.com');

  const currentAddress=page.locator('#currentAddress');
  await currentAddress.fill('hyderabadd');

  const permanentAddress= page.locator('#permanentAddress');
  await permanentAddress.fill('vijayawada');

  const btn= page.locator('.btn-primary');
  await btn.click();
})

// test('Testing practice form',async({page})=>
// {
//     await page.goto("https://demoqa.com/automation-practice-form");

//     const Firstname=page.getByPlaceholder('First Name');
//     await Firstname.type('ramya');

//     const Lastname=page.getByPlaceholder('Last Name');
//     await Lastname.type('rayala');

//     const email=page.getByPlaceholder(/name@/);
//     await Lastname.type('rayala70@gmail.com');

//     const radiobtn=page.locator('#gender-radio-2');
//     await radiobtn.click();
// })


test('testing radio button',async({page})=>
{
    await page.goto('https://demoqa.com/radio-button');
    const yesButton=page.locator('#yesRadio');
    const impressiveButton=page.locator('#impressiveRadio');
    const  noRadio=page.locator('#noRadio');
    await yesButton.click();

    const op=page.locator('.text-success');
    await expect(op).toHaveText('Yes');
})

test('testing Buttons',async({page})=>
{
    await page.goto('https://demoqa.com/buttons',{ timeout: 60000 });
    const dblclckbtn=page.locator('#doubleClickBtn');
    const rightClickbtn=page.locator('#rightClickBtn');
   
    const Clickmebtn = page.getByRole('button', { name: 'Click Me', exact: true });
    
    
    await  dblclckbtn.dblclick();
    const output=page.locator('#doubleClickMessage');
    await expect(output).toContainText('double click');

     
      await rightClickbtn.click({ button: 'right' });
     const op=page.locator('#rightClickMessage');
     await expect(op).toContainText('right click');

     
     await Clickmebtn.click();
     const op1=page.locator('#dynamicClickMessage');
     await expect(op1).toContainText('dynamic click');
})

test('testing the links',async({page,context})=>
{
     await page.goto("https://demoqa.com/links");
    //  When you click the Home link on the DemoQA Links page, it opens a new browser tab.
    //  Playwright must:
    //  Click the link

      const [newPage] = await Promise.all([
      context.waitForEvent('page'), //   Wait for the new tab to open
      page.click('#simpleLink')     //   Capture that new tab
       //Promise.all() lets both actions happen at the same time.
  ]);
   await newPage.waitForLoadState(); //wait until the new page gets loads
   await expect(newPage).toHaveURL('https://demoqa.com/');
});

test('testing link',async({page,context})=>
{
    await page.goto("https://demoqa.com/links");

    const [newPage1]= await Promise.all(
        [
           context.waitForEvent('page'),
           page.click('#dynamicLink')  
        ] );
    await newPage1.waitForLoadState();
    await expect(newPage1).toHaveURL('https://demoqa.com/');

})
