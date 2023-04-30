// import { createApp } from "vue";
Vue.component("link-cascadia", {
  template: `
  <a class="text-do-blue-light font-cascadia font-semibold flex items-center hover:text-blue-700" href="/">
    <slot></slot>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-4 h-4"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M8.25 4.5l7.5 7.5-7.5 7.5"
  />
</svg>
          </a>
  `,
});

Vue.component("panel-blog", {
  template: `
            <div class="bg-white shadow-lg rounded-lg hover:shadow-xl">
            <div>
              <slot name="image"></slot>
            </div>
            <div class="p-6">
              <h3 class="uppercase text-sky-500 tracking-widest">
              <slot name="title"></slot>
              </h3>
              <p class="font-medium text-base my-4">
              <slot name="parrafo"></slot>
              </p>
              <div class="flex text-sm font-light text-gray-500 gap-x-5">
                <p class="w-2/3">
                <slot name="date"></slot>
                </p>
                <div class="flex w-1/3 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <slot name="visits"></slot>
                </div>
              </div>
            </div>
          </div>
          `,
});

new Vue({
  el: "#app",
});

// <img class="rounded-t-lg"
//   src="https://raw.githubusercontent.com/edteamlat/curso-tailwind-css-desde-cero/main/images/how-to-install-mysql-tutorial-image.jpg"
//   alt="">
// <h3 class="uppercase text-sky-500 tracking-widest"></h3>;
//  <p class="font-medium text-base my-4">How to install MySQl on Ubuntu 20.04</p>
//                 <p class="w-1/2">July 30, 2023</p>
