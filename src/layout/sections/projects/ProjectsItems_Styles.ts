import styled from "styled-components";
import { SkillTitle } from "../../../components/SkillTitle";

const ProjectsItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 16px;
`

const ProjectsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  background-color: #31313f;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  ${SkillTitle} {
    margin-bottom: 5px;
    color: #7562e0;
  }
`

const ProjectsItemText = styled.p`
  flex-grow: 1;
  margin-bottom: 24px;
`

const ProjectsItemImage = styled.div`
  position: relative;
  padding-bottom: 55%;
  margin-bottom: 16px;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`


export const S = {
  ProjectsItems,
  ProjectsItem,
  ProjectsItemText,
  ProjectsItemImage
}