package examplejava8.lambda;

import examplejava8.Developer;

import java.util.Comparator;
import java.util.List;

public class SortWithLambda {

    public static void sort(List<Developer> developerList) {
        sortingBySalary(developerList);
        sortingBySalaryReversedOrder(developerList);
        sortingByName(developerList);
    }

    private static void sortingBySalary(List<Developer> developerList) {
        System.out.println("Sorting by salary (Lambda):");
        developerList.sort((d1, d2) -> d1.getSalary().compareTo(d2.getSalary()));
        developerList.forEach(d -> System.out.println(d));
    }

    private static void sortingBySalaryReversedOrder(List<Developer> developerList) {
        System.out.println("Sorting by salary reversed order(Lambda):");
        Comparator<Developer> comparator = (d1, d2) -> d1.getSalary().compareTo(d2.getSalary());
        developerList.sort(comparator.reversed());
        developerList.forEach(d -> System.out.println(d));
    }

    private static void sortingByName(List<Developer> developerList) {
        System.out.println("Sorting by name (Lambda):");
        developerList.sort(Comparator.comparing(Developer::getName));
        developerList.forEach(d -> System.out.println(d));
    }

}
