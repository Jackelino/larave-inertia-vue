<template>
    <div
        id="spinner"
        class="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-fle"
        :class="{ show: show}"
    >
        <div
            class="spinner-border text-primary "
            style="width: 3rem; height: 3rem"
            role="status"
        >
            <span class="sr-only"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Spinner",
    data() {
        return {
            show: true,
        }
    },
    mounted(){
        this.$nextTick(() => {
            this.show=false;
    });
    },
    methods: {},
    computed: {
    },
};
</script>

<style></style>
