import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph } from "../../styles";
import { EducationItem, Institution, Degree } from "./styles";

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>Software Developer</Institution>
              <div>
                <Degree>
                  Full Stack Web Developer, Winnipeg,MB
                </Degree>{" "}
                <span> &sdot; </span>
                <span>
                  january 2022 to october 2022
                </span>
              </div>
              <Paragraph>
                {education.description.replace("\n\n", "\n")}
              </Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;
