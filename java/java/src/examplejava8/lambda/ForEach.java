package examplejava8.lambda;

import examplejava8.Developer;

import java.math.BigDecimal;
import java.util.List;

import static java.math.BigDecimal.valueOf;

public class ForEach {

    public static void test(List<Developer> developerList) {
        System.out.println("--------------------------------");
        System.out.println("For each");
        developerList.stream().forEach(d -> System.out.println(d));

        System.out.println("For each: Showing developers with salary more than 5000");
        developerList.stream().forEach(d -> {
            if (d.getSalary().compareTo(valueOf(5000)) == 1) {
                System.out.println(d);
            }
        });

        System.out.println("");
        System.out.println("Filter and For each: Showing developers with salary more than 5000");
        developerList.stream().filter(d -> d.getSalary().compareTo(valueOf(5000)) == 1).forEach(d -> System.out.println(d));

        System.out.println("");
        System.out.println("Filter and For each: Showing developers with salary more than 5000.(Another way using Method Reference)");
        developerList.stream().filter(d -> d.getSalary().compareTo(valueOf(5000)) == 1).forEach(System.out::println);

    }
}
