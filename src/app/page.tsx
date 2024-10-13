import { flexStyle, formWrapperStyle, mainStyle } from '@/app/page.css';
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
              <div className={'flex justify-center items-center'}>
                <span>In My Family</span>
              </div>
              <div>
                <div>
                  <input
                    type={'text'}
                    placeholder={'전화번호, 사용자 이름 또는 이메일'}
                  />
                </div>
                <div>
                  <input type={'password'} placeholder={'비밀번호'} />
                </div>
              </div>
              <div>
                <Button>로그인</Button>
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
