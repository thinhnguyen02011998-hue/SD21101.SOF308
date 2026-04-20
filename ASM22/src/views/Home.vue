<template>
  <div class="bg-dark" style="font-family: 'Times New Roman'; font-size: 13px;">

    <!-- MAIN -->
    <div class="container mt-5">
      <div class="row">

        <!-- LEFT -->
        <div class="col-sm-4">

          <h3 class="text-info mt-2">Chuyên mục Michos</h3>

          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in categories"
              :key="item.name">
              <a class="nav-link">{{ item.name }}</a>
              <span class="badge bg-primary rounded-pill">{{ item.count }}</span>
            </li>
          </ul>

          <!-- CHARACTERS -->
          <div class="card mt-3 bg-light">

            <div class="container mt-3 mb-2">
              <h5 class="text-info text-center">Nhân vật sắp ra mắt</h5>
            </div>

            <div class="list-group list-hover">

              <div class="list-group-item d-flex align-items-center gap-3" v-for="c in characters" :key="c.name">
                <img :src="c.img" width="80" height="80" class="rounded" />

                <div>
                  <h5 class="mb-1">{{ c.name }}</h5>
                  <p class="mb-1">{{ c.desc }}</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- RIGHT (FIXED FULL DATA LIKE HTML) -->
        <div class="col-sm-8">

          <h3 class="text-info mb-3">Tất cả bài viết</h3>

          <div class="row row-cols-1 row-cols-md-2 g-4">

            <div class="col" v-for="post in posts" :key="post.title">

              <div class="card bg-light h-100">

                <div class="container">
                  <h5 class="card-title text-center mt-2">
                    {{ post.title }}
                  </h5>
                </div>

                <img :src="post.img" class="card-img-top" />

                <div class="card-body">
                  <p class="card-text">
                    {{ post.content }}
                  </p>
                </div>

              </div>

            </div>

          </div>

          <!-- PAGINATION (GIỐNG INDEX HTML) -->
          <nav class="mt-3">
            <ul class="pagination justify-content-center">
              <li class="page-item"><a class="page-link">←</a></li>
              <li class="page-item"><a class="page-link">1</a></li>
              <li class="page-item"><a class="page-link">2</a></li>
              <li class="page-item"><a class="page-link">3</a></li>
              <li class="page-item"><a class="page-link">→</a></li>
            </ul>
          </nav>

        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";

import sparxie from "../assets/images/sparxie.jpg"
import varka from "../assets/images/varka.jpg"
import aria from "../assets/images/aria.jpg"
import kirara from "../assets/images/kirara.jpg"

import varka2 from "../assets/images/varka2.jpg"
import sparxie2 from "../assets/images/sparxie2.webp"
import aria2 from "../assets/images/arai2.webp"
import kirara2 from "../assets/images/kirara2.jpg"
import hutao from "../assets/images/hutao.webp"


/* LEFT */
const categories = ref([
  { name: "FlyMe2theMoon", count: 5 },
  { name: "Zombiegal Kawaii", count: 10 },
  { name: "Guns Girl Z", count: 15 },
  { name: "Honkai Impact 3", count: 20 },
  { name: "Tears of Themis", count: 25 },
  { name: "Genshin Impact", count: 30 },
  { name: "Honkai: Star Rail", count: 35 },
  { name: "Zenless Zone Zero", count: 40 },
]);

const characters = ref([
  {
    name: "Đại đội trưởng Varka",
    img: varka,
    desc: "Dưới danh nghĩa Kỵ Sĩ Bắc Phong hùng mạnh nhất, vung hai đòn chém liên tiếp cực mạnh về phía trước, gây hai lần Sát Thương Nguyên Tố Phong."
  },
  {
    name: "Quý cô Sparxie",
    img: sparxie,
    desc: "Chào bạn, Cầu thủ bóng chày thiên hà, chào mừng bạn đến với buổi phát trực tiếp! Mình là Sparxie, người bạn tốt của bạn đây~"
  },
  {
    name: "Cô nàng Aria",
    img: aria,
    desc: "Cô ấy là giọng ca chính, nhưng cô ấy có thể nhảy không ngừng nghỉ trong thời gian dài..."
  },
  {
    name: "Shipper Kirara",
    img: kirara,
    desc: "Kirara (tiếng Nhật: 綺良々 Kirara) là một nhân vật Dendro có thể chơi được trong Genshin Impact."
  },
  {
    name: "Đường chủ Hutao",
    img: hutao,
    desc: "Cô có thiên phú thơ văn và luôn khoác lên mình vẻ ngoài khôi hài, lập dị. Tuy vậy, đằng sau vẻ ngoài ấy là trọng trách của một đường chủ thứ 77 của Vãng Sinh Đường"
  }
]);

/* RIGHT (QUAN TRỌNG: KHÔNG ĐỂ [] RỖNG) */
const posts = ref([
  {
    title: "Đại đội trưởng Varka",
    img: varka2,
    content: "Varka là nhân vật hệ Phong..."
  },
  {
    title: "Quý cô Sparxie",
    img: sparxie2,
    content: "Sparxie là streamer..."
  },
  {
    title: "Cô nàng Aria",
    img: aria2,
    content: "Aria là ca sĩ..."
  },
  {
    title: "Kirara",
    img: kirara2,
    content: "Kirara là nhân vật hệ Thảo..."
  }
]);
</script>

<style>
.list-hover .list-group-item:hover {
  background-color: cadetblue;
}
</style>