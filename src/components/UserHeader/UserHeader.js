import React from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight16 } from "@carbon/icons-react";

import { HeaderContainer, Header, Image, ViewResumeLink } from "./styles";

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === "/"}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>Gazal</h2>
          <h4>
            <a
              href={`https://gitconnected.com/v1/portfolio/Mrugapatel`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>Coding in Canada</p>
          <p>
            {5} years of experience as a developer
          </p>
          <p>Love to do Coding</p>
          <p>
            Blog:{" "}
            <a
              href={user.basics.blog}
              target="_blank"
              rel="noreferrer noopener"
            >
              {user.basics.blog}
            </a>
          </p>
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={`https://gitconnected.com/v1/portfolio/gazalbenpatel/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;
