# 자바스크립트&제이쿼리
## 프로젝트 제작 시 항상 준비해아하는 파일, 폴더 순서
1. 프로젝트 **폴더명 영문으로 의미있게** 작성하기
2. `index.html`, `README.md` 생성
3. `styles`, `scripts`, `images` 폴더 생성
4. `styles/reset.css`, `styles/index.css` 생성
5. `scripts/index.js` 생성
## 자바스크립트
### 객체, 속성, 이벤트, 함수
* 객체 : 웹앱에서 사용하는 실제대상(버튼, 링크, 이미지 등), 보통 변수로 데이터(객체)를 저장해서 사용
* 이벤트 : 웹앱을 이용하는 사용자의 행동(클릭, 터치, 드래그 등)
    * `<button onclick='클릭시 실행되는 함수'>`
* 함수 : 2번 이상 반복되는 실행내용
    * 함수 생성과 호출을 각각 다르게 구분함.
    * 함수 생성 : `function 함수명(){함수 호출 시 반복실행할내용;}` 생성만으론 절대 결과가 실행되지 않음 반드시 호출 별도로 진행해야함
    * 함수 호출 : 위 함수생성 바깥쪽에 `함수명()` 작성, 이벤트와 함께 사용하기도 함. `onclick="함수명();"`
### 변수(데이터(객체)를 저장하는 저장소)
* 변수키워드 변수명 대입연산자 대입값
* `let user_name = '홍길동';` -> user_name이라는 변수를 생성해서 / '홍길동'이란 데이터를 대입한다.
1. `var` : 오래된 선언방식, 이름 중복 가능
2. `let` : 이름 중복 불가능, 재사용(수정) 가능
3. `const` : 이름 중복 불가능, 재사용(수정) 불가능
### 객체, 속성, 함수 작성 문법
* 태그 예) `<a href="./index.html"></a>`
* 태그 예) `<video src="./cat.mp4" autoplay>`
* `객체.속성`
    * 객체의 속성 읽기
    * `a.href;`
    * `video.src;` `video.autoplay;`
    * `span.textContent;` // span태그 안 내용을 읽는다. <span>내용</span>
    * `input.value;` // value는 input전용 속성으로 다른태그에 사용불가
* `객체.속성 = '값';`
    * 객체의 속성 값을 대입한다
    * 대입 시 기존값이 있으면 ? 기존값 자동제거되고 새로운값 대입
    * `a.href = './reset.css';`
    * `video.src = './dog.mp4';`
    * `video.autoplay = 0;`
    * `<span>0</span>` //span의 내용 0을 -> 1로 변경
        * `span.textContent = 1;` => HTML도 전부 지우고 2라는 값만 대입 / span원래내용은 제거하고 1 새로대입
        * `span.textContent = span.textContent+1;` => HTML의 형태를 유지하며 안에 있는 값만 대입/ 기존내용에 +1 대입
    * `<input type="text" value="1">` //input의 내용 1->2로 변경
        * `input.value = 2;` => input의 value값을 삭제하고 단순 2라는 값만 대입
        * `input.value = input.value +2;` => input의 value값을 유지하며 기존내용에 +2 대입
* `객체.함수();`
    * 객체를 실행한다
    * `객체.함수()='값';`(x) 속성이 있어야 대입연산자를 사용할 수 있음.
* `이벤트="함수명();"`
    * 이벤트 동작 시 특정 함수를 실행한다.
    * `<태그 onclick="func1();">` //함수호출
    * 위 작성 전 준비사항 : `function func1 (){반복실행명령}` //함수생성
## DOM(document object model)
### JS에서 제어하고 싶은 HTML요소가 있을경우 순서
1. 제어하고 싶은 HTML 수와 클래스, id 등 확인
2. 용도에 맞게 변수명 생성 `const 변수명`
3. 2번 변수에 대입연산자로 객체 대입하기
    * `document.querySelector('html대상');`
    * `const 변수명=document.querySelector('대상');`
4. 안전한 작업을 위해 콘솔로 변수 체크하기
    * `console.log(검사하고싶은변수명);`
    * 콘솔 결과화면에서 `null`또는 오류가 없는지 확인
    * `null`이 뜬다면 HTML script 작성위치로 가서 속성추가
        * `<script src="경로" defer></script>`
## 실제 요소 크기와 관계없는 다양한 디자인 포인트 만드는 방법
### CSS의 가상선택자(실제 태그 없이 가상의 요소를 만든다)
### after, before 
* `선택자::after`
* `선택자::before`
* 가상선택자의 필수속성 : `content`,`display`,`width`,`height`,`position`
### 작성예시
`선택자::after {`
    `content:''; display:block;`
    `width:가로크기px; height:세로크기px;`
    `position:absolute; left right top bottom 등의 위치좌표 추가작성`
`}`
* after, before가 적용된 선택자에 `position:relative` 기준잡기
# form태그
## form태그와 action, method
* form태그는 사용자가 입력하는 구역을 묶어주는 태그.
* action은 정보를 처리할 서버의 주소를 입력하는 구역.
* method는 2가지 post, get으로 나뉘며 보안이 필요할경우 post 보안이 필요치 않은경우 get
----------------------------------------------------------------------------------
* form : 검색, 로그인, 회원가입 특정 주제로 묶여있는 그룹
* action : 그룹에 작성 또는 선택된 사용자 정보를 전달하는 서버 주소
* method : 데이터를 보내는 전송 방식(get, post(보안))
## input태그와 type
* input은 사용자가 입력,선택하는 구역을 만드는 태그
* 입력주제에 따라 type도 바뀜 text, password, search, number, email, tel 등등
----------------------------------------------------------------------------------
* input : 사용자가 입력,선택할때 작성하는 태그 (type 필수)
* type : **작성 종류에 따라** type 선택 
## name 속성
* name은 css와 서버에서 사용자가 입력한 정보를 구분하기 위해 붙이는 이름.
* 선택형 input에서는 label의 for값과 name의 값이 일치해야함.
-----------------------------------------------------------------------------------
*  action으로 저장된 사이트서버 위치에 사용자가 입력한 데이터를 전송할 때 구분하는 데이터명칭
* 이름 tom, 아이디 tom 값만 보고 구분을 정확히 모하는 경우 name 필수
* userName => tom, userId => tom `name="userName"`
* 선택양식에서는 name의 의미를 그룹명으로 사용, 위 작성 내용은 입력양식 해당
## value속성
* 입력형 input에서는 사용자가 입력전에 기본값으로 설정할경우 사용하는 속성
* select -> option에서 option값을 구별하는 용도로 사용함
-----------------------------------------------------------------------------------
* 입력양식: 처음부터 입력된 초기값 (쇼핑몰의 수량 1)
* 선택양식: 위 name처럼 데이터 구분명칭
## id, class 속성
* id는 해당페이지에 하나만 들어갈 경우에 사용
* class는 반복되는 요소에 이름을 붙일경우 사용
* 두가지의 경우 css에서 선택자를 쉽게 잡기 위해서 사용하기도함
-----------------------------------------------------------------------------------
* js, css에서 구분하기 위한 디자인 또는 동적 프로그래밍 용도 이름