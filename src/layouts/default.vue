<template>
  <div id="__content">
    <div class="text-center flex flex-col items-center w-screen h-screen first-view">
      <img src="~/assets/icon.png" width="96" alt="">
      <h1 class="pt-2 pb-2">
        minimalytm
      </h1>
      <div class="w-32 border-red border-b-4 inline-block"></div>
      <img src="~/assets/preview.png" class="mt-12 shadow" width="720" alt="">
      <div>
        <button type="button" class="mt-8 mb-8 w-48 text-sm h-12 border border-white text-white inline-flex justify-center items-center">
          Download macOS dmg
        </button>
      </div>
    </div>
    <nuxt id="__nuxt-content" />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html,
body,
#__nuxt,
#__layout,
#__content {
  width: 100vw;
  min-height: 100vh;
  color: #fff;
  background: #111;
}

#__nuxt-content {
  max-width: 750px;
  padding: 0 15px 50px;
  margin: 0 auto;
}

.first-view {
  padding-top: 50px;
  background: linear-gradient(#222, #111);
}
</style>
