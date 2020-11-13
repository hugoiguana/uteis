package examplejava8.lambda;

import examplejava8.Developer;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class SortOldWay {

    public static void sort(List<Developer> developerList) {
        sortingBySalary(developerList);
        sortingByName(developerList);
    }

    private static void sortingBySalary(List<Developer> developerList) {
        System.out.println("Sorting by salary (old way):");

        Collections.sort(developerList, new Comparator<Developer>() {
            @Override
            public int compare(Developer o1, Developer o2) {
                return o1.getSalary().compareTo(o2.getSalary());
            }
        });

        for (Developer developer : developerList) {
            System.out.println(developer);
        }
    }

    private static void sortingByName(List<Developer> developerList) {
        System.out.println("Sorting by name (old way):");

        Collections.sort(developerList, new Comparator<Developer>() {
            @Override
            public int compare(Developer o1, Developer o2) {
                return o1.getName().compareTo(o2.getName());
            }
        });

        for (Developer developer : developerList) {
            System.out.println(developer);
        }
    }

}
