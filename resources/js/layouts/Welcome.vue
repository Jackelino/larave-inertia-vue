<template>
    <div>
        <header >
                <div class="row main bar-top">
                        <div class="col_lg-6">
                            <a class="link-social" href="https://www.facebook.com/facicocespiUAEM" target="_blank"><i class="fas fa-phone-volume"></i></a>
                            <a class="link-social" href="https://twitter.com/fiuaemex" target="_blank"><i
                                    class="fab fa-twitter"></i></a>
                            <a class="link-social" href="https://www.youtube.com/channel/UCe8Se89aeErlTzKnwhFkOtQ"
                                target="_blank"><i class="fab fa-youtube"></i></a>
                            <a class="link-social" href="mailto:difculting@gmail.com" target="_blank"><i
                                    class="fas fa-envelope"></i><span class="link-span"></span></a>
                            <a href="tel:722 462 8287"><span class="link-social"><i class="fas fa-phone"></i> <span
                                        class="link-span"></span></span></a>
                        </div>
                        <div class="col_lg-6">

                        </div>
                </div>
                <div class="row">
                    <nav class="navbar navbar-expand-lg navbar-light filter pt-4 pb-4">
                <div class="container-fluid">
                    <div class="ps-5">
                        <a class="navbar-brand" href="{{ url('/') }}">
                            <img src="" width="125" alt="">
                        </a>
                    </div>
                    <div class="pe-4">
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <a id="link-contact" class="nav-link text-light" href="{{ route('login') }}">Iniciar
                                    sesión</a>
                            </li>
                        </ul>
                    </div>

                </div>
                    </nav>
                </div>

        </header>
        <main>
            <section><slot /></section>
        </main>
        <footer >
            <div class="space"></div>
            <div class="main contac">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div >
                                <h5>Contacto</h5>
                                <hr>
                                <ul class="footer-ul">
                                    <li class="footer-li">
                                        <span>Universidad Autónoma del Estado de México.</span>
                                    </li>
                                    <li class="footer-li">
                                        <span><a href="tel:7222140855" class="footer-link"><i
                                                    class="fas fa-phone"></i></a>7222140855</span>
                                    </li>
                                    <li class="footer-li">
                                        <span><a class="footer-link"
                                                href="mailto:atencionpsicologicacu5@gmail.com"><i
                                                    class="fas fa-envelope"></i></a>atencionpsicologicacu5@gmail.com</span>
                                    </li>
                                    <li class="footer-li">
                                        <span><a class="footer-link"
                                                href="https://www.uaemex.mx/mi-universidad/directorio-telef%C3%B3nico.html"><i
                                                    class="fas fa-link"></i></a>Directorio Telefónico </span>
                                    </li>
                                    <li>

                                        <iframe class="footer-li"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.9878427078825!2d-99.67880678605744!3d19.28289488696955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89b49a715133%3A0xcf0d4f83c3bdf267!2sFacultad%20de%20Ingenier%C3%ADa!5e0!3m2!1ses!2smx!4v1631651982342!5m2!1ses!2smx"
                                            width="500" height="200" style="border:0;" allowfullscreen=""
                                            loading="lazy"></iframe>
                                        <br>
                                        <span> <a class="footer-link" href="https://goo.gl/maps/z3Xb2qFa1zkAYkYN9"
                                                target="_blank"><i class="fas fa-map-marked-alt"></i></a> Facultad de
                                            Ingeniería UAEM
                                        </span>
                                        <ul class="footer-ul" >
                                            <li>Cerro de Coatepec S/N,</li>
                                            <li>Ciudad Universitaria C.P. 50100,</li>
                                            <li>Toluca, Estado de México.</li>
                                        </ul>

                                    </li>
                                </ul>

                            </div>

                        </div>
                        <div class="col-lg-6">
                            <div>
                                <h5 >Vínculos de interés</h5>
                                <hr>
                                <ul class="footer-ul">
                                    <li class="footer-li">
                                        <span><a class="footer-link"
                                                href="http://fingenieria.uaemex.mx/portal/inicio/home.php"
                                                target="_blank"><i class="fas fa-link"></i></a>Facultad de
                                            Ingenieria</span>
                                    </li>
                                    <li class="footer-lilink">
                                        <span><a class="footer-link" href="https://www.facebook.com/FIUAEM/"
                                                target="_blank"><i class="fab fa-facebook-square"></i></a>FIUAEM</span>
                                    </li>
                                    <li class="footer-li">
                                        <span><a class="footer-link" href="https://twitter.com/fiuaemex"
                                                target="_blank"><i class="fab fa-twitter"></i></a>@fiuaemex</span>
                                    </li>
                                    <li class="footer-li">
                                        <span><a class="footer-link"
                                                href="http://fingenieria.uaemex.mx/portal/direccion/avisoPrivacidad.php"
                                                target="_blank"><i class="fas fa-user-shield"></i></a>Aviso de
                                            privacidad</span>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bar-bottom">

                    <span class="span-bar-bottom"><i class="far fa-copyright color-copyright"></i> {{ fecha }} SEGIT - All
                        rights reserved</span><br>
                    <span class="span-bar-bottom"><i class="fas fa-brain color-brain"></i> Desarrollado por </span><br>
                    <span class="span-bar-bottom">Jose Manuel Fernandez Gomez </span><br>
                    <span class="span-bar-bottom">Irvin Carapia Hernandez </span>
            </div>
        </footer>
    </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';
export default {
    name: 'Welcome',
    components: {
        Link,
    },
    data() {
        return {
            fecha: new Date().getFullYear(),
        }
    },
}
</script>

<style>
    .space{
        background-color: #98820C;
        height: 10px;
    }
    .contac{
        color: #fff;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .main{
        background-color: #365A41;
    }
    .link-social{
        color: #fff;
        font-size: 14px !important; 
        text-decoration: none;
    }
    .footer-ul{
        text-decoration: none;
        list-style:none;
        margin: 0px;
        padding: 0px;
    }
    .footer-link{
        color: #fff;
    }
    .bar-bottom{
        background-color: #224f34;
        color: #fff;
    }
    .bar-top{
        color: #fff;
    }
    .color-brain{
        color: #ff76b4;
    }
</style>