# npm vs npx

## npm Node Package Manager

## npx Node Package Execute

| 구분 | `npm`                           | `npx`                                       |
| ---- | ------------------------------- | ------------------------------------------- |
| 의미 | Node Package Manager            | Node Package Execute                        |
| 목적 | 패키지 **설치/관리**            | 패키지 **즉시 실행**                        |
| 설치 | `npm install`로 패키지를 설치함 | 로컬/원격 패키지를 **바로 실행**함          |
| 위치 | 로컬(node_modules)에 저장됨     | 실행만 하고 저장은 안 함 (전역 설치 불필요) |
| 용도 | 프로젝트 의존성 관리 등         | 단발성 CLI 실행에 주로 사용                 |
