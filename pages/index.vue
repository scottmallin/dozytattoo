<template>
  <div class="grid-container">
    <main>
      <div class="content">
        <h1 class="title">
          dozytattoo
        </h1>

        <h2>
          Tattoo artist at Smokey's Ink in Barnsley.
        </h2>

        <button class="button" @click="openTattooForm()">Get a tattoo</button>

        <button class="button" @click="openMailForm()">Join the mailing list</button>
      </div>
    </main>
    <div class="picture"></div>
    <FormPopup @closeForm="closeForm" :openedForm=openedForm />
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return { openedForm: 'none' }
  },
  methods: {
    openTattooForm () {
      this.openedForm = 'tattoo'
    },
    openMailForm () {
      this.openedForm = 'mail'
    },
    closeForm() {
      this.openedForm = 'none'
    }
  }
}
</script>
