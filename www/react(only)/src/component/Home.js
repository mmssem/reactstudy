import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Home() {


  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');

  const saveUserId = event => {
    setId(event.target.value);
    // console.log(event.target.value);
  };

  const saveUserPw = event => {
    setPw(event.target.value);
    // console.log(event.target.value);
  };
 
  return (
    <div>
    <div className={styles.타이틀} id="타이틀">
      API 연습
    </div>
    <div>
      <p align='center'>GPT 및 기타 API 연습 중입니다.</p>
    </div>

    <input
            className="login_id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={idValue}
            onChange={saveUserId}
          />
          <input
            className="login_pw"
            type="password"
            placeholder="비밀번호"
            value={pwValue}
            onChange={saveUserPw}
          />

  </div>
  );
}

export default Home;
