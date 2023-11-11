<template>
    <div>

    <div class="sm:hidden md:grid place-items-center">
    <div class="w-4/6 flex justify-between bg-white p-6">
        <div>
            <!-- <a href="/"><img class="w-42 h-9" src="https://codember.s3.us-west-2.amazonaws.com/themespell/wp-content/uploads/2021/06/themespell_new-300x51.png" alt="themespell"></a>-->
            <a href="/"><h2 class="text-2xl font-bold mt-1">Asaduzzaman Abir</h2></a>
        </div>
        <div>
            <ul class="flex justify-between text-base font-light space-x-6">
                <li class="p-2"><a href="#about">About Me</a></li>
                <li class="p-2"><a href="#experience">Experience</a></li>
                <li class="p-2"><a href="#services">Services</a></li>
                <li class="p-2"><a href="#portfolio">Portfolio</a></li>
                <li class="p-2"><a href="#testimonial">Testimonial</a></li>
                <li class="p-2"><a target="_blank" href="https://blog.iamabir.com">Blog</a></li>
                <li class="p-2"><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div class="mt-2">
            <a class="brand-color border rounded-lg text-white font-light p-3 pl-8 pr-8" target="_blank" href="mailto:ashaduzzaman00@gmail.com">Hire Me</a>
        </div>
    </div>
</div>


    <!-- Mobile Header -->

    <div class="sm:grid md:hidden grid-cols-2 items-center p-6">
    <div><a href="/">
        <h2 class="text-2xl font-bold mt-1">Asaduzzaman Abir</h2>
    </a></div>

    <div>
        <div class="flex justify-end items-center">
            <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
        <MenuItem v-slot="{ active }">
            <a href="/private-tours" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">About Me</a>
          </MenuItem>
        <MenuItem v-slot="{ active }">
            <a href="#services" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Testimonial</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#cars" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Services</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#locations" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Blog</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a href="#contact" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Contact</a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>

        </div>
    </div>
  </div>


</div>
</template>


<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

</script>