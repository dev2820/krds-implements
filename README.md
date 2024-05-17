# KRDS-implements

[KRDS](https://uiux.egovframe.go.kr/guide/index.html) 를 직접 구현하며 학습하는 목적을 갖는 프로젝트입니다.

## Goal

- krds를 충실히 구현하는 라이브러리를 만들어 누구나 간편하게 **디지털 정부서비스  
  UI/UX 가이드라인**을 만족하는 프로젝트를 쉽게 구현하는 것을 돕습니다.
- 접근성을 충분히 고려하고 학습합니다.
- 테스트를 작성해 목표를 명확히하고 안정성을 증명합니다.

## Rule

기여하는 방식은 다음과 같습니다.

1. 구현하고자 하는 컴포넌트를 선택합니다.
2. issue를 생성합니다. 1. issue에는 구현하고자 하는 컴포넌트와 링크를 첨부합니다.
   ex) Accordion, link:[https://uiux.egovframe.go.kr/guide/component/component_04_07.html](https://uiux.egovframe.go.kr/guide/component/component_04_07.html) 2. issue 하단에 구현을 과정을 구체적으로 첨부합니다. radix-ui같은 라이브러리를 사용할 예정이라면 이를 기입합니다. 3. (옵션) 테스트 항목을 기입합니다.
3. issue를 기반으로 branch를 생성하고 PR을 올립니다. 다음의 내용이 포함되어야합니다.
   1. `__{componentName}__.stories.tsx` 파일
   2. `__{componentName}__.spec.tsx` 파일 (옵션)
   3. `{componentName}.tsx` 파일
4. PR을 리뷰
   자세한 내용은 CONTRIBUTING 문서를 참고해주세요. (작성 예정)

## Todo (추가,수정될 수 있음)

### Story

- [ ] Colors 스토리 추가
- [ ] Typography 스토리 추가
- [ ] Icongraphy 스토리 추가
- [ ] Layout 스토리 추가
- [ ] Shape 스토리 추가

### Components

#### 아이덴티티

- [x] [masthead](https://uiux.egovframe.go.kr/guide/component/component_02_01.html) (@dev2820)
- [ ] identifier
- [ ] footer
- [ ] header

#### 탐색

- [ ] skip link
- [ ] main menu
- [ ] breadcrumb
- [ ] side navigation
- [ ] in-page navigation
- [ ] pagination

#### 레이아웃 및 표현

- [ ] structued list
- [ ] critical alerts
- [ ] calendar
- [ ] disclosure
- [ ] modal
- [ ] badge
- [ ] accordion
- [ ] image
- [ ] carousel
- [ ] tab
- [ ] table

#### 액션

- [ ] link
- [ ] [button](https://uiux.egovframe.go.kr/guide/component/component_05_02.html) (@dev2820)

#### 선택

- [ ] radio button
- [ ] checkbox
- [ ] select
- [ ] tag

#### 피드백

- [ ] step indicator
- [ ] spinner

#### 도움

- [ ] help panel
- [ ] tutorial panel
- [ ] contextual help
- [ ] coach mark

#### 입력

- [ ] date input
- [ ] textarea
- [ ] text input
- [ ] file upload

---

- [**아이덴티티**](https://uiux.egovframe.go.kr/guide/component/component_02_01.html)
  - [**공식 배너 (Masthead)**](https://uiux.egovframe.go.kr/guide/component/component_02_01.html)
  - [**운영기관 식별자 (Identifier)**](https://uiux.egovframe.go.kr/guide/component/component_02_04.html)
  - [**푸터 (Footer)**](https://uiux.egovframe.go.kr/guide/component/component_02_03.html)
  - [**헤더 (Header)**](https://uiux.egovframe.go.kr/guide/component/component_02_02.html)
- [**탐색**](https://uiux.egovframe.go.kr/guide/component/component_03_01.html)
  - [**건너뛰기 링크 (Skip link)**](https://uiux.egovframe.go.kr/guide/component/component_03_01.html)
  - [**메인 메뉴 (Main menu)**](https://uiux.egovframe.go.kr/guide/component/component_03_02.html)
  - [**브레드크럼 (Breadcrumb)**](https://uiux.egovframe.go.kr/guide/component/component_03_03.html)
  - [**사이드 메뉴 (Side navigation)**](https://uiux.egovframe.go.kr/guide/component/component_03_04.html)
  - [**콘텐츠 내 탐색 (In-page navigation)**](https://uiux.egovframe.go.kr/guide/component/component_03_05.html)
  - [**페이지네이션 (Pagination)**](https://uiux.egovframe.go.kr/guide/component/component_03_06.html)
- [**레이아웃 및 표현**](https://uiux.egovframe.go.kr/guide/component/component_04_01.html)
  - [**구조화 목록 (Structured list)**](https://uiux.egovframe.go.kr/guide/component/component_04_01.html)
  - [**긴급 공지 (Critical alerts)**](https://uiux.egovframe.go.kr/guide/component/component_04_02.html)
  - [**달력 (Calendar)**](https://uiux.egovframe.go.kr/guide/component/component_04_03.html)
  - [**디스클로저 (Disclosure)**](https://uiux.egovframe.go.kr/guide/component/component_04_04.html)
  - [**모달 (Modal)**](https://uiux.egovframe.go.kr/guide/component/component_04_05.html)
  - [**배지 (Badge)**](https://uiux.egovframe.go.kr/guide/component/component_04_06.html)
  - [**아코디언 (Accordion)**](https://uiux.egovframe.go.kr/guide/component/component_04_07.html)
  - [**이미지 (Image)**](https://uiux.egovframe.go.kr/guide/component/component_04_08.html)
  - [**캐러셀 (Carousel)**](https://uiux.egovframe.go.kr/guide/component/component_04_09.html)
  - [**탭 (Tab)**](https://uiux.egovframe.go.kr/guide/component/component_04_10.html)
  - [**표 (Table)**](https://uiux.egovframe.go.kr/guide/component/component_04_11.html)
- [**액션**](https://uiux.egovframe.go.kr/guide/component/component_05_01.html)
  - [**링크 (Link)**](https://uiux.egovframe.go.kr/guide/component/component_05_01.html)
  - [**버튼 (Button)**](https://uiux.egovframe.go.kr/guide/component/component_05_02.html)
- [**선택**](https://uiux.egovframe.go.kr/guide/component/component_06_01.html)
  - [**라디오 버튼 (Radio button)**](https://uiux.egovframe.go.kr/guide/component/component_06_01.html)
  - [**체크박스 (Checkbox)**](https://uiux.egovframe.go.kr/guide/component/component_06_02.html)
  - [**셀렉트 (Select)**](https://uiux.egovframe.go.kr/guide/component/component_06_03.html)
  - [**태그 (Tag)**](https://uiux.egovframe.go.kr/guide/component/component_06_04.html)
- [**피드백**](https://uiux.egovframe.go.kr/guide/component/component_07_01.html)
  - [**단계 표시기 (Step indicator)**](https://uiux.egovframe.go.kr/guide/component/component_07_01.html)
  - [**스피너 (Spinner)**](https://uiux.egovframe.go.kr/guide/component/component_07_02.html)
- [**도움**](https://uiux.egovframe.go.kr/guide/component/component_08_01.html)
  - [**도움 패널 (Help panel)**](https://uiux.egovframe.go.kr/guide/component/component_08_01.html)
  - [**따라하기 패널 (Tutorial panel)**](https://uiux.egovframe.go.kr/guide/component/component_08_03.html)
  - [**맥락적 도움말 (Contextual help)**](https://uiux.egovframe.go.kr/guide/component/component_08_02.html)
  - [**코치마크 (Coach mark)**](https://uiux.egovframe.go.kr/guide/component/component_08_04.html)
- [**입력**](https://uiux.egovframe.go.kr/guide/component/component_09_01.html)
  - [**날짜 입력 필드 (Date input)**](https://uiux.egovframe.go.kr/guide/component/component_09_01.html)
  - [**텍스트 영역 (Textarea)**](https://uiux.egovframe.go.kr/guide/component/component_09_02.html)
  - [**텍스트 입력 필드 (Text input)**](https://uiux.egovframe.go.kr/guide/component/component_09_03.html)
  - [**파일 업로드 (File upload)**](https://uiux.egovframe.go.kr/guide/component/component_09_04.html)
