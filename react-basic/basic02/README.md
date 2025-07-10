# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 주요개념

### State Lifting(State 끌어 올리기)

- React.js의 데이터 흐름 : 부모 -> 자식 :: 단방향 데이터 흐름(Unidirectional Data Flow)
- state 를 어떤 component 에 넣을건지가 핵심(부모나 공통)
- 아래 컴포넌트가 모두 공유할 수 있도록 만드는 것을 State Lifting 이라 한다.
