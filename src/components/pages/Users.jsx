import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `hiro${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "454545@fssss.com",
    phone: "015-01587-8777",
    company: {
      name: "テスト株式会社"
    },
    website: "http://google.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;

  console.log(state);
  return (
    <SConteiner>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SConteiner>
  );
};

const SConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 240px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
