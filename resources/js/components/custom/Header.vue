<template>
   <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
                    <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
                </a>
                <a href="#" class="sidebar-toggler flex-shrink-0">
                    <i class="bi bi-list "></i>
                </a>
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control border-0" type="search" placeholder="Search">
                </form>
                <div class="navbar-nav align-items-center ms-auto">
                    <!--Message-->
                    <div class="nav-item dropdown" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Mensajes">
                        <a href="#" class="nav-link" data-bs-toggle="dropdown">
                            <i class="bi bi-chat position-relative">
                                <span class="position-absolute top-0 start-50  border border-light rounded-circle bg-danger p-2"></span> 
                            </i>
                            
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small class="text-muted">15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item text-center">See all message</a>
                        </div>
                    </div>
                    <!--Notificatin-->
                    <div class="nav-item dropdown" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Notificaciones">
                        <a href="#" class="nav-link" data-bs-toggle="dropdown">
                            <i class="bi bi-bell position-relative">
                                <span class="position-absolute top-0 start-50  border border-light rounded-circle bg-danger p-2"></span> 
                            </i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end shadow">
                            <h6 class="dropdown-header">Notificaciones</h6>
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Profile updatedfbggfgfgfgf fgfg</h6>
                                <small class="text-muted">15 minutes ago</small>
                            </a>
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">New user added</h6>
                                <small class="text-muted">15 minutes ago</small>
                            </a>
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Password changed</h6>
                                <small class="text-muted">15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class=" align-items-center justify-content-center">See all notifications</a>
                        </div>
                    </div>
                    <!--Profile-->
                    <div class="nav-item dropdown" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Perfil">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <!--<img class="rounded-circle me-lg-2" src="" alt="avatar picture" style="width: 40px; height: 40px;">-->
                            <i class="bi bi-person-circle me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex"> John Doe</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end shadow">
                            <a href="#" class="dropdown-item"><i class="bi bi-person"></i> My Profile</a>
                            <a href="#" class="dropdown-item"><i class="bi bi-gear"></i> Settings</a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item"><i class="bi bi-box-arrow-right"></i> Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style></style>
