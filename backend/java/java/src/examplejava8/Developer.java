package examplejava8;

import java.math.BigDecimal;


public class Developer {

    private String name;
    private BigDecimal salary;

    public Developer() {

    }

    public Developer(String name, BigDecimal salary) {
        this.name = name;
        this.salary = salary;
    }

    public static Developer build(String name, BigDecimal salary) {
        return new Developer(name, salary);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getSalary() {
        return salary;
    }

    public void setSalary(BigDecimal salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Developer{" +
                "name = '" + name + '\'' +
                ", salary = " + salary +
                '}';
    }
}
