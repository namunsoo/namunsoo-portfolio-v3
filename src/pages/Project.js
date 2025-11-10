import ProjectCard from "../components/ProjectCard";

const projectList = [
  {
    id: 0,
    title: '안드로이드 암기 앱', 
    location: 'assets/images/project/android_memorization_app/',
    imgs: ['image2.png','image3.png','image4.png','image5.png','image6.png','image7.png','image8.png','image9.png'], 
    skills: ['Android', 'Kotlin'],
    detail: 'Android Studio & Kotlin 학습용 \r\n기간: 2024.01 ~ 2024.02 \r\n인원: 1명', 
    gitUrl: 'https://github.com/namunsoo/AndroidMemorizationApp'
  },{
    id: 1,
    title: '윈도우 메모 앱', 
    location: 'assets/images/project/window_memo_app/',
    imgs: ['WindowMemoApp01.PNG','WindowMemoApp02.PNG','WindowMemoApp03.PNG','WindowMemoApp04.PNG'], 
    skills: ['WinUi 3', 'C#'],
    detail: '윈도우 스티커 메모를 본따 내가 원하는 기능 추가해서 만듬 \r\n기간: 2023.12 ~ 2024.01 \r\n인원: 1명', 
    gitUrl: 'https://github.com/namunsoo/MyWidget'
  },{
    id: 2,
    title: '윈도우 달력 앱', 
    location: 'assets/images/project/window_calendar_app/',
    imgs: ['WindowCalendar01.png','WindowCalendar02.png','WindowCalendar03.png','WindowCalendar04.png','WindowCalendar05.png'],
    skills: ['WinUi 3', 'C#'],
    detail: '구글 캘린더랑 연동되는 캘린더앱 \r\n기간: 2023.12 ~ 2023.12 \r\n인원: 1명', 
    gitUrl: 'https://github.com/namunsoo/NMSWindoCalendar'
  },{
    id: 3,
    title: '윈도우 암기 앱', 
    location: 'assets/images/project/window_memorization_app/',
    imgs: ['WindowMemorizationApp01.png','WindowMemorizationApp02.png'],
    skills: ['WinUi 3', 'C#'],
    detail: '정보처리 기사 공부하려고 만든 암기앱 \r\n기간: 2023.11 ~ 2024.04 \r\n인원: 1명', 
    gitUrl: 'https://github.com/namunsoo/NMSMemorizationApp'
  },{
    id: 4,
    title: 'Solind', 
    location: 'assets/images/project/sollind/',
    imgs: ['Sollind1.PNG','Sollind2.PNG','Sollind3.PNG','Sollind4.PNG','Sollind5.PNG','Sollind6.PNG','Sollind7.PNG','Sollind8.PNG'],
    skills: ['Java', 'Oracle', 'Linux', 'MongoDB', 'NodeJS', 'Spring', 'Python', 'AI'],
    detail: '블라인드를 참고해서 만든 사이트 \n기업 등급예측 AI,글 작성자 MBTI 예측 AI 기능 추가\r\n기간: 2022.09 ~ 2022.11 \r\n인원: 4명', 
    gitUrl: 'https://github.com/namunsoo/namunsoo-portfolio'
  },{ 
    id: 5,
    title: '졸업 작품', 
    location: 'assets/images/project/graduation_project/',
    imgs: ['graduation_project01.gif','graduation_project02.png','graduation_project03.png','graduation_project04.png'],
    skills: ['Java', 'Python', 'Arduino', 'AI'],
    detail: '책을 올려두면 책을넘기고 책을 카메라로 찍어서 읽어주는 기계 \r\n기간: 2021.09 ~ 2021.11 \r\n인원: 1명'
  },{
    id: 6,
    title: '개인 블로그', 
    location: 'assets/images/project/blog/',
    imgs: ['MyBlog_01.PNG','MyBlog_02.PNG'],
    detail: '개인 공부 및 정보 수집을 위한 블로그',
    etcUrl: 'https://namunsoo.tistory.com/'
  }
]

function Project() {
    return (
        <section className="resume-section" id="project">
            <div className="resume-section-content">
                <h2 className="mb-5">PROJECTS</h2>
                <div className="row row-cols-1 row-cols-sm-2 g-3">
                    {projectList.map((item, idx) => (
                        <div className="col" key={item.id}>
                            <ProjectCard {...item}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;