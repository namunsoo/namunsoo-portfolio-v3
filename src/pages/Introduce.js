import CodeColor from "../components/CodeColor";
import TypingEffect from "../components/TypingEffect";

import './Introduce.css';

function Introduce() {
    return (
        <section className="resume-section" id="introduce">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    <span className="text-primary">MUN SOO NA</span><br />
                    PORTFOLIO
                </h1>
                <div id='computer'>
                    <div id='introduce'>
                        <pre className='grey'>
                            <code>
                                &nbsp;1     <CodeColor color={["orange","blue","white"]} text={["public class"," 포트폴리오 ","{"]}/><br />
                                &nbsp;2<br />
                                &nbsp;3         <CodeColor color={["orange","green2","white"]} text={["public static void"," main","() {"]}/><br />
                                &nbsp;4<br />
                                &nbsp;5             <CodeColor color={["blue","yellow","white","orange","green","white"]} text={["사람"," 나문수 ","="," new ","사람","();"]}/><br />
                                &nbsp;6             <CodeColor color={["yellow","white","green","white","green2","white"]} text={["나문수",".","set자세","(","\"배움\"",");"]}/><br />
                                &nbsp;7             <CodeColor color={["yellow","white","green","white","green2","white"]} text={["나문수",".","set업무","(","\"책임\"",");"]}/><br />
                                &nbsp;8<br />
                                &nbsp;9             <CodeColor color={["blue","white","green","white","yellow","white"]} text={["어떤개발자",".","소개","("," 나문수 ",");"]}/><br />
                                &nbsp;10<br />
                                &nbsp;11        <CodeColor color={["white"]} text={["}"]}/><br />
                                &nbsp;12<br />
                                &nbsp;13    <CodeColor color={["white"]} text={["}"]}/><br />
                            </code>
                        </pre>
                    </div>
                    <TypingEffect text="항상 배우는 자세로 일하고, 맡은 바 책임을 다하는 나문수입니다."/>
                </div>
            </div>
        </section>
    );
}

export default Introduce;