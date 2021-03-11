<template>
  <div>
    <section ref="formPopup" class="form-popup" :class="openedForm != 'none' ? 'form-popup--open' : ''">
      <div class="form-popup__container">
        <button @click="closePopup()">&times;</button>
        <TattooForm v-if="openedForm == 'tattoo'" />
        <form action="post" v-else-if="openedForm == 'mail'">
          Mailing list
        </form>
      </div>
    </section>
    <div class="form-popup__bg" @click=closePopup()></div>
  </div>
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
    @import '~/assets/scss/variables';
    
    .form-popup {
      position: absolute;
      bottom: 0;
      width: 100vw;
      height: 0;
      overflow: hidden;
      background-color: $primary;
      transition: 0.4s height;
      z-index: 10;

      &__container {
        padding: $padding;
      }

      &--open {
        height: 80vh;

        + .form-popup__bg {
          position: absolute;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 9;
        }
      }
    }
</style>
