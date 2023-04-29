import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is (some of) my experience and education!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "IBT Grade 11 Student",
    desc: "North Park Secondary School | 2020 ~ 2024",
  },
  {
    title: "CEO & Co-Founder",
    desc: "VoxiCloud Inc. | 2020 - Now",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    desc: "Azure AZ-900 | Since Aug 2022",
  },
];

export default Education;
