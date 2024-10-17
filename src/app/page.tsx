import {
  buttonStyle,
  buttonWrapperStyle,
  flexCenterCenterStyle,
  flexStyle,
  footerContainerStyle,
  formWrapperStyle,
  inputStyle,
  inputWrapperStyle,
  mainStyle,
  titleContainerStyle,
  titleStyle,
  wrapperStyle,
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
        <section className={flexCenterCenterStyle}>
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
      <footer className={footerContainerStyle}>
        <ul className={wrapperStyle}>
          <li>InMyFamily</li>
          <li>소개</li>
          <li>소개</li>
          <li>개인정보처리방침</li>
          <li>약관</li>
          <li>한국어</li>
          <li>©2024</li>
        </ul>
      </footer>
    </div>
  );
}
