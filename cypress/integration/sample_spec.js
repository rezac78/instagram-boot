describe("My first Test", function () {
        //  it('visits and login wordpress page', function(){
        //           // find address websitesddc
        //           cy.visit('https://another.live-website.com/wp-admin/plugin-install.php?s=Plugin%20Installer%20from%20public%20URL&tab=search&type=term')
        //           cy.wait(2000)
        //           cy.get('input[type="text"]').type("saeid")
        //           cy.get('input[type="password"]').type("2121312Ss!")
        //           cy.get('input[type="submit"]').first().click()
        //           cy.get('button[type="button"]').then((e) => {
        //                 if(e.find('button[class="button"]').prevObject[2].innerText !== "Active"){
        //                         cy.get(".install-now").eq(0).click()
        //                         cy.wait(2000)
        //                         cy.get('.activate-now').eq(0).click()
        //                 }
        //           });
        //  })
         it('Install plugin',function(){
                  cy.wait(2000)
                  cy.visit('https://another.live-website.com/wp-admin/plugins.php?page=plgf_pipu01_page')
                  cy.wait(2000)
                  cy.get('input[type="text"]').type("saeid")
                  cy.get('input[type="password"]').type("2121312Ss!")
                  cy.get('input[type="submit"]').first().click()
                  cy.wait(2000)
                  cy.get('input[type="text"]').type("https://drive.google.com/u/0/uc?id=13RQotQ29-oanVK1EIMKFvNbQu3A1kBow&export=download")
                  cy.get('input[name="url-install-plugin-submit"]').click()
                  cy.get('a[target="_parent"]').eq(0).click()
         })
//   it("clients settings", function () {
//     // cy.wait(2000)
//     cy.visit(
//       "https://another.live-website.com/wp-admin/admin.php?page=wo_settings"
//     );
//     cy.wait(2000);
//     cy.get('input[type="text"]').type("saeid");
//     cy.get('input[type="password"]').type("2121312Ss!");
//     cy.get('input[type="submit"]').first().click();
//     cy.get('input[name="wo_options[enabled]"]').then((e) => {
//       if (
//         e.find('[name="wo_options[enabled]"]').prevObject[0].checked !== true
//       ) {
//         cy.get('input[type="checkbox"]').eq(0).check();
//         cy.get('input[type="submit"]').eq(0).click();
//       }
//     });
//   });
//   it("clients settings", function () {
//     cy.wait(2000);
//     cy.visit(
//       "https://another.live-website.com/wp-admin/admin.php?page=wo_add_client"
//     );
//     cy.wait(2000);
//     cy.get('input[type="text"]').type("saeid");
//     cy.get('input[type="password"]').type("2121312Ss!");
//     cy.get('input[type="submit"]').first().click();
//     cy.get('input[name="name"]').type("saeid");
//     cy.get(".select2-selection__rendered").click();
//     cy.wait(3000);
//     cy.get(".select2-results__option").eq(1).click();
//     cy.wait(2000);
//     cy.get('input[name="submit"]').click();
//     cy.wait(3000);
    // cy.get("div").find(".emuv-input").then($value=>{
    //         const ClientID = $value[2].value
    //         const ClientSecret = $value[3].value
    //         console.log(`ClientID : ${ClientID}`);
    //         console.log(`ClientSecret : ${ClientSecret}`);
    //         cy.wait(3000)
    //         cy.visit(`https://another.live-website.com/oauth/authorize?response_type=code&client_id=${ClientID}&redirect_uri=app.feedopedia.com`)
    //         cy.get('.menupop').eq(3).click({ force: true })
    //         cy.get('#wp-admin-bar-logout').click()
    //         cy.visit(`https://another.live-website.com/oauth/authorize?response_type=code&client_id=${ClientID}&redirect_uri=app.feedopedia.com`)
    //         cy.wait(3000)
    //         cy.get('input[type="text"]').type("saeid")
    //         cy.get('input[type="password"]').type("2121312Ss!")
    //         cy.get('input[type="submit"]').first().click()
    //         cy.wait(2000)
    //         cy.request({method:"POST",url:`https://another.live-website.com/oauth/authorize?response_type=code&client_id=${ClientID}&redirect_uri=app.feedopedia.com`,failOnStatusCode:false}).then((response) => {
    //                 const getcode = response.allRequestResponses[0]["Response Headers"].location
    //                 const Code=getcode.substr(24, 40)
    //                 cy.request({method:"POST",url:`https://another.live-website.com/oauth/token/?code=${Code}&grant_type=authorization_code&redirect_uri=app.feedopedia.com&client_id=${ClientID}&client_secret=${ClientSecret}`,failOnStatusCode:false,body:{
    //                         "code":Code,
    //                         "grant_type":"authorization_code",
    //                         "redirect_uri":"app.feedopedia.com",
    //                         "client_id":ClientID,
    //                         "client_secret":ClientSecret
    //                 }}).then((e)=>{
    //                         const AccessToken =e.body.access_token
    //                         const RefreshToken =e.body.refresh_token
    //                         const creds={
    //                                 AccessToken: AccessToken,
    //                                 password: RefreshToken,
    //                         }
    //                         const date ={
    //                                 agency_id: "6498918",
    //                                 type: "wordpress",
    //                                 blogfeed: {
    //                                         creds: creds,
    //                                         domain_url:"cacadcadcdc",
    //                                         titles: [],
    //                                         schedule: "0/2 * 1/1 * *",
    //                                         associated_social_media: [],
    //                                         type: "wordpress"
    //                                 }
    //                         }
    //                         console.log(date)
    //                         cy.request({method:"POST",url:'http://localhost:3000/',failOnStatusCode:false,body:date}).then((response)=>{
    //                                 console.log(response.body.isSuccesfull)
    //                         })
    //                 })

    //         })

    // })
//   });
});
