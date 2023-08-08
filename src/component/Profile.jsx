import React from 'react';
import Banker from "./image/banker.jpg"


function Profile() {
  return (
    <>
    <section>
      <div className='container d-flex justify-content-center'>
        <div class="d-flex flex-column  align-items-center border outline rounded py-3 mt-4 px-3">
            <div class="flex-shrink-0">
              <img src={Banker} className='rounded-circle' alt="banker-img" />
            </div>
            <div class="flex-grow-1 ms-3 ">
            A bank’s primary functions are borrowing and lending. Collecting customer deposits and transforming these into loans is the necessary financial lubricant for any properly functioning market economy. Very broadly, these are loans granted to individuals, small businesses and the aforementioned corporates; facilitating everything from home ownership, entrepreneurial enterprise, small and medium sized companies, fostering investment and overall economic growth and prosperity. Supplementing lending, banks also provide many other services including payments processing, foreign exchange services, insurance, market making, asset management and other retail and wholesale investment services. 
            <footer class="blockquote-footer mt-2 text-center text-success">Ceo of the bank<cite title="Source Title"> Michelle</cite></footer>
            </div>
        </div>
        <div class="d-flex ms-3 flex-column align-items-center border outline rounded py-3 mt-4 px-3">
            <div class="flex-shrink-0">
              <img src={Banker} className='rounded-circle' alt="banker-img" />
            </div>
            <div class="flex-grow-1 ms-3 ">
            A bank’s primary functions are borrowing and lending. Collecting customer deposits and transforming these into loans is the necessary financial lubricant for any properly functioning market economy. Very broadly, these are loans granted to individuals, small businesses and the aforementioned corporates; facilitating everything from home ownership, entrepreneurial enterprise, small and medium sized companies, fostering investment and overall economic growth and prosperity. Supplementing lending, banks also provide many other services including payments processing, foreign exchange services, insurance, market making, asset management and other retail and wholesale investment services. 
            <footer class="blockquote-footer mt-2 text-center text-primary">Ceo of the bank<cite title="Source Title"> Cinderella smith</cite></footer>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Profile