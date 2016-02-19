//@target: ES5
interface A {
    prop: string;
    m(): void;
}
abstract class B implements A {
    abstract prop: string;
    abstract raw: string;
    abstract readonly ro: string;
    abstract m(): void;
}
class C extends B {
    ro = "readonly please";
    m() { }
}
let c = new C();
c.ro = "updated";