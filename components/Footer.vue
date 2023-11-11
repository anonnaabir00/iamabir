<template>
        <div class="sm:block md:flex justify-between m-auto w-4/6 p-6">
            <p class="text-sm my-auto sm:text-center md:text-left">Copyright {{ currentyear }} Asaduzzaman Abir</p>
            <h2 class="text-2xl font-bold text-center my-auto sm:mt-3 md:mt-0 sm:mb-3 md:mb-0">Asaduzzaman Abir</h2>
            <p class="text-sm my-auto sm:text-center md:text-left">All right reserved.</p>     
        </div>
</template>

<script>

export default {
    name: 'Footer',
    data() {
        return {
            currentyear: new Date().getFullYear() 
        }
    },
}


</script>