import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Ayaan Tunio</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a developer and entrepreneur</HighlightAlt> based in Toronto,
        Canada.
      </p>
      <p>
        As a dedicated 16-year-old, I'm working towards developing <br />
        new technologies that will benefit the world. Aside from <br />
        programming, I have experience in programming, cloud, and AI. <br />
        I've gained a wide range of knowledge and expertise thanks to my <br />
        love for innovation. I feel that learning new things and adapting <br />
        to change are essential for success in any field. I constantly look <br />
        for new challenges to overcome and chances to push myself.
      </p>
    </AboutWrapper>
  );
};

export default About;
