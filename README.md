# Sesac_Project_02

온라인 rpg게임 로스트아크를 즐기는 유저들에게 유용한 정보 제공 & 유저간 소통을 위한 웹사이트

**[메인페이지]** 메인 포스터 업데이트, 여섯 종류의 원하는 페이지로 이동

**[마이페이지]** 메인 캐릭터 등록, 좋아요 한 노래/이미지 관리, 웹사이트에 접속중인 다른 유저와 채팅(keep)

**[BGM]** 게임사가 제공하는 모든 음원을 무료로 재생, 마음에 드는 곡 좋아요 누르고 마이페이지에서 관리

**[Boss]** 각 보스의 포스터 표시, 링크 이동시 대표 BGM 재생, 보상/공략 등 상세정보 확인

**[갤러리]** 코디/캡쳐 자랑하기, 좋아요 눌러 마이페이지에서 관리

**[캐릭터]** 자신의 캐릭터 검색해서 상세정보 찾아보기

**[Class]** 모든 클래스 모아보기(상세정보 포함)

**[회원가입/로그인]**

- **개발 기간** : 2023-12-26 ~ 2024-01-11(2주)
- **배포 주소** : (http://15.164.171.50/)
  <br />

<br />

# 🔧 개발환경

## Front

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)

## Back

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

## Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## API

**[Developer-LostArk](https://developer-lostark.game.onstove.com)**

## 🗂️ 디렉토리 구조

```
Project2
├─ client
│  ├─ .env
│  ├─ .env.development
│  ├─ .env.production
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ img
│  │  ├─ index.html
│  │  └─ playlist
│  └─ src
│     ├─ App.css
│     ├─ App.js
│     ├─ components
│     │  ├─ Footer.js
│     │  └─ Header.js
│     ├─ css
│     │  ├─ BGM.css
│     │  ├─ Boss-link.css
│     │  ├─ Boss.css
│     │  ├─ Character.css
│     │  ├─ Character_backup.css
│     │  ├─ Class.css
│     │  ├─ Entertainment.css
│     │  ├─ Main.css
│     │  ├─ MyPage.css
│     │  ├─ OOTD.css
│     │  ├─ SignIn.css
│     │  └─ SignUp.css
│     ├─ index.css
│     ├─ index.js
│     └─ pages
│        ├─ MainPage
│        │  ├─ BGM.js
│        │  ├─ Boss
│        │  │  ├─ Boss1.js
│        │  │  ├─ Boss2.js
│        │  │  ├─ Boss3.js
│        │  │  ├─ Boss4.js
│        │  │  ├─ Boss5.js
│        │  │  └─ Boss6.js
│        │  ├─ Boss.js
│        │  ├─ Character.js
│        │  ├─ Character_backup.js
│        │  ├─ Class.js
│        │  ├─ Entertainment.js
│        │  ├─ Main.js
│        │  └─ OOTD.js
│        ├─ MyPage
│        │  └─ MyPage.js
│        ├─ SignIn
│        │  └─ SignIn.js
│        └─ SignUp
│           └─ SignUp.js
├─ README.md
└─ server
   ├─ config
   │  ├─ config.json
   │  └─ envs
   │     └─ key.env
   ├─ controller
   │  ├─ CCharacter.js
   │  ├─ CGetImg.js
   │  ├─ CImgLike.js
   │  ├─ CMain.js
   │  ├─ CSaveCharacter.js
   │  ├─ CSignIn.js
   │  ├─ CSignUp.js
   │  ├─ CUpload.js
   │  ├─ CUser.js
   │  └─ CUserData.js
   ├─ index.js
   ├─ model
   │  ├─ Character.js
   │  ├─ ImgLike.js
   │  ├─ index.js
   │  ├─ PostImg.js
   │  └─ User.js
   ├─ package-lock.json
   ├─ package.json
   ├─ routes
   │  ├─ character.js
   │  ├─ getimg.js
   │  ├─ imglike.js
   │  ├─ index.js
   │  ├─ saveCharacter.js
   │  ├─ signin.js
   │  ├─ signup.js
   │  ├─ upload.js
   │  └─ userdata.js
   ├─ uploads
   │  ├─ 11.png
   │  ├─ aaaa.png
   │  ├─ audioImg10.png
   │  ├─ audioImg12.png
   │  ├─ audioImg13.png
   │  ├─ audioImg15.png
   │  ├─ audioImg26.png
   │  ├─ audioImg5.png
   │  └─ audioImg9.png
   └─ views
      └─ main.ejs

```

<br />

## 📃 API 명세서

<br />

## 📋 ERD 다이어그램

<br />

# 🖥️ 화면 구성 및 주요 기능

### 메인페이지
![initial] <img width="1920" alt="main" src="https://github.com/blee94/Project2/assets/143552237/52e492a2-976f-4ede-9760-79e8d05aa784">
