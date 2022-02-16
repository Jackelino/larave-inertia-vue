<template>
  <Dasboard>
      <Head title="Dasboard" />
      <div class="container-fluid pt-4 px-4">
                <div class="row vh-100 bg-light rounded align-items-center justify-content-center mx-0">
                    <div class="col-md-6 text-center">
                        <h3>Hola con vue 3 perrosefdfsf ewrf .</h3>
                        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                    </div>
                </div>
            </div>
      
  </Dasboard>
</template>

<script>
import Dasboard from "../layouts/Dasboard.vue";
import { Head } from "@inertiajs/inertia-vue3";
export default {
    name: 'Index',
    components: {
        Dasboard,
        Head
    }
}
</script>

<style>

</style>