<template>
  <div class="container">
    <section class="pb-8">
      <h1 class="text-xl pb-6">What is this?</h1>
      <p class="leading-loose">
        minimalytm is minimal cross-platform YouTube Music Player for Desktop.<br>
        On your macOS and Windows toolbar and you can easily and fastly access YouTube Music.
      </p>
    </section>
    <section class="pb-8">
      <h1 class="text-xl pb-6">Supported Features</h1>
      <p class="leading-loose">
        - Access to the YouTube Music in your machine's toolbar<br>
        - Multi Display support<br>
        - macOS Mojave Dark Mode Support<br>
        - macOS Hotkey (F7, F8, F9) and Touch Bar control support
      </p>
    </section>
    <section class="pb-8">
      <h1 class="text-xl pb-6">Creator</h1>
      <div class="flex justify-between items-stretch">
        <div class="flex-1 flex flex-col items-center justify-center">
          <img src="https://github.com/potato4d.png" width="96" height="96" class="border border-white rounded-full" alt="">
          <span class="font-bold inline-block text-lg mt-3">potato4d</span>
          <ul class="list-reset flex mt-4">
            <li>
              <a class="text-white" href="https://twitter.com/potato4d" target="_blank">
                <i class="fa fa-fw fa-twitter"></i>
              </a>
            </li>
            <li class="ml-2 mr-2">
              <a class="text-white" href="https://github.com/potato4d" target="_blank">
                <i class="fa fa-fw fa-github"></i>
              </a>
            </li>
            <li>
              <a class="text-white" href="https://potato4d.me" target="_blank">
                <i class="fa fa-fw fa-home"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="pb-8">
      <h1 class="text-xl pb-6">Donate</h1>
      <div class="flex justify-around p-4">
        <a href="https://paypal.me/potato4d" target="_blank" class="text-lg font-bold text-white flex justify-center items-center no-underline" style="width: 217px;height: 51px;background: #0070B9;">
          Donate with PayPal
        </a>
      </div>
    </section>
    <section class="pb-8">
      <h1 class="text-xl pb-6">Questions</h1>
      <div class="mx-4">
        <p class="leading-loose question">
          Q. Do I need a YouTube Music account to use this?
        </p>
        <p class="leading-loose answer">
          A. Exactly.<br>
        </p>
        <p class="leading-loose mx-4 pl-1 answer-detail">
          Please sign up for subscription to YouTube Music.
        </p>
        <p class="leading-loose mt-6 pt-1 question">
          Q. Are you planning to open source?
        </p>
        <p class="leading-loose">
          A. Yes.
        </p>
        <p class="leading-loose mx-4 pl-1 answer-detail">
          We would like to make it an open source project if enough donation to countinue development is gathered.
        </p>
      </div>
    </section>
    <section class="pb-8">
      <h1 class="text-xl pb-6">Special thanks</h1>
      <p class="leading-loose">
        - <a href="http://github.com/himanoa" class="text-white">himanoa</a>
      </p>
    </section>
    <footer class="pb-8">
      <p class="leading-loose text-xs font-bold text-center">
        &copy; 2019 potato4d
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>


<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
