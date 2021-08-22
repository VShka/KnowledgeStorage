<template>
  <li class="category">
    <div class="category__header">
      <div class="category__content-position">
        <img
          src="../../assets/img/behance.png"
          :alt="`Категория - ${category.name} `"
          class="category__image"
        />

        <h3 class="category__title">
          {{ category.name }}
        </h3>
      </div>

      <div class="category__content-position">
        <div class="category__btn-more">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8Z"
              fill="#0066FF"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="category__body">
      <div class="category__content-position">
        <div class="category__stats">
          <div class="category__progress-container">
            <span class="category__progress-percent">
              87%
            </span>

            <div class="category__progress">
              <span class="category__progressbar"></span>
            </div>

            <p class="category__progress-title">
              Процесс обучения
            </p>
          </div>

          <div
            class="category__stats-item"
            v-for="stat in stats"
            :key="stat.title"
          >
            <p class="category__stats-content">
              {{ stat.total }}/{{ stat.residue }}
            </p>

            <p class="category__stats-title">
              {{ stat.title }}
            </p>
          </div>
        </div>
      </div>

      <div class="category__content-position">
        <label class="checkbox_default">
          <input type="checkbox" v-model="checked" />
          <span class="checkbox-switch"></span>
          <span class="checkbox__text">
            {{ checked ? "Открепить" : "Закрепить" }}
          </span>
        </label>

        <button class="btn btn_outlined">Редактировать</button>
      </div>
    </div>
  </li>
</template>

<script>
import { ref } from "vue";
export default {
  name: "CategoryCard",

  props: {
    category: {
      type: Object,
      required: true
    }
  },

  setup() {
    const stats = [
      {
        title: "Статей прочитано",
        total: 4,
        residue: 21
      },
      {
        title: "Видео просмотрено",
        total: 6,
        residue: 12
      },
      {
        title: "Книг прочитано",
        total: 1,
        residue: 3
      }
    ];
    const checked = ref(false);

    return {
      stats,
      checked
    };
  }
};
</script>

<style scoped>
.category__progress-container {
  margin-right: 120px;
}
.category__progress-title {
  margin-top: 10px;
  font-size: 18px;
  line-height: 22px;
  color: #0066ff;
}
.category__progress {
  width: 150px;
  height: 10px;
  background-color: rgba(0, 102, 255, 0.12);
}
.category__progressbar {
  display: inherit;
  width: 120px;
  height: 10px;
  background-color: #0066ff;
}
.category__stats {
  display: flex;
  align-items: center;
}
.category__stats-item {
  color: #9c9c9c;
}
.category__stats-item:not(:last-child) {
  margin-right: 100px;
}
.category__stats-content {
  text-align: left;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 6px;
}
.category__stats-title {
  font-size: 18px;
  line-height: 26px;
}
.category {
  width: 100%;
  height: 258px;
  background-color: #fff;
  border-radius: 11px;
}
.category__header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e3e3e3;
  padding: 20px;
}
.category__body {
  display: flex;
  justify-content: space-between;
  padding: 46px 20px;
}
.category__content-position {
  display: flex;
  align-items: center;
}
.category__title {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
}
.category__image {
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  margin-right: 20px;
}
.category__btn-more {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(53, 94, 154, 0.1);
  border-radius: 3px;
  cursor: pointer;
}
</style>
