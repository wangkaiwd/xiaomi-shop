<template>
  <mui-layout class="mi-category">
    <mui-header class="header-placeholder"></mui-header>
    <mui-layout class="category-content">
      <mui-aside class="aside">
        <ul>
          <li
            v-for="(item,i) in categoryList"
            @click="onClickItem(i)"
            :key="item.id"
            :class="{active: activeIndex === i}"
          >
            {{item.title}}
          </li>
          <li>家用电器</li>
        </ul>
      </mui-aside>
      <mui-content class="content">
        content
      </mui-content>
    </mui-layout>
    <mui-footer>
      <footer-nav :footer-nav="footerNav"></footer-nav>
    </mui-footer>
  </mui-layout>
</template>

<script>
  import { MuiLayout, MuiAside, MuiContent, MuiFooter, MuiHeader } from 'components/layout';
  import FooterNav from 'components/footerNav/FooterNav';
  import { footerNav } from '@/config/navConfig';
  import MuiIcon from 'components/icon/MuiIcon';

  const array = [];
  for (let i = 0; i < 30; i++) {
    array.push({ id: i, title: `分类${i}` });
  }
  export default {
    name: 'MiCategory',
    components: { MuiLayout, MuiFooter, MuiContent, MuiAside, MuiHeader, FooterNav, MuiIcon },
    data () {
      return {
        footerNav,
        categoryList: array,
        activeIndex: 0,
        visible: false
      };
    },
    mounted () {
      this.visible = true;
    },
    methods: {
      onClickItem (i) {
        this.activeIndex = i;
      }
    },
    beforeDestroy () {
      this.visible = false;
    }
  };
</script>

<style lang="scss" scoped>
  .mi-category {
    background-color: $white;
    .header-placeholder {
      position: relative;
      line-height: 50px;
      height: 50px;
    }
    .category-content {
      height: calc(100vh - 50px - 52px);
    }
    .aside {
      height: 100%;
      overflow: auto;
      border-right: 1px solid #efefef;
      ul li {
        line-height: 45px;
        padding: 0 $space-sm;
        text-align: center;
        font-size: $font-md;
        color: $dark-text;
        transition: font-size 250ms;
        &.active {
          color: $main-color;
          font-size: $space-lg;
        }
      }
    }
    .content {
      height: 100%;
      overflow: auto;
    }
  }

</style>
