<template>
  <div>
    <!-- <nuxt /> -->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          Redirecting... Click <a href="https://zoom.us/j/96024579961?pwd=WXhyUVM0NmlOdmY5ZEt5dmN3VzMzUT09">here</a> to join the meeting.
        </div>
      </div>
    </div>
    Redirecting...
  </div>
</template>

<script>
export default {
  mounted() {
    window.location.href = 'https://zoom.us/j/96024579961?pwd=WXhyUVM0NmlOdmY5ZEt5dmN3VzMzUT09'
  },
}
</script>

<style>
</style>
