import React from 'react'
import './LoginPage.css'

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="header">
          <h1>부엉책방</h1>
          <p>부엉이 친구와 함께 하는<br />독서기록어플</p>
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
            <span className="kakao-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 3C6.477 3 2 6.477 2 12C2 17.523 6.477 21 12 21C17.523 21 22 17.523 22 12C22 6.477 17.523 3 12 3Z" fill="#FEE500" />
                <path d="M12.5 8.5C12.5 8.224 12.276 8 12 8C11.724 8 11.5 8.224 11.5 8.5V11.5H9.5C9.224 11.5 9 11.724 9 12C9 12.276 9.224 12.5 9.5 12.5H11.5V15.5C11.5 15.776 11.724 16 12 16C12.276 16 12.5 15.776 12.5 15.5V12.5H14.5C14.776 12.5 15 12.276 15 12C15 11.724 14.776 11.5 14.5 11.5H12.5V8.5Z" fill="black" />
              </svg>
            </span>
            카카오 로그인
          </button>
        </div>

        <div className="footer-links">
          <a href="#">아이디 찾기</a>
          <span>|</span>
          <a href="#">비밀번호 찾기</a>
          <span>|</span>
          <a href="#" className="signup-link">회원가입</a>
        </div>
      </div>
    </div>
  )
}
