<template>
  <footer class="footer">
    <div class="footer-head">
      <p>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-pinterest"></i>
      </p>
      <div class="row m-0 footer-head-input">
        <input type="text" placeholder="Your Email Address">
        <p>SUBSCRIBE</p>
      </div>
    </div>
    <div class="row m-0 footer-image">
      <img :src="item.source" alt="" class="col-md-2 col-2 p-0" v-for="item in footerImage" :key="item.id">
    </div>
    <div class="row m-0 footer-details global-container">
      <div class="col-md col p-0 footer-details-brand">
        <img class="mb-2" src="@/assets/image/mavelin-brand.png" alt="Mavelin">
        <p class="mb-4">
          Mavelin is a Wordpress E-commerce theme <br>
          focused to collecting, grouping your content Then selling <br>
          your stuffs. It is perfect for small-to-high trafic <br>
          e-commerce bussiness site.
        </p>
        <p>COPY RIGHTS <i class="far fa-copyright"></i> 2017 MAVELIN. POWERED BY SIRCLO</p>
      </div>
      <div class="col-md col p-0">
        <div class="row m-0">
          <div class="col-md-4 col-4 p-0" v-for="footer in footerList" :key="footer.id">
            <p class="footer-details-title">{{ footer.title }}</p>
            <div class="d-flex flex-column">
              <a href="#" v-for="item in footer.list" :key="item">{{ item }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    footerList: [
      {
        id: 0,
        title: 'Categories',
        list: [ 'Man', 'Woman', 'Sunglasses', 'Necklaces', 'Sandals', 'T-shirt', 'Parents', 'Kids', 'Jeans', 'Jackets', 'Blazer', 'Luggage' ]
      },
      {
        id: 1,
        title: 'Brand',
        list: [ 'Kenn Munk', 'Artistoys', 'SIMON & ME', 'WildeSkin', 'PooMS', 'minibot*', '2K', 'Jamungo', 'AIAIAI', 'Die Gestalten Verlag', 'Arkitip' ]
      },
      {
        id: 2,
        title: 'Connect with Us',
        list: [ 'Email Us', 'Facebook', 'Twitter', 'Youtube', 'Rdio', 'Foursquare', 'Newsletter', 'RSS' ]
      }
    ],
    footerImage: [
      {
        id: 0,
        source: 'https://image.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-brunette-hipster-young-woman-model-white-coat-jacket-big-black-hat_158538-2842.jpg'
      },
      {
        id: 1,
        source: 'https://image.freepik.com/free-photo/portrait-beautiful-happy-cute-sexy-brunette-woman-with-red-lips-wide-classic-pants-white-background_158538-9385.jpg'
      },
      {
        id: 2,
        source: 'https://image.freepik.com/free-photo/portrait-cheerful-fashion-smiling-hipster-girl-going-crazy-casual-colorful-yellow-summer-clothes-with-red-lips-isolated-white_158538-2624.jpg'
      },
      {
        id: 3,
        source: 'https://image.freepik.com/free-photo/beautiful-young-woman-pink-mini-dress-posing_155003-4030.jpg'
      },
      {
        id: 4,
        source: 'https://image.freepik.com/free-photo/beautiful-young-woman-pink-mini-dress-posing_155003-4031.jpg'
      },
      {
        id: 5,
        source: 'https://image.freepik.com/free-photo/portrait-beautiful-smiling-model-with-afro-curls-hairstyle-dressed-summer-hipster-clothes-trendy-funny-positive-woman_158538-15643.jpg'
      }
    ]
  })
}
</script>
