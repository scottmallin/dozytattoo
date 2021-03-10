<template>
  <section ref="formPopup" class="form-popup" :class="openedForm != 'none' ? 'form-popup--open' : ''">
    <button @click="closePopup()">&times;</button>
    <form action="post" v-if="openedForm == 'tattoo'">
      Tattoo
    </form>
    <form action="post" v-else-if="openedForm == 'mail'">
      Mailing list
    </form>
  </section>
</template>

<script>
export default {
 props: {
    openedForm: ''
  },
  methods: {
    closePopup() {
      this.$refs.formPopup.classList.remove('form-popup--open')
      this.$emit('closeForm')
    }
  }
}
</script>

<style lang="scss" scoped>
    .form-popup {
      position: absolute;
      bottom: 0;
      width: 100vw;
      height: 0;
      overflow: hidden;
      background-color: blue;
      transition: 0.4s height;

      &--open {
        height: 80vh;
      }
    }
</style>
