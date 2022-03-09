<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span style="color: white;">MASTERLINE LOGISTICS &copy; {{ new Date().getFullYear() }} <a href="" target="_blank" rel="nofollow"></a></span>

    </footer>
</template>

<script>
export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    }
}
</script>
