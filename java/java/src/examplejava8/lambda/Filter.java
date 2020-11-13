package examplejava8.lambda;

import examplejava8.Developer;

import javax.swing.text.html.Option;
import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import static java.math.BigDecimal.valueOf;

public class Filter {

    public static void test(List<Developer> developerList) {
        System.out.println("");
        System.out.println("Filter:");
        List<Developer> devs = developerList.stream().filter(d -> d.getSalary().compareTo(valueOf(5000)) == 1).collect(Collectors.toList());
        devs.forEach(System.out::println);

        System.out.println("");
        System.out.println("Filter - findAny: With default return");
        Developer developerDefault = Developer.build("Developer default", valueOf(1000));

        Developer dev = developerList.stream() //Convert to steam
                .filter(d -> d.getSalary().compareTo(valueOf(5000)) == 1) // Filter only with salary more than 5000
                .findAny() // If found return
                .orElse(developerDefault); // If not, return the default
        System.out.println(dev);


        System.out.println("");
        System.out.println("Filter - map: Getting a list of Developer's names");
        List<String> developerNameList = developerList.stream()
                .filter(d -> d.getSalary().compareTo(valueOf(5000)) == 1)
                .map(Developer::getName)
                .collect(Collectors.toList());
        developerNameList.forEach(System.out::println);

        System.out.println("");
        System.out.println("Filter - map - forEach: Getting a list of Developer's names");
        developerList.stream()
                .filter(d -> d.getSalary().compareTo(valueOf(5000)) == 1)
                .map(Developer::getName)
                .forEach(System.out::println);

    }
}
