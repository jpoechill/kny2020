<template>
  <div>
    <!-- Header Desktop -->
    <div class="sticky w-100 bg-dark d-none d-md-block">
      <div class="container text-white pt-3 pb-3">
        <div class="row">
          <div class="col-md-6">
            <!-- <h4 class="font-default">
              KNY2020
            </h4> -->
            <img src="logo.png" style="max-width: 50px;" alt="">
          </div>
          <div class="col-md-6 text-right">
            <button @click="scrollToAddress()" class="py-1 mt-2 px-4">
              SEE ADDRESS
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Header Mobile -->
    <div class="sticky w-100 bg-dark d-md-none">
      <div class="container text-white pt-3 pb-4">
        <div class="row">
          <div class="col-md-12 pb-1 text-center">
            <!-- <h4 class="font-default">
              KNY2020
            </h4> -->
            <img src="logo.png" class="m-3" style="max-width: 60px;" alt="">
          </div>
          <div class="col-md-12 text-center">
            <button @click="scrollToAddress()" class="w-75 py-1 px-4">
              SEE ADDRESS
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-bg mt-3 pt-5">
      <div class="container mt-4 py-5">
        <!-- Padding Desktop -->
        <div class="row mt-5 pt-5 d-none d-md-block">
          <div class="col-md-12 pt-3 d-flex justify-content-center align-items-center text-white">
            <div class="bg-opague text-center px-5 py-3">
              <h1>
                <b>Cambodian New Year 2020</b><br>
                <span>Join us on March 28th</span>
              </h1>
            </div>
          </div>
        </div>
        
        <!-- Padding Mobile -->
        <div class="row mt-5 pt-3 d-md-none">
          <div class="col-md-12 pt-3 d-flex justify-content-center align-items-center text-white">
            <div class="bg-opague text-center px-5 py-3">
              <h1>
                <b>Cambodian New Year 2020</b><br>
                <span>Join us on March 28th</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container my-5 pt-5">
      <div class="row pt-4 pb-5">
        <div class="offset-md-2 col-md-8 text-center px-5">
          <h4>
            We sincerely invite you to join us for the 24th annual celebration of Cambodian (Khmer) New Year, hosted by the Oakland Cambodian Dance Troupe, at the LDS Oakland, California Temple. Join us for a night complete with traditional dance performances, music, food and games.
          </h4>
        </div>
      </div>
    </div>

    <!-- Section Desktop -->
    <div class="container my-5 py-3 d-none d-md-block">
      <div class="row text-center py-5">
        <div class="col-md-6">
          <img src="/performer-02-sqr.png" class="w-75" alt="">
        </div>
        <div class="col-md-6 d-flex align-items-center px-5">
          <h4>
            Sit and enjoy performances by local youth and Cambodian organizations throughout the Bay Area of California.
          </h4>
        </div>
      </div>
    </div>

    <!-- Section Mobile -->
    <div class="container my-5 py-3 d-md-none">
      <div class="row text-center py-5">
        <div class="col-md-6">
          <img src="/performer-02-sqr.png" class="w-75" alt="">
        </div>
        <div class="col-md-6 d-flex align-items-center pt-5 px-5">
          <h4>
            Sit and enjoy performances by local youth and Cambodian organizations throughout the Bay Area of California.
          </h4>
        </div>
      </div>
    </div>

    <!-- Section Desktop -->
    <div class="container my-5 py-3 pb-4 d-none d-md-block">
      <div class="row text-center py-5">
        <div class="col-md-6 d-flex align-items-center px-5">
          <h4>
            Eat, listen to live music, and join us for a reception of games and dancing.
          </h4>
        </div>
        <div class="col-md-6">
          <img src="/performer-04-sqr.png" class="w-75" alt="">
        </div>
      </div>
    </div>

    <!-- Section Mobile -->
    <div class="container my-5 py-3 pb-4 d-md-none">
      <div class="row text-center py-5">
        <div class="col-md-6">
          <img src="/performer-04-sqr.png" class="w-75" alt="">
        </div>
        <div class="col-md-6 d-flex align-items-center pt-5 px-5">
          <h4>
            Eat, listen to live music, and join us for a reception of games and dancing.
          </h4>
        </div>
      </div>
    </div>

    <div class="w-100">
      <div class="container pb-5 my-5">
        <div class="row pt-5 mb-5">
          <div class="col-md-12 text-center">
            <h4>Leaders and Teachers</h4><br><br>
            <img class="avatar" src="/avatars/teacher-01.png" alt="">
            <img class="avatar" src="/avatars/teacher-02.png" alt="">
            <img class="avatar" src="/avatars/teacher-03.png" alt="">
            <img class="avatar" src="/avatars/teacher-04.png" alt="">
            <img class="avatar" src="/avatars/teacher-05.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div ref="location-address" class="w-100 bg-light">
      <div class="container py-5">
        <div class="row pt-5">
          <div class="col-md-12 text-center">
            <h4>
              Cultural Performances, Food and Drinks, 
              Dancing and Games <br><br>
            </h4>
            March 28th, 2020<br>
            Performances start at 5pm<br><br>

            LDS (Mormon) Temple<br>
            4770 Lincoln Ave.<br>
            Oakland, CA 94602<br><br>
            <a href="https://instagram.com/cnyoakland2020" target="_blank">
              <img src="/ig-logo.png" class="py-5 ig-logo" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 bg-dark">
      <div class="container py-5 text-white">
        <div class="row">
          <div class="col-md-12 text-center">
            In Partnership With <br><br>
            Khmer Youth of Modesto<br>
            Morodok Khmer of Stockton<br>
            United Khmer Culture Preservation of Fresno<br>
            Khmer Angkor Dance Troupe of Oakland<br><br>
            © 2020
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$router.push({
    //   path: 'https://google.com',
    // })

    window.location.href = 'https://google.com'
    // setTimeout(() => {
    //   // alert('Unfortunately, this event has been post-poned due to: \n\nCORONA-VIRUS \n\nWe apologize for the inconvenience and hope to update you as new information is received!')
    // }, 2000)
  },
  methods: {
    scrollToAddress: function () {
      let elTopPos = this.$refs['location-address'].getBoundingClientRect().top
      
      window.scrollTo(0, elTopPos);
    },
  },
}
</script>

<style>
/* body, html {
  font-family: 'Cabin', 'Helvetica';
  letter-spacing: 1px;
  scroll-behavior: smooth;
} */

.hero-bg {
  background: url('/performer-05-hero.png') no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 540px;
}

.hero-bg .row, .hero-bg .row .col-md-12 {
  height: 100%;
}

.avatar {
  max-width: 150px;
  margin: 15px;
}

/* When screen width is 600px or less */
@media only screen and (max-width: 600px) {
  .avatar {
    max-width: 100px;
    margin: 15px;
  };
}

h4 {
  line-height: 38px;
}

.ig-logo {
  max-width: 40px;
}

.mw-none {
  max-width: none;
}

.bg-dark {
  background-color: #170349 !important;
}

.bg-opague {
  background-color: rgba(23, 2, 73, .4);
}

button {
  background-color: #F28902;
  border: none;
  color: #fff;
  /* padding: 6px 34px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 700;
  transition: .3s;
}

button:hover {
  background-color: #fff;
  cursor: pointer;
  color: #170349;
}

.font-default {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important;
  letter-spacing: 1px;
}

.sticky {
  z-index: 9999;
  position: fixed;
  top: 0;
  width: 100%
}
</style>
