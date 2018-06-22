# 프로토타입 패턴

* 자바스크립트 자체가 프로토타입 기반 프로그래밍 언어이여서, 무의식적으로 항상 프로토타입 관련 패턴을 사용했을 것
* 앞에서 본 예제
```
class FreightRocketFactory implements RocketFactory<FreightRocket> {
        
        createRocket(): FreightRocket {
            return new FreightRocket();
        }
        // ...
}
```
    * new 연산을 수행해서 단지 클래스명만 변경할 목적으로 서브 클래스를 추가하기도 함
    * 단일 클래스의 인스턴스는 일반적으로 동일한 메서드와 프로피티를 공유하므로<br>기존 인스턴스 하나를 클론하여 새로운 인스턴스를 생성할 수 있음

* `clone` 메소드가 수행할 작업을 `new Constructor()`가 수행하는 것
    * 그래서 생성자가 어떤 면에서 팩토리의 역할을 수행할 수 있음
    ```
    interface Constructor<T> {
    	new (): T;
    }

    function createFancyObject<T>(constructor: Constructor<T>): T {
    	return new constructor();
    }
    ```
* 자바스크립트에서 프로토타입 패턴을 이야기할 때 쉽게 간과하는 것
		* 상태가 있는 복제
		* ES6도 Class 문법설탕을 이용해 실제 프로토타입을 직접 수정할 수도 있음
```
class Base {
	state: number;
}

let base = new Base();
base.state = 0;

class Derived extends Base { }
Derived.prototype = base;

let derived = new Derived();
// derived 객체는 base 객체의 state 를 유지함
// 특정 인스턴스의 사본을 생성하는 경우 유용함
// 하지만 사본의 프로토타입에 있는 프로퍼티는 복제된 객체의 자체 프로퍼티는 아님
```
* 참고 예제 [1](http://www.typescriptlang.org/play/#src=%0D%0A%20%20class%20Prototype%20%7B%0D%0A%20%20%20%20constructor(public%20name%3A%20string%2C%20public%20modified%3A%20Date%20%3D%20new%20Date())%20%7B%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20public%20display()%20%7B%0D%0A%20%20%20%20%20%20console.log(%22My%20name%20is%20%22%20%2B%20this.name%20%2B%20%22%20and%20a%20was%20modified%20at%20%22%20%2B%20this.modified)%3B%0D%0A%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20public%20clone()%3A%20Prototype%20%7B%0D%0A%20%20%20%20%20%20var%20cloned%20%3D%20Object.create(Prototype.prototype%20%7C%7C%20null)%3B%0D%0A%20%20%20%20%20%20Object.keys(this).map((key%3A%20string)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20cloned%5Bkey%5D%20%3D%20this%5Bkey%5D%3B%0D%0A%20%20%20%20%20%20%7D)%3B%0D%0A%0D%0A%20%20%20%20%20%20return%20cloned%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%0D%0A%20%20var%20firstOne%20%3D%20new%20Prototype(%22First%22)%3B%0D%0A%20%20%20%20firstOne.display()%3B%0D%0A%20%20%20%20var%20clone%20%3D%20firstOne.clone()%3B%0D%0A%20%20%20%20clone.display()%3B%0D%0A%20%20%20%20clone.name%20%3D%20%22Norbert%22%0D%0A%0D%0A%20%20%20%20firstOne.display()%3B%0D%0A%20%20%20%20clone.display()%3B%0D%0A) [2](https://github.com/torokmark/design_patterns_in_typescript/blob/master/prototype/prototype.ts)
