

function History() {
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">CARRER</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">한국기술신용평가</h3>
                        <div class="subheading text-primary mb-3">C#, Blazor, MSSQL, GraphQL, Kendo UI, Anychart</div>
                        <div className="subheading">신규 비즈니스 확장 및 외부 시스템 연동</div>
                        <p>
                            [주요 역할]<br />
                            외부 특허 정보 API (Wisdomain)를 연동하여 특허 빅데이터 분석<br />
                            토스 결제 시스템 활용한 우수기업인증 시스템 구축<br />
                            신정원 비재무 기반 기업 분석 리포트 개발
                        </p>
                        <div className="subheading">기술평가 시스템 기능 고도화 및 품질 향상</div>
                        <p>
                            [주요 역할]<br />
                            개인정보보호를 위한 마스킹 기능 구현<br />
                            평가 프로세스 로직 최적화<br />
                            담당자/일정 일괄배정 기능 개발<br />
                            보고서 품질 개선
                        </p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2024.06 ~ 재직중</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">네오플러스</h3>
                        <div class="subheading text-primary mb-3">C#, ASP.NET, MSSQL, Kendo UI, Bootstrap, MS Graph api, Azure AI, EWS, AD</div>
                        <div className="subheading">사내 ASP.NET Core 신규 서비스 개발</div>
                        <p>
                            [주요 역할]<br />
                            게시글 AI 요약, AI 자동 답변, 게시판 공지 기타 UI 수정
                        </p>
                        <div className="subheading">Neo 포탈 리팩토링 및 추가기능 개발</div>
                        <p>
                            [주요 역할]<br />
                            M365 메일 및 사내 AD 계정 비밀번호 변경 기능<br />
                            경력관리 기능 분석 및 Neo 포탈로 이전<br />
                        </p>
                        <div className="subheading">NEO365 기능개선 및 유지보수</div>
                        <p>
                            [주요 역할]<br />
                            NEO365용 그룹, 팀 생성 및 아카이빙 윈도우 서비스 개발<br />
                            M365 팀, 그룹 생성 및 관리자 기능 개발<br />
                        </p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2022.11 ~ 2024.06</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">학력 및 교육</h3>
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <div className="subheading">블록체인 네트워크 보안을 적용한 AI서비스 기반 풀스택 개발자</div>
                            <div className="flex-shrink-0"><span className="text-primary">2022.06 ~ 2022.11</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mt-3">
                            <div className="subheading">안양대학교 소프트웨어 전공</div>
                            <div className="flex-shrink-0"><span className="text-primary">2019.03 ~ 2022.08</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mt-3">
                            <div className="subheading">용인송담대학교 자동차기계 전공</div>
                            <div className="flex-shrink-0"><span className="text-primary">2015.03 ~ 2019.02</span></div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">기술 자격증</h3>
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <div className="subheading">정보처리기사</div>
                            <div className="flex-shrink-0"><span className="text-primary">2024.06</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mt-3">
                            <div className="subheading">자동차 정비 기능사</div>
                            <div className="flex-shrink-0"><span className="text-primary">2016.11</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default History;