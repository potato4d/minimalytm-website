<template>
  <div class="container">
    <section class="pb-8">
      <h1 class="text-xl pb-6">What is this?</h1>
      <p class="leading-loose">
        minimalytm is minimal cross-platform YouTube Music Player for Desktop.<br>
        On your macOS, Windows, Linux toolbar and you can easily and fastly access YouTube Music.
      </p>
    </section>
    <section class="pb-8">
      <h1 class="text-xl pb-6">Supported Features</h1>
      <p class="leading-loose">
        - Access to the YouTube Music in your machine's toolbar<br>
        - Multi Display support<br>
        - macOS Mojave Dark Mode Support<br>
        - macOS Hotkey (F8) and Touch Bar play/pause control support
      </p>
    </section>
    <section class="pb-8">
      <h1 class="text-xl pb-6">Screen shots</h1>
      <div class="flex justify-between items-stretch">
        <img src="https://placehold.it/230x140" alt="">
        <img src="https://placehold.it/230x140" alt="">
        <img src="https://placehold.it/230x140" alt="">
      </div>
    </section>
    <section class="pb-8">
      <h1 class="text-xl pb-6">Creators</h1>
      <div class="flex justify-between items-stretch">
        <div class="flex-1 flex flex-col items-center justify-center">
          <img src="https://potato4d.me/real.png" width="64" height="64" class="border-2 border-white rounded-full" alt="">
          <span class="font-bold inline-block text-lg mt-3">potato4d</span>
          <small class="inline-block mt-1 mb-1 leading-loose">creator</small>
          <ul class="list-reset flex mt-2">
            <li>
              <img src="https://placehold.it/44x44" width="22" alt="">
            </li>
            <li class="ml-2 mr-2">
              <img src="https://placehold.it/44x44" width="22" alt="">
            </li>
            <li>
              <img src="https://placehold.it/44x44" width="22" alt="">
            </li>
          </ul>
        </div>
        <div class="flex-1 flex flex-col items-center justify-center">
          <img src="https://github.com/himanoa.png" width="64" height="64" class="border-2 border-white rounded-full" alt="">
          <span class="font-bold inline-block text-lg mt-3">himanoa</span>
          <small class="inline-block mt-1 mb-1 leading-loose">co-creator</small>
          <ul class="list-reset flex mt-2">
            <li>
              <img src="https://placehold.it/44x44" width="22" alt="">
            </li>
            <li class="ml-2 mr-2">
              <img src="https://placehold.it/44x44" width="22" alt="">
            </li>
            <li>
              <img src="https://placehold.it/44x44" width="22" alt="">
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="pb-8">
      <h1 class="text-xl pb-6">Donate</h1>
      <div class="text-center p-8">
        <a href="https://www.patreon.com/potato4d" target="_blank">
          <img src="https://camo.githubusercontent.com/c11c9bdf1f6c2a1d80afb11859984a61f0fadfa6/68747470733a2f2f63352e70617472656f6e2e636f6d2f65787465726e616c2f6c6f676f2f6265636f6d655f615f706174726f6e5f627574746f6e4032782e706e67" width="217" alt="BECOME A PATRON">
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
    <footer class="pb-8">
      <p class="leading-loose text-xs font-bold text-center">
        &copy; 2019 potato4d and himanoa
      </p>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
