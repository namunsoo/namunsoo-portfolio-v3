import { ReactComponent as Html5 } from "../assets/icons/icons8-html-5.svg";
import { ReactComponent as Css3 } from "../assets/icons/icons8-css3.svg";
import { ReactComponent as JS } from "../assets/icons/icons8-javascript.svg";
import { ReactComponent as VisualStudio } from "../assets/icons/icons8-visual-studio.svg";
import { ReactComponent as Spring } from "../assets/icons/icons8-spring.svg";
import { ReactComponent as GitHub } from "../assets/icons/icons8-github.svg";
import { ReactComponent as Java } from "../assets/icons/icons8-java.svg";
import { ReactComponent as CSharp } from "../assets/icons/icons8-c-sharp-logo.svg";
import { ReactComponent as Mssql } from "../assets/icons/icons8-microsoft-sql-server.svg";

function Skills() {
    return (
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">SKILLS</h2>
                <div className="subheading mb-3">프로그래밍 언어 및 도구</div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item"><Html5 width="56" height="56" fill="gray"/></li>
                    <li className="list-inline-item"><Css3 width="56" height="56" fill="gray"/></li>
                    <li className="list-inline-item"><JS width="56" height="56" fill="gray"/></li>
                    <li className="list-inline-item"><Spring width="56" height="56" fill="gray"/></li>
                    <li className="list-inline-item"><GitHub width="56" height="56" fill="gray"/></li>
                    <li className="list-inline-item"><Java width="56" height="56" fill="gray"/></li>
                    <li className="list-inline-item"><CSharp width="56" height="56" fill="gray"/></li>
                    <li className="list-inline-item"><Mssql width="56" height="56" fill="gray"/></li>
                    <li className="list-inline-item"><VisualStudio width="56" height="56" fill="gray"/></li>
                </ul>
                <div className="flex-grow-1">
                    <p>
                        - HTML5 / CSS : 웹 표준 및 반응형 UI 구현 가능, 유지보수성과 가독성을 고려한 마크업 작성 경험<br />
                        - Java / Spring Framework : REST API 개발 및 웹 애플리케이션 경험, 객체 지향적 설계 역량 보유 <br />
                        - C# / Visual Studio: 서버-클라이언트 웹 애플리케이션 개발 경험, C# 기반 풀스택 개발 가능<br />
                        - JavaScript : DOM 조작 및 이벤트 처리, 비동기 통신 활용 경험, 동적 웹 페이지 구현 가능<br />
                        - MSSQL : 데이터 모델링, 쿼리 작성 및 최적화 경험, 백엔드 서비스와 안정적 연동 가능<br />
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Skills;