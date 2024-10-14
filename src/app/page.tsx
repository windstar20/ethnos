import {
  buttonStyle,
  buttonWrapperStyle,
  flexStyle,
  formWrapperStyle,
  inputStyle,
  inputWrapperStyle,
  mainStyle,
  titleContainerStyle,
  titleStyle,
} from '@/app/page.css';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={'h-full'}>
      <main className={mainStyle}>
        <section
          className={'bg-amber-50 flex items-center justify-center border'}
        >
          <Image
            src={'/images/inmyfamilyMain.webp'}
            alt={'logo'}
            width={400}
            height={400}
          />
        </section>
        <section className={flexStyle}>
          <div className={formWrapperStyle}>
            <div className={'flex flex-col'}>
              <div className={titleContainerStyle}>
                <h1 className={titleStyle}>In My Family</h1>
              </div>
              <div>
                <div className={inputWrapperStyle}>
                  <input
                    type={'text'}
                    placeholder={'전화번호, 사용자 이름 또는 이메일'}
                    className={inputStyle}
                  />
                </div>
                <div className={inputWrapperStyle}>
                  <input
                    type={'password'}
                    placeholder={'비밀번호'}
                    className={inputStyle}
                  />
                </div>
              </div>
              <div className={buttonWrapperStyle}>
                <Button className={buttonStyle}>로그인</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={'p-6 h-13'}>
        <div>
          <ul>
            <li>InMyFamily</li>
            <li>소개</li>
            <li>소개</li>
            <li>개인정보처리방침</li>
            <li>약관</li>
          </ul>
        </div>
        <div>
          <span>한국어</span>
          <span>©2024 </span>
        </div>
      </footer>
    </div>
  );
}
