import { useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Button from "../component/Button";
import Header from "../component/Header";
import { getFormattedDate } from "../util";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`;

    return (
      <div>
        <Header
          title={title}
          leftChild={<Button text={"< 뒤로가기"} />}
          rightChild={<Button text={"수정하기"} />}
        />
        <div>{id}번 일기</div>
        <div>Diary 페이지입니다</div>
      </div>
    );
  }
};

export default Diary;
