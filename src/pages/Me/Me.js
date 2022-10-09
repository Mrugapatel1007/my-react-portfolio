import React from "react";
import Layout from "../../components/Layout";
import { SectionTitle, Paragraph, Pill } from "../../styles";
import { ProfileLink } from "./styles";

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>I live in Canada from last 3 years with my Family. I'm the software developer from 2012 because From back-home I did study in Bachelors of Computer engineering</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map((skill) => (
            <Pill key={skill.name}>java, SQL, Front-end Developer, .Net core, Asp .Net core, etc...</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && " | "}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;
