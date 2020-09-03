package com.qa.stepdef;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class loginStedDef {
    @When("^I enter invalid user name \"([^\"]*)\"$")
    public void iEnterInvalidUserName(String arg0) {
    }

    @And("^I enter the password as \"([^\"]*)\"$")
    public void iEnterThePasswordAs(String arg0) {
    }

    @And("^I Login")
    public void iLogin() {
    }

    @Then("^I should get error message \"([^\"]*)\"$")
    public void iShouldGetErrorMessage(String arg0) {
    }
}
