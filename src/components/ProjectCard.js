import { Card, Button, Carousel, Stack } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { ReactComponent as Html5 } from "../assets/icons/icons8-html-5.svg";
import { ReactComponent as Css3 } from "../assets/icons/icons8-css3.svg";
import { ReactComponent as JS } from "../assets/icons/icons8-javascript.svg";
import { ReactComponent as VisualStudio } from "../assets/icons/icons8-visual-studio.svg";
import { ReactComponent as Spring } from "../assets/icons/icons8-spring.svg";
import { ReactComponent as GitHub } from "../assets/icons/icons8-github.svg";
import { ReactComponent as Java } from "../assets/icons/icons8-java.svg";
import { ReactComponent as CSharp } from "../assets/icons/icons8-c-sharp-logo.svg";
import { ReactComponent as Python } from "../assets/icons/icons8-python.svg";
import { ReactComponent as Arduino } from "../assets/icons/icons8-arduino.svg";
import { ReactComponent as NodeJS } from "../assets/icons/icons8-node-js.svg";
import { ReactComponent as Android } from "../assets/icons/icons8-android-os.svg";
import { ReactComponent as Kotlin } from "../assets/icons/icons8-kotlin.svg";

const skillIcons = {
    'HTML5': <Html5 width="24" height="24"/>,
    'CSS3': <Css3 width="24" height="24"/>,
    'JavaScript': <JS width="24" height="24"/>,
    'Visual Studio': <VisualStudio width="24" height="24"/>,
    'Spring': <Spring width="24" height="24"/>,
    'GitHub': <GitHub width="24" height="24"/>,
    'NodeJS': <NodeJS width="24" height="24"/>,
    'Java': <Java width="24" height="24"/>,
    'C#': <CSharp width="24" height="24"/>,
    'Python': <Python width="24" height="24"/>,
    'Arduino': <Arduino width="24" height="24"/>,
    'Android': <Android width="24" height="24"/>,
    'Kotlin': <Kotlin width="24" height="24"/>,
};

function ProjectCard({id, title, location, imgs, skills, detail, gitUrl, etcUrl}) {
  return (
    <Card>
      <Card.Header>
        <Carousel interval={null} data-bs-theme="dark">
          {imgs.map((img, idx)=>(
            <Carousel.Item key={idx}>
              <Card.Img variant="top" src={require(`../${location}${img}`)} style={{ aspectRatio: "6/4", objectFit: "scale-down" }}/>
            </Carousel.Item>
          ))}
        </Carousel>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ whiteSpace: 'pre-wrap' }}>{detail}</Card.Text>
        {skills && skills.length > 0 && (
          <Stack direction="horizontal" className="flex-wrap" style={{width: '100%', marginBottom: 10, borderRadius: 6, backgroundColor: '#f9c51d33', border: '1px solid #f9c51d'}}>
            {skills.map((item, idx)=>(
              <div key={idx} className='badge' style={{margin: 5, color: '#343a40', height: 34, border: '1px solid #91C8E4', borderRadius: 10, backgroundColor: '#e8f9ff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {skillIcons[item] && (
                  <span style={{ marginRight: 5 }}>{skillIcons[item]}</span>
                )}
                <span>{item}</span>
              </div>
            ))}
          </Stack>
        )}
        {gitUrl && (
          <Button variant="primary"href={gitUrl} target="_blank" rel="noopener noreferrer">
            <GitHub width="24" height="24"/>
            <span> 깃 허브</span>
          </Button>
        )}
        {etcUrl && (
          <Button variant="primary"href={etcUrl} target="_blank" rel="noopener noreferrer">보러가기</Button>
        )}
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imgs: PropTypes.array.isRequired,
  skills: PropTypes.array,
  detail: PropTypes.string.isRequired,
  gitUrl: PropTypes.string,
  etcUrl: PropTypes.string
};

export default ProjectCard;