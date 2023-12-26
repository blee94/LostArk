import { useState } from 'react';

function Footer() {
  return (
    <>
      <footer className='ContainerFooter'>
        <img className='Smile' alt='Smile' src='/img/smile.svg' />
        <div className='ContentBox'>
          <div className='ContentFooter L1'>
            회사명. ㈜스마일게이트 알피지 대표이사. 지원길 사업자등록번호.
            220-88-29249 음원 저작사. "Smilegate RPG"
          </div>
          <div className='ContentFooter L2'>
            통신판매업 신고번호. 제2017-성남분당-0904호 E. lostark@smilegate.com
            F. 031-627-0400
          </div>
          <div className='ContentFooter L3'>
            © Smilegate RPG All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
