package examplejava8.lambda;

import examplejava8.Developer;

import java.math.BigDecimal;
import java.util.List;

import static java.util.Arrays.asList;

public class LambdaMain {

    public static void main(String[] args) {

        List<Developer> developerList = asList(Developer.build("Hugo", BigDecimal.valueOf(10000))
                , Developer.build("Aline", BigDecimal.valueOf(20000))
                , Developer.build("Tiago", BigDecimal.valueOf(15000))
                , Developer.build("Half", BigDecimal.valueOf(5000))
                , Developer.build("Bob", BigDecimal.valueOf(6000)));

        SortOldWay.sort(developerList);
        SortWithLambda.sort(developerList);
        ForEach.test(developerList);
        Filter.test(developerList);
    }
}
