<template>
  <div class="container mt-5">
    <div class="row">

      <!-- LEFT -->
      <div class="col-sm-4">

        <!-- CHUYÊN MỤC -->
        <h3 class="text-info mt-2">Chuyên mục Michos</h3>
        <ul class="list-group">
          <li v-for="c in categories" :key="c.name"
              class="list-group-item d-flex justify-content-between">
            <a class="nav-link">{{ c.name }}</a>
            <span class="badge bg-primary">{{ c.count }}</span>
          </li>
        </ul>

        <!-- NHÂN VẬT -->
        <div class="card mt-3 bg-light">
          <h5 class="text-center text-info mt-2">Nhân vật sắp ra mắt</h5>

          <div class="list-group">
            <div v-for="c in characters" :key="c.name"
                 class="list-group-item d-flex gap-3">

              <img :src="c.img" width="80">

              <div>
                <h6>{{ c.name }}</h6>
                <p>{{ c.desc }}</p>
              </div>

            </div>
          </div>
        </div>

      </div>

      <!-- RIGHT -->
      <div class="col-sm-8">
        <h2 class="text-info mb-3">Tất cả bài viết</h2>

        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div v-for="p in posts" :key="p.id" class="col">

            <div class="card bg-light h-100">
              <h5 class="text-center mt-2">{{ p.title }}</h5>

              <img :src="p.img" class="card-img-top">

              <div class="card-body">
                <p>{{ p.content }}</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
const categories = [
  { name: "FlyMe2theMoon", count: 5 },
  { name: "Zombiegal Kawaii", count: 10 },
  { name: "Guns Girl Z", count: 15 },
  { name: "Honkai Impact 3", count: 20 },
  { name: "Tears of Themis", count: 25 },
  { name: "Genshin Impact", count: 30 },
  { name: "Honkai: Star Rail", count: 35 },
  { name: "Zenless Zone Zero", count: 40 }
]

const characters = [
  {
    name: "Varka",
    img: "/images/varka.jpg",
    desc: "Đại đội trưởng mạnh nhất Mondstadt"
  },
  {
    name: "Sparxie",
    img: "/images/sparxie.jpg",
    desc: "Streamer thiên hà vui nhộn"
  },
  {
    name: "Aria",
    img: "/images/aria.jpg",
    desc: "Ca sĩ nhưng nhảy cực khỏe"
  },
  {
    name: "Kirara",
    img: "/images/kirara.jpg",
    desc: "Shipper mèo đáng yêu"
  },
  {
    name: "Hutao",
    img: "/images/hutao.webp",
    desc: "Đường chủ Vãng Sinh Đường"
  }
]

const posts = [
  {
    id: 1,
    title: "Đại đội trưởng Varka",
    img: "/images/varka2.jpg",
    content: "Nhân vật hệ Phong cực mạnh..."
  },
  {
    id: 2,
    title: "Quý cô Sparxie",
    img: "/images/sparxie2.webp",
    content: "Streamer nổi tiếng vũ trụ..."
  },
  {
    id: 3,
    title: "Cô nàng Aria",
    img: "/images/arai2.webp",
    content: "Ca sĩ bí ẩn..."
  },
  {
    id: 4,
    title: "Kirara",
    img: "/images/kirara2.jpg",
    content: "Shipper đáng yêu"
  }
]
</script>