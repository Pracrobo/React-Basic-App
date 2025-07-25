# React

## Component 기반 component-based architecture, CBV

- UI의 최소 단위
- 함수형 또는 클래스형으로 정의된다.
- props(속성)와 state(상태)를 기반으로 동작

## 선언형 프로그래밍

- 내부 상태 변화(state)
- 가상 DOM(JS 메모리에만 존재) 을 사용해 브라우저에 이미 반영된 뷰와 새로운 뷰의 차이점을 찾아낸다 : DOM 비교 (diffing) 또는 상태와 뷰의 보정(reconciliation)이라고 부른다.
- 헤드리스 브라우저 없이도 단위테스트를 수행할 수 있다(Jest)
- 단방향데이터바인딩 (vs twoway data binding :: AngularJS 양방향 데이터 바인딩)

### JSX(JavaScript XML)

- HTML과 비슷한 문법을 JavaScript 안에서 사용할 수 있게 해주는 확장 문법
- Babel을 통해 React.createElement()로 변환된다.

### Props & State

Props : 부모->자식으로 전달되는 읽기 전용 데이터
State : 컴포넌트 내부에서 관리하는 동적 데이터

### 라이프사이클(Lifecycle)

- 컴포넌트의 생성 -> 업데이터 -> 소멸 과정을 다룬다.
- 함수형에서는 useEffect()를 활용한다.

## 특징

Virtual DOM : DOM 변경 최소화로 성능 최적화
컴포넌트 기반 : 코드 재사용성 높고 구조화 쉽다.
선언형 UI : 명령형보다 직관적인 코드 작성 가능
단방향 데이터 흐름 : 예측 가능한 구조 유지에 도움

## JSX 파일

일반 JavaScript 에서 React 컴포넌트를 만들때 사용한다.

## TSX 파일

TypeScript를 사용하는 프로젝트에서 React 컴포넌트를 만들때 사용한다.

- 타입정의가 가능하고 타입 안정성이 있다.

## RxJS : Observables를 이용해서 비동기 데이터 스트림을 다룰 수 있다
