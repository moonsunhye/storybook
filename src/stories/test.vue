<template>
<div id="danawa_wrap" :class="classes" :style="style">
  <div class="container--sub">
  <ul class="news__list">
    <li class="news__item-sub">
      <a href="">
        <div class="badge__today--open">추천</div>
        <div class="news__img"><img src="//img.danawa.com/new/noData/img/nolmg_320x240.jpg" alt="alt값 비워주세요"></div>
        <div class="news__contents">
          <div class="news__title"><strong class="category">[일반뉴스]</strong>{{itemTitle}}</div>
          <div class="news__txt">삶의 새로운 패러다임, “뉴 라이프 플랫폼”을 만들어가는 주식 회사 앱코(www.abko.co.kr 대표이사오광근)가 카카오 메이삶의 새로운 패러다임, “뉴 라이프 플랫폼”을 만들어가는 주식 회사 앱코(www.abko.co.kr 대표이사오광근)가 카카오 메이</div>
          <ul class="info__list">
            <li class="info__item date"><span class="blind">작성일</span>2020.09.15.</li>
            <li class="info__item view"><span class="blind">조회수</span>9,999</li>
            <li class="info__item comment"><span class="blind">댓글수</span>10</li>
          </ul>
        </div>
      </a>
    </li>
      <li class="news__item-sub">
        <a href="">
          <div class="news__img"><img src="//img.danawa.com/img/brandlog/@smp_344x258.jpg?fitting=Large|320:240&amp;crop=320:240;*,*" alt="alt값 비워주세요"></div>
          <div class="news__contents">
            <div class="news__title"><strong class="category">[신상품 뉴스]</strong>짧은제목</div>
            <div class="news__txt">삶의 새로운 패러다임, “뉴 라이프 플랫폼”을 만들어가는 주식 회사 앱코(www.abko.co.kr 대표이사오광근)가</div>
            <ul class="info__list">
              <li class="info__item date"><span class="blind">작성일</span>2020.09.15.</li>
              <li class="info__item view"><span class="blind">조회수</span>20</li>
            </ul>
          </div>
        </a>
      </li>
      <li class="news__item-sub">
        <a href="">
          <div class="news__img"><img src="//img.danawa.com/img/brandlog/@smp_344x258.jpg?fitting=Large|320:240&amp;crop=320:240;*,*" alt="alt값 비워주세요"></div>
          <div class="news__contents">
            <div class="news__title"><strong class="category">[신상품 뉴스]</strong>짧은제목</div>
            <div class="news__txt">삶의 새로운 패러다임, “뉴 라이프 플랫폼”을 만들어가는 주식 회사 앱코(www.abko.co.kr 대표이사오광근)가</div>
            <ul class="info__list">
              <li class="info__item date"><span class="blind">작성일</span>2020.09.15.</li>
              <li class="info__item view"><span class="blind">조회수</span>20</li>
            </ul>
          </div>
        </a>
      </li>
      <li class="news__item-sub">
        <a href="">
          <div class="news__img"><img src="//img.danawa.com/img/brandlog/@smp_344x258.jpg?fitting=Large|320:240&amp;crop=320:240;*,*" alt="alt값 비워주세요"></div>
          <div class="news__contents">
            <div class="news__title"><strong class="category">[신상품 뉴스]</strong>짧은제목</div>
            <div class="news__txt">삶의 새로운 패러다임, “뉴 라이프 플랫폼”을 만들어가는 주식 회사 앱코(www.abko.co.kr 대표이사오광근)가</div>
            <ul class="info__list">
              <li class="info__item date"><span class="blind">작성일</span>2020.09.15.</li>
              <li class="info__item view"><span class="blind">조회수</span>20</li>
            </ul>
          </div>
        </a>
      </li>
  </ul>
  </div>
</div>
</template>

<script>

export default {
  name: 'my-test',

  props: {
    itemTitle: {
      type: String,
      required: true,
    },
    pageType: {
      type: String,
      default: 'type1',
      validator: function (value) {
        return ['type1', 'type3'].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      return {
        [`${this.pageType}`]: true,
      };
    },
    style() {
      return {
        width:'1100px',
      };
    },
  },
  
};
</script>
