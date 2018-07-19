# 브릿지 패턴

* 브릿지 패턴은 기능 구현에서 클라이언트가 처리하는 추상화 부분을 분리하고, <br>추상화 부분과 구현 부분을 쉽게 추가하거나 교체할 수 있게 함

* 예제
    <img src="https://www.packtpub.com/graphics/9781785280832/graphics/image_04_005.jpg">
    * 추상화 `UIElement`는 `UIToolkit` 의 다양한 구현에 액세스 할 수 있음.<br>위 그림의 `UIElement`와 `UIToolkit` 간의 연결이 브릿지!
    * 구성 요소
        * 추상화(Abstraction): `UIElement`
            * 클라이언트가 처리할 객체의 인터페이스를 정의하고, 구현자에 대한 참조를 저장함
        * 정제된 추상화(Refined abstraction): `TextElement`, `ImageElement`
            * 특화된 동작으로 추상화를 확장함
        * 구현자(Implementer): `UIToolkit`
            * 추상화에 정의된 작업을 최종적으로 수행할 일반적인 구현자의 인터페이스를 정의함
            * 구현자는 대게 기본적인 작업만 관여하고, 추상화는 상위 수준 작업을 처리함
        * 구체적인 구현자(Concrete implementer): `SVGToolkit`, `CanvasToolkit`
            * 구현자 인터페이스를 구현하고 하위 수준 API 를 처리함

    ```ts
    namespace Bridge {
        // 구현자
        interface UIToolkit {
            drawBorder(): void;
            drawImage(src: string): void;
            drawText(text: string): void;
        }
        // 추상화
        abstract class UIElement {
            constructor(
                public toolkit: UIToolkit
            ) { }

            abstract render(): void;
        }
        // 정제된 추상화 (UIElement 확장)
        class TextElement extends UIElement {
            constructor(
                public text: string,
                toolkit: UIToolkit
            ) {
                super(toolkit);
            }

            render(): void {
                this.toolkit.drawText(this.text);
            }
        }

        class ImageElement extends UIElement {
            constructor(
                public src: string,
                toolkit: UIToolkit
            ) {
                super(toolkit);
            }

            render(): void {
                this.toolkit.drawImage(this.src);
            }
        }

        // 서브 클래스를 생성하면 모든 것을 클라이언트와 함께 관리할 수 있음
        // 하지만 이 예제에선 undefined 로 대체
        let toolkit: UIToolkit;

        let imageElement = new ImageElement('foo.jpg', toolkit);
        let textElement = new TextElement('bar', toolkit);

        imageElement.render();
        textElement.render();
    }
    ```

* 활용 범위
    * 추상화와 구현자가 분리됨. 따라서 여러 추상화 및 구현자와 작업할 수 있음. <br>하지만 대부분 브린지 패턴은 하나의 구현자와 작업함
    * 어댑터 패턴 VS 브릿지 패턴
        * 어댑터 패턴은 기존 클래스를 협업하게 만들기 위해 노력하고, 어탭터 부분에 초점을 맞춤
        * 브릿지 패턴은 확대를 고려하여 <br>어댑터 부분의 역할을 수행하는 면밀하고도 보편적인 인터페이스를 제공함

### 결론

* 브릿지 패턴은 추상화와 구현자를 분리하여 시스템에 높은 확장성을 제공함
    * 클라이언트는 구현사항을 세부적으로 알 필요 없음
    * 따라서 바람직한 의존관계 구조를 형성하여 더 안정적인 시스템을 구축 할 수 있음
* 추가적인 이점
    * 빌드 프로세스를 알맞게 구성하면 컴파일 시간을 줄일 수 있음
        * 컴파일러는 정제된 추상화나 구체적인 구현자에 변경이 발생해도 <br>브릿지의 다른쪽 끝에 있는 정보를 알 필요가 없기 때문
