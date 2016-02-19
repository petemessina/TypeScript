//// [abstractPropertyNegative.ts]
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

//// [abstractPropertyNegative.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var B = (function () {
    function B() {
    }
    return B;
}());
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
        this.ro = "readonly please";
    }
    C.prototype.m = function () { };
    return C;
}(B));
var c = new C();
c.ro = "updated";
