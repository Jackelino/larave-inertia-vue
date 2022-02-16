<template>
    <div class="sidebar pe-2 pb-3">
        <nav class="navbar bg-uaemex navbar-light">
            <a href="index.html" class="navbar-brand mx-4 mb-3">
                <h3 class="text-primary">
                    <i class="fa fa-hashtag me-2"></i>DASHMIN
                </h3>
            </a>

            <ul class="navbar-nav">
                <li class="nav-item">
                    <a
                        href="index.html"
                        class="nav-item nav-link active"
                    >
                        <i class="bi bi-house-door me-2"></i>Dashboard</a
                    >
                </li>
                <li class="nav-item">
                    <a
                        class="nav-item nav-link"
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        <i class="bi bi-house-door me-2"></i>Dashboar
                    </a>
                    <div class="collapse" id="collapseExample">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a href="">sd</a></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="widget.html" class="nav-item nav-link"
                        ><i class="fa fa-th me-2"></i>Widgets</a
                    >
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
import VerticalNav from "../custom/VerticalNav.vue";
export default {
    name: "Sidebar",
    components: {
        VerticalNav,
    },
};
</script>
