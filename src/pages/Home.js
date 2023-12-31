import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App.js";
import Button from "../component/Button";
import Header from "../component/Header";
import { getMonthRangeByDate, setPageTitle } from "../util.js";
import DiaryList from "../component/DiaryList.js";

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  const onIncreaseMoth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMoth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const data = useContext(DiaryStateContext);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  useEffect(() => {
    setPageTitle("일기장");
  });

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMoth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMoth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
