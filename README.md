# Sesac_Project_02

온라인 rpg게임 로스트아크를 즐기는 유저들에게 유용한 정보 제공 & 유저간 소통을 위한 웹사이트

**[메인페이지]** 메인 포스터 업데이트, 여섯 종류의 원하는 페이지로 이동

**[마이페이지]** 메인 캐릭터 등록, 좋아요 한 노래/이미지 관리, 웹사이트에 접속중인 다른 유저와 채팅(keep)

**[BGM]** 게임사가 제공하는 모든 음원을 무료로 재생, 마음에 드는 곡 좋아요 누르고 마이페이지에서 관리

**[Boss]** 각 보스의 포스터 표시, 링크 이동시 대표 BGM 재생, 보상/공략 등 상세정보 확인

**[OOTD]** 코디/캡쳐 자랑하기, 좋아요 눌러 마이페이지에서 관리

**[App]** 여러 미니게임? (구상중)

**[MyCharacter]** 자신의 캐릭터 검색해서 상세정보 찾아보기, 메인 캐릭터로 등록

**[Class]** 모든 클래스 모아보기(상세정보 포함)

**[회원가입/로그인]** 유효성검사, ID/PW 찾기

- **개발 기간** : 2023-12-26 ~ 2024-01-11(2주)
- **배포 주소** : http://~~~~~
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

