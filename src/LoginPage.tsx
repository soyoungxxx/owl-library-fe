import React from "react";
import "./LoginPage.css";

import kakaoLoginImg from "./assets/btn_login_kakao.png";

const LoginPage = (): React.ReactElement => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="header">
          <h1>부엉책방</h1>
          <p>
            부엉이 친구와 함께 하는
            <br />
            독서기록어플
          </p>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            className="input-field"
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className="input-field"
          />
          <button className="login-button">로그인</button>
        </div>

        <div className="divider">
          <span>또는</span>
        </div>

        <div className="social-login">
          <button className="naver-login">
            <span className="naver-icon">N</span>
            네이버 로그인
          </button>

          <button className="kakao-login">
            <img src={kakaoLoginImg} />
          </button>
        </div>

        <div className="footer-links">
          <a href="#">아이디 찾기</a>
          <span>|</span>
          <a href="#">비밀번호 찾기</a>
          <span>|</span>
          <a href="#" className="signup-link">
            회원가입
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;