<template>
  <div class="header-filter">
    <div class="header-filter__search-container">
      <input
        class="header-filter__search"
        :value="search"
        @input="$emit('update:search', $event.target.value)"
        type="text"
        placeholder="Поиск"
      />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="header-filter__icon"
      >
        <path
          d="M18.677 19.607L12.962 13.891C10.4197 15.6984 6.91645 15.2563 4.90288 12.8739C2.88932 10.4915 3.03717 6.96358 5.24301 4.75799C7.44827 2.55144 10.9765 2.40295 13.3594 4.4164C15.7423 6.42986 16.1846 9.93344 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48501 4.99997C7.58871 4.99955 5.9527 6.33066 5.56749 8.18742C5.18227 10.0442 6.15372 11.9163 7.89369 12.6702C9.63365 13.4242 11.6639 12.8528 12.7553 11.302C13.8466 9.75126 13.6991 7.64731 12.402 6.26399L13.007 6.86399L12.325 6.18399L12.313 6.17199C11.5648 5.41917 10.5464 4.99712 9.48501 4.99997Z"
          fill="#BDBDBD"
        />
      </svg>
    </div>

    <button class="btn btn_default">
      Активные
    </button>

    <button class="btn btn_muted">
      Архивные
    </button>
  </div>
</template>

<script>
export default {
  name: "UiHeaderViewFilter",

  props: {
    search: String
  },

  emits: ["update:search"]
};
</script>

<style lang="scss" scoped>
.header-filter {
  margin-bottom: 20px;
  text-align: left;
}
.header-filter__search-container {
  display: inline-block;
  position: relative;
  margin-right: 40px;
}
.header-filter__search {
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;

  width: 358px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  background-color: inherit;
  padding: 0 25px 10px 0;

  &::placeholder {
    color: #c4c4c4;
  }

  &:focus::placeholder {
    color: transparent;
  }
}
.header-filter__icon {
  position: absolute;
  top: 6px;
  right: 0;
}
.btn:not(:last-child) {
  margin-right: 10px;
}
</style>
