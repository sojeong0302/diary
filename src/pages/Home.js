import { useState } from "react";
import Button from "../component/Button";
import Header from "../component/Header";

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  const onIncreaseMoth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMoth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMoth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMoth} />}
      />
    </div>
  );
};

export default Home;
