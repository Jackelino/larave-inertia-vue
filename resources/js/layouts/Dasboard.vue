<template>
    <div class="container-xxl position-relative bg-white d-flex p-0">
        <!-- Spinner Start -->
        <Spinner/>
        <!-- Spinner End -->
        <!-- Sidebar Start -->
        <Sidebar />
        <!-- Sidebar End -->
        <!-- Content Start -->
        <main class="content">
            <!-- Navbar Start -->
            <Header/>
            <!-- Navbar End -->
            <section>
                   <slot></slot> 
            </section>
            <!-- Footer Start -->
            <Footer />
            <!-- Footer End -->
        </main>
        <!-- Content End -->
        
    </div>
</template>

<script>
import Footer from "../components/custom/Footer.vue";
import Sidebar from "../components/custom/Sidebar.vue";
import Header from "../components/custom/Header.vue";
import Spinner from "../components/custom/Spinner.vue";
import { mapGetters, mapActions } from "vuex";
export default {
    name: "Dasboard",
    components: {
        Footer,
        Sidebar,
        Header,
        Spinner,
    },
    data() {
        return {
            direction: "",
        };
    },
};
</script>

<style></style>
