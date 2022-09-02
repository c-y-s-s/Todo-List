import { FC } from "react";
import styled from "styled-components";
import user01 from "./img/user01.png";
const UserPictureBlock = styled.div`
  display: flex;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
`;
const UserPicture = styled.img`
  width: 100%;
`;
const UserName = styled.div`
  font-family: "Verdana", "sans-serif";
  color: #fff;
  font-weight: 900;
  padding-top: 35px;
  letter-spacing: 0.25px;
  font-size: 20px;
  text-align: center;
`;

const UserData: FC = () => {
  return (
    <>
      <UserPictureBlock>
        <UserPicture src={user01} />
      </UserPictureBlock>
      <UserName>Leo Chang</UserName>
    </>
  );
};

export default UserData;
