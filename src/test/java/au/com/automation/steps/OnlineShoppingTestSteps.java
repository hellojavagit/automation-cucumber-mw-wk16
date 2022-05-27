package au.com.automation.steps;

import au.com.automation.pages.*;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.util.List;

public class OnlineShoppingTestSteps {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
        new HomePage().clickOnSignInButton();
    }

    @Then("^Navigate to SignUp page$")
    public void navigateToSignUpPage() {
        new HomePage().clickOnSignInButton();
    }

    @And("^create an account with random username$")
    public void createAnAccountWithRandomUsername() {
        new AuthPage().enterEmailAddressToCreateAnAccount("asdghjk@gmail.com");
        new AuthPage().clickOnCreateAccount();
        new AuthPage().selectTitle("Mr.");
        new AuthPage().enterFirstNamePersonalInfo("myfirstname");
        new AuthPage().enterLastNamePersonalInfo("mylastname");
        new AuthPage().enterPassword("abcd1234");
        new AuthPage().selectBirthDate("1","1","1990");
        new AuthPage().optInNewsLetter();
        new AuthPage().optInReceiveOfferCheckBox();
        new AuthPage().enterCompanyName("company1");
        new AuthPage().enterAddress("The avenue","Birmingham");
        new AuthPage().enterCityName("London");
        new AuthPage().selectState("California");
        new AuthPage().enterPostcode("12345");
        new AuthPage().enterAdditionalInfo("All Right");
        new AuthPage().enterHomePhone("123456789");
        new AuthPage().enterMobilePhone("987654321");
        new AuthPage().enterAlias("something else");
        new AuthPage().clickOnRegisterButton();
    }


    @Given("^I am on the Sign In Page$")
    public void iAmOnTheSignInPage() {
    }

    @When("^Login using newly create credentials$")
    public void loginUsingNewlyCreateCredentials() {
        new AuthPage().enterEmailAddress("testing1234@gmail.com");
        new AuthPage().enterPassword("abcd1234");
        new AuthPage().clickOnSignInButton();

    }

    @Then("^I shall verify the address information in my address section$")
    public void iShallVerifyTheAddressInformationInMyAddressSection() {
        new MyAccountPage().clickOnMyAddressButton();
        String[] expected = {"myfirstname", "mylastname", "TheAvenue", "Birmingham", "United States", "12345", "987654321"};
        for (int i = 0; i < expected.length; i++) {
            Assert.assertEquals(expected[i], new MyAccountPage().getAddressInfo()[i]);
        }


    }

    @And("^I add below product to cart$")
    public void iAddBelowProductToCart(DataTable dataTable) {
        List<List<String>> productCart = dataTable.asLists(String.class);
        for (List<String> data : productCart) {
            new MyAccountPage().selectItemFromTopMenu(data.get(0));
            new MyAccountPage().selectItemFromSubCategoryMenu(data.get(1));
            new CommonPage().selectItemToBuy(data.get(2));
            Assert.assertEquals(data.get(3), new ProductPage().getProductRefName());
            new ProductPage().setQuantity(data.get(4));
            new ProductPage().setAddToCard();
            new ProductPage().setCloseConfirmMessage();
        }
        new MyAccountPage().clickOnCartButton();
    }



    @Then("^I shall validate shopping cart as below$")
    public void iShallValidateShoppingCartAsBelow(DataTable dataTable) {
        List<List<String>> productCart = dataTable.asLists(String.class);
        for (List<String> data : productCart) {
            Assert.assertEquals(data, new MyAccountPage().getTextFromShoppingCart(data.get(0)));
        }
    }

    @Then("^I shall be able to Buy the product$")
    public void iShallBeAbleToBuyTheProduct() {
        new MyAccountPage().clickOnProceedToCheckOut();
        new MyAccountPage().clickOnProceedToCheckOutOnAddress();
        new MyAccountPage().clickOnProceedToCheckOutOnShipping();
    }

    @And("^I shall be able to Buy using cheque payment$")
    public void iShallBeAbleToBuyUsingChequePayment() {
        new MyAccountPage().clickOnPayByCheck();
        new MyAccountPage().confirmationOrder();
    }

    @And("^I am on the contact page$")
    public void iAmOnTheContactPage() {
        new MyAccountPage().clickOnContactUsButton();
    }

    @Then("^I send refund request to customer care for previous order$")
    public void iSendRefundRequestToCustomerCareForPreviousOrder() {
        new ContactPage().selectSubjectHeading("Customer service");
        new ContactPage().selectOrderRef();
        new ContactPage().messageBox(" Cancel this order and refund me.");
        new ContactPage().clickOnSendButton();
        Assert.assertEquals("Your message has been successfully sent to our team.",new ContactPage().getCancellationConfirm());
    }
}
