
describe('My first Test', function(){
               let email='reza.dalvand78@gmail.com';
               let password='reza13789';
               it('visits the kitchen snik', function(){
                              // find address websitesddc
                              cy.visit('https://www.instagram.com/accounts/login/')

                              cy.get("input[name=username]").type(email)

                              cy.get("input[name=password]").type(password)

                              cy.get("button[type=submit]").click()


                              cy.get("#LWmhU _0aCwM").click()
                              

                              
                              // cy.get(".o-form__field-frame").type(email)




                              // cy.get("button[type=submit]").click()             
               })
})