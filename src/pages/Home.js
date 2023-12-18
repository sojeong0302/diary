import { useSearchParams } from "react-router-dom";
import Button from "../component/Button.js";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="Home">
      <Button text={"기본 버튼"} />
      <Button type="positive" text={"긍정 버튼"} />
      <Button type="negative" text={"부정 버튼"} />
    </div>
  );
};

export default Home;
