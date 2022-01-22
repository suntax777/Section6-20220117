import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecodaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "hiro",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "454545@fssss.com",
  phone: "015-01587-8777",
  company: {
    name: "テスト株式会社"
  },
  website: "http://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
