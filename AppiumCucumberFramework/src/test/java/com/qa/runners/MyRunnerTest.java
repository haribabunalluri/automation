package com.qa.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber", "summary"},
        snippets = CucumberOptions.SnippetType.CAMELCASE,
        dryRun = false,
        monochrome = true,
        strict = true,
        features = {"src/test/resources"},
        glue = {"com.qa.stepdef"}

)
public class MyRunnerTest {

    public class RunCucumberTest {
    }
}
