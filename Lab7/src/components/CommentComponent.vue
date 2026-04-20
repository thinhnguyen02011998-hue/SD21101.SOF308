<template>
  <div class="col-sm-4 m-5">
    <h2>Bình luận bài viết</h2>
    <div class="card mb-3">
      <img src="https://picsum.photos/400/200" class="card-img-top" alt="Hình ảnh" />
      <div class="card-body">
        <h3 class="card-title">8 loại rau củ quả giàu canxi</h3>
        <p class="card-text">
          Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, 
          trong đó bổ sung qua đường ăn uống là cách tốt nhất...
        </p>
      </div>
    </div>

    <!-- Form gửi bình luận -->
    <form @submit.prevent="submitComment">
      <div class="mt-3 mb-2">
        <textarea 
          class="form-control" 
          rows="3" 
          v-model="commentText" 
          @keyup.ctrl.enter="submitComment"
          placeholder="Nhập bình luận của bạn"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-success">Gửi bình luận</button>

        <hr>
    </form>

    <!-- Hiển thị danh sách bình luận -->
    <div v-if="comments.length" class="mt-4">
      <h5>Danh sách các bình luận:</h5>
      <ul class="list-unstyled">
        <li v-for="(comment, index) in comments" :key="index" class="border-bottom py-2">
          <p><strong>{{ comment.name }}</strong>: {{ comment.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Nhận tên người dùng từ component cha
const props = defineProps(['username']);

const commentText = ref('');
// Mảng chứa các bình luận đã gửi
const comments = ref([]);

// Xử lý gửi bình luận
function submitComment() {
  if (commentText.value.trim()) {
    // Thêm bình luận mới vào mảng
    comments.value.push({
      name: props.username, // Sử dụng tên từ props
      text: commentText.value
    });
    // Xóa dữ liệu trong form sau khi gửi
    commentText.value = '';
  }
}
</script>