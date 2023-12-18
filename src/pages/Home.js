import Button from "../component/Button.js";
import Editor from "../component/Editor.js";
import Header from "../component/Header.js";

const Home = () => {
  return (
    <div>
      <Editor
        onSubmit={() => {
          alert("작성 완료");
        }}
      />
    </div>
  );
};

export default Home;
