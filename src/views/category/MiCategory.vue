<template>
  <mui-layout class="mi-category">
    <mui-header class="header-placeholder"></mui-header>
    <mui-layout class="category-content">
      <mui-aside class="aside">
        <ul>
          <li
            v-for="(item,i) in leftMenu"
            @click="onClickItem(i)"
            :key="item.id"
            :class="{active: activeIndex === i}"
          >
            {{item.title}}
          </li>
        </ul>
      </mui-aside>
      <mui-content class="content">
        <category-item
          v-for="item in categoryItem"
          :key="item.id"
          :subItems="item.subItem"
        >
        </category-item>
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
  import { fetchCategoryList } from 'api/index';
  import CategoryItem from './CategoryItem';

  export default {
    name: 'MiCategory',
    components: { MuiLayout, MuiFooter, MuiContent, MuiAside, MuiHeader, FooterNav, MuiIcon, CategoryItem },
    data () {
      return {
        footerNav,
        activeIndex: 0,
        visible: false,
        leftMenu: [],
        categoryItem: []
      };
    },
    mounted () {
      fetchCategoryList().then(
        res => {
          this.leftMenu = res.data.leftMenu;
          this.categoryItem = res.data.categoryItem;
        }
      );
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
        width: 70px;
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
