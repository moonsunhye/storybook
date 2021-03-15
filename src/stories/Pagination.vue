<template>
  <div class="common_paginate">
    <div class="page_nav_area"><span class="nav_edge nav_edge_prev nav_edge_off"><span class="point_arw_l"><em class="txt_hide">이전 보기</em></span></span>
    <div class="nums_area" v-for="number in perPage" :key="number"><span v-bind:class="[ {'page_num': true }, {'now_page': currentPage == number } ]">{{ number }}</span></div>
    <span class="nav_edge nav_edge_next nav_edge_off"><span class="point_arw_r"><em class="txt_hide">다음 보기</em></span></span></div>
    </div>
</template>

<script>
import './pagination.css'

export default {
  name: 'pagination',
  data: function () {
    return {
      // perPageSet: this.perPage,
      // currentPageSet: this.currentPage
    }
  },
  props: {
    perPage: {
      type: Number
    },
    currentPage: {
      type: Number
    }
  },
  mounted () { // dom 형성 후 불러옴

  },
  methods: {

  }
}
</script>