**[LostArk](https://developer-lostark.game.onstove.com)**

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
│  │  ├─ img
│  │  │  ├─ audioEQ.gif
│  │  │  ├─ audioImg1.png
│  │  │  ├─ audioImg10.png
│  │  │  ├─ audioImg11.png
│  │  │  ├─ audioImg12.png
│  │  │  ├─ audioImg13.png
│  │  │  ├─ audioImg14.png
│  │  │  ├─ audioImg15.png
│  │  │  ├─ audioImg16.png
│  │  │  ├─ audioImg17.png
│  │  │  ├─ audioImg18.png
│  │  │  ├─ audioImg19.png
│  │  │  ├─ audioImg2.png
│  │  │  ├─ audioImg20.png
│  │  │  ├─ audioImg21.png
│  │  │  ├─ audioImg22.png
│  │  │  ├─ audioImg23.png
│  │  │  ├─ audioImg24.png
│  │  │  ├─ audioImg25.png
│  │  │  ├─ audioImg26.png
│  │  │  ├─ audioImg27.png
│  │  │  ├─ audioImg28.png
│  │  │  ├─ audioImg29.png
│  │  │  ├─ audioImg3.png
│  │  │  ├─ audioImg30.png
│  │  │  ├─ audioImg31.png
│  │  │  ├─ audioImg4.png
│  │  │  ├─ audioImg5.png
│  │  │  ├─ audioImg6.png
│  │  │  ├─ audioImg7.png
│  │  │  ├─ audioImg8.png
│  │  │  ├─ audioImg9.png
│  │  │  ├─ boss1.gif
│  │  │  ├─ boss1.jpg
│  │  │  ├─ boss2.gif
│  │  │  ├─ boss2.jpg
│  │  │  ├─ boss3.gif
│  │  │  ├─ boss3.jpg
│  │  │  ├─ boss4.gif
│  │  │  ├─ boss4.jpg
│  │  │  ├─ boss5.gif
│  │  │  ├─ boss5.jpg
│  │  │  ├─ boss6.gif
│  │  │  ├─ boss6.jpg
│  │  │  ├─ bossMain.png
│  │  │  ├─ bs1.jpg
│  │  │  ├─ bs1.png
│  │  │  ├─ bs10.jpg
│  │  │  ├─ bs11.jpg
│  │  │  ├─ bs12.jpg
│  │  │  ├─ bs13.jpg
│  │  │  ├─ bs14.jpg
│  │  │  ├─ bs15.jpg
│  │  │  ├─ bs16.jpg
│  │  │  ├─ bs16.png
│  │  │  ├─ bs17.png
│  │  │  ├─ bs18.jpg
│  │  │  ├─ bs18.png
│  │  │  ├─ bs2.jpg
│  │  │  ├─ bs2.png
│  │  │  ├─ bs3.png
│  │  │  ├─ bs4.jpg
│  │  │  ├─ bs5.jpg
│  │  │  ├─ bs6.jpg
│  │  │  ├─ bs7.jpg
│  │  │  ├─ bs8.jpg
│  │  │  ├─ bs9.jpg
│  │  │  ├─ c1.png
│  │  │  ├─ c10.png
│  │  │  ├─ c11.png
│  │  │  ├─ c2.png
│  │  │  ├─ c3.png
│  │  │  ├─ c4.png
│  │  │  ├─ c5.png
│  │  │  ├─ c6.png
│  │  │  ├─ c7.png
│  │  │  ├─ c8.png
│  │  │  ├─ c9.png
│  │  │  ├─ classFighterM.png
│  │  │  ├─ classFMM.png
│  │  │  ├─ classFMS.png
│  │  │  ├─ classFS.png
│  │  │  ├─ classHM.png
│  │  │  ├─ classHS.png
│  │  │  ├─ classHunter.png
│  │  │  ├─ ClassSM.png
│  │  │  ├─ classSorceror.png
│  │  │  ├─ classSpecialist.png
│  │  │  ├─ classSpecialistS.png
│  │  │  ├─ classSpecialM.png
│  │  │  ├─ classSS.png
│  │  │  ├─ classWFM.png
│  │  │  ├─ classWM.png
│  │  │  ├─ classWorrior.png
│  │  │  ├─ classWorriorF.png
│  │  │  ├─ classWS.png
│  │  │  ├─ LAlogo.png
│  │  │  ├─ logo.png
│  │  │  ├─ main1.jpg
│  │  │  ├─ main2.jpg
│  │  │  ├─ main3.jpg
│  │  │  ├─ main4.jpg
│  │  │  ├─ mococo.png
│  │  │  ├─ My1.png
│  │  │  ├─ OOTD1.jpg
│  │  │  ├─ OOTD2.jpg
│  │  │  ├─ OOTD3.jpg
│  │  │  ├─ OOTD4.jpg
│  │  │  ├─ OOTD5.jpg
│  │  │  ├─ OOTD6.jpg
│  │  │  ├─ OOTD7.jpg
│  │  │  ├─ OOTD8.jpg
│  │  │  ├─ smile.svg
│  │  │  ├─ star.png
│  │  │  └─ thanks.png
│  │  ├─ index.html
│  │  └─ playlist
│  │     ├─ vol1_01_Sailing the Dream.wav
│  │     ├─ vol1_02_Leonhart.wav
│  │     ├─ vol1_03_Aman's Theme.wav
│  │     ├─ vol1_04_The Castle of Luteran.wav
│  │     ├─ vol1_05_Silian's Theme.wav
│  │     ├─ vol1_06_Karmain's Theme.wav
│  │     ├─ vol1_07_Into the Wider World.wav
│  │     ├─ vol1_08_The Ark.wav
│  │     ├─ vol1_09_Glory of Luteran.wav
│  │     ├─ vol1_10_Leonhart X-mas Ver.wav
│  │     ├─ vol1_11_Loarune.wav
│  │     ├─ vol1_12_Waltz of the Flower.wav
│  │     ├─ vol1_13_The Great Castle.wav
│  │     ├─ vol1_14_Faten.wav
│  │     ├─ vol2_01_Prelude.wav
│  │     ├─ vol2_02_Tale of Pletze.wav
│  │     ├─ vol2_03_Neria Pub.wav
│  │     ├─ vol2_04_Mokoko Village.wav
│  │     ├─ vol2_05_Heart of Krater.wav
│  │     ├─ vol2_06_Starlight Island.wav
│  │     ├─ vol2_07_Club Avenue.wav
│  │     ├─ vol2_08_Tears of the Glacier Island.wav
│  │     ├─ vol2_09_Calm Village.wav
│  │     ├─ vol2_10_The House of Werner.wav
│  │     ├─ vol2_11_Ocean World.wav
│  │     ├─ vol2_12_Club Heartbeat.wav
│  │     ├─ vol2_13_Nostalgia.wav
│  │     ├─ vol2_14_Romantic Weapon Musical Ver.wav
│  │     ├─ vol2_15_Liebeheim.wav
│  │     ├─ vol3_01_The New Beginning.wav
│  │     ├─ vol3_02_Consolation.wav
│  │     ├─ vol3_03_Frost Jail Plateau.wav
│  │     ├─ vol3_04_Chang Chun.wav
│  │     ├─ vol3_05_Bern Castle.wav
│  │     ├─ vol3_06_Karlaja Village.wav
│  │     ├─ vol3_07_Nia Village.wav
│  │     ├─ vol3_08_Delphi County.wav
│  │     ├─ vol3_09_Saland Hill.wav
│  │     ├─ vol3_10_Star Sandy Beach.wav
│  │     ├─ vol3_11_Shadow Moon Market.wav
│  │     ├─ vol3_12_Whispering Small Island.wav
│  │     ├─ vol3_13_Peyto.wav
│  │     ├─ vol3_14_Song of Sunset.wav
│  │     ├─ vol3_15_Oe e hoomanao.wav
│  │     └─ vol3_16_Albion's Rage.wav
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
