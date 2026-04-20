<template>
  <div class="bg-dark text-light" style="font-family: 'Times New Roman'; font-size: 13px;">

    <!-- NAVBAR -->
    <!-- <nav class="navbar navbar-expand-sm bg-light navbar-light sticky-top mb-3">
      <div class="container">

        <a class="navbar-brand">
          <img :src="logo" style="width:50px;" />
        </a>

        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav me-auto">
            <li class="nav-item"><a class="nav-link" href="#">Trang chủ</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Giới thiệu nhân vật mới</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Sự kiện</a></li>
          </ul>
        </div>

      </div>
    </nav> -->

    <!-- MAIN -->
    <div class="container mt-3">
      <div class="row">

        <!-- LEFT -->
        <div class="col-sm-8">

          <h5 class="text-info text-center fw-bold mb-3 fs-1">
            Cô nàng robot Aria
          </h5>

          <!-- CAROUSEL -->
          <div id="carouselExample" class="carousel slide mb-4">

            <div class="carousel-inner">

              <div class="carousel-item active">
                <img :src="aria2" class="d-block w-100 carousel-img" />
              </div>

              <div class="carousel-item">
                <img :src="hutao" class="d-block w-100 carousel-img" />
              </div>

              <div class="carousel-item">
                <img :src="sparxie2" class="d-block w-100 carousel-img" />
              </div>

            </div>

            <button class="carousel-control-prev" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>

            <button class="carousel-control-next" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>

          </div>

          <!-- TABS -->
          <ul class="nav nav-tabs">
            <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#tab1">CHỈ SỐ</a></li>
            <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#tab2">KỸ NĂNG</a></li>
            <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#tab3">DODGE</a></li>
            <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#tab4">HỖ TRỢ</a></li>
          </ul>

          <div class="tab-content">

            <!-- CHỈ SỐ -->
            <div class="tab-pane fade show active p-3" id="tab1">
              <h4>Chỉ số nhân vật</h4>

              <table class="table table-dark text-center">
                <tr>
                  <th>Cấp</th><th>Mức</th><th>HP</th><th>ATK</th><th>DEF</th>
                </tr>

                <tr>
                  <td>0</td><td>1/10</td><td>623</td><td>124</td><td>50</td>
                </tr>

                <tr>
                  <td>1</td><td>10/20</td><td>1811</td><td>235</td><td>144</td>
                </tr>
              </table>
            </div>

            <!-- KỸ NĂNG -->
            <div class="tab-pane fade p-3" id="tab2">
              <h4>Kỹ năng</h4>

              <div class="bg-warning text-dark text-center fw-bold p-2">Tấn công cơ bản</div>

              <table class="table table-dark">
                <tr>
                  <td>Giai điệu ngọt ngào</td>
                  <td>Tấn công cơ bản</td>
                </tr>
                <tr>
                  <td colspan="2">
                    Tung 4 đòn gây sát thương Ether
                  </td>
                </tr>
              </table>
            </div>

            <!-- DODGE -->
            <div class="tab-pane fade p-3" id="tab3">
              <h4>Dodge</h4>

              <table class="table table-dark">
                <tr>
                  <td>Né tránh hoàn hảo</td>
                  <td>Dodge</td>
                </tr>
                <tr>
                  <td colspan="2">
                    Tránh đòn và phản công nhanh
                  </td>
                </tr>
              </table>
            </div>

            <!-- SUPPORT -->
            <div class="tab-pane fade p-3" id="tab4">
              <h4>Hỗ trợ</h4>

              <table class="table table-dark">
                <tr>
                  <td>Hỗ trợ nhanh</td>
                  <td>Support</td>
                </tr>
                <tr>
                  <td colspan="2">
                    Hỗ trợ đồng đội trong chiến đấu
                  </td>
                </tr>
              </table>
            </div>

          </div>
        </div>

        <!-- RIGHT -->
        <div class="col-sm-4">

          <!-- <h5>Bình luận bài viết</h5>

          <textarea class="form-control mb-2" rows="3"></textarea>
          <button class="btn btn-success btn-sm mb-3">Gửi bình luận</button>

          <h5>Danh sách bình luận</h5>
          <ul>
            <li><b>Bình An:</b> Rất hay</li>
            <li><b>Bình An:</b> Cảm ơn</li>
          </ul> -->


          <h5>Bình luận bài viết</h5>

<textarea
  class="form-control mb-2"
  rows="3"
  v-model="commentText"
  placeholder="Nhập bình luận..."
></textarea>

<button class="btn btn-success btn-sm mb-3" @click="submitComment">
  Gửi bình luận
</button>

<h5>Danh sách bình luận</h5>
<ul>
  <li v-for="(c, index) in comments" :key="index">
    <b>{{ c.name }}:</b> {{ c.text }}
  </li>
</ul>


          <hr>

          <div class="card bg-light text-dark">
            <div class="p-2 text-center fw-bold text-info">
              CÁC NHÂN VẬT LIÊN QUAN
            </div>

            <div class="list-group list-hover">

              <div class="list-group-item d-flex gap-2" v-for="c in related" :key="c.name">
                <img :src="c.img" width="70" height="70" class="rounded" />
                <div>
                  <b>{{ c.name }}</b>
                  <p class="mb-0 small">{{ c.desc }}</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import varka from "../assets/images/varka.jpg"
import sparxie from "../assets/images/sparxie.jpg"
import aria from "../assets/images/aria.jpg"
import kirara from "../assets/images/kirara.jpg"
import hutao from "../assets/images/hutao.webp"
import aria2 from "../assets/images/arai2.webp"
import sparxie2 from "../assets/images/sparxie2.webp"

const logo = "/src/assets/images/logo.webp"

const related = [
  { name: "Varka", img: varka, desc: "Đội trưởng Tây Phong" },
  { name: "Sparxie", img: sparxie, desc: "Streamer thiên hà" },
  { name: "Aria", img: aria, desc: "Ca sĩ robot" },
  { name: "Kirara", img: kirara, desc: "Shipper Inazuma" },
  { name: "Hu Tao", img: hutao, desc: "Đường chủ Vãng Sinh Đường" }
]

import { ref } from "vue"

const commentText = ref("")

const comments = ref([
  { name: "Bình An", text: "Rất hay" },
  { name: "Bình An", text: "Cảm ơn" }
])

function submitComment() {
  if (commentText.value.trim() === "") return

  comments.value.push({
    name: "Bạn",
    text: commentText.value
  })

  commentText.value = ""
}

</script>

<style>
.carousel-img {
  height: 450px;
  object-fit: cover;
}

.list-hover .list-group-item:hover {
  background: cadetblue;
}
</style>