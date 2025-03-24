<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <three-grids-and-add-button-component
                            @show-store-form="taskStore.showStoreForm"
                        />
                    </div>

                    <div class="card-body">
                        <index-table-component
                            :column-names="['title']"
                            :has-actions="true"
                            :action-button-names="['edit', 'delete']"
                            :action-button-class-names="['btn-outline-primary', 'btn-outline-danger']"
                            :action-button-emitting-method-names="['showContentEditForm', 'showContentDeleteConfirmationForm']"

                            @show-content-edit-form="generalStore.showContentEditForm"
                            @show-content-delete-confirmation-form="generalStore.showContentDeleteConfirmationForm"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <dynamic-create-update-form-modal-component
                @store-content="taskStore.storeContent"
			    @update-content="taskStore.updateContent"
            />
        </div>

        <div class="row">
            <delete-confirmation-component
                @emit-delete-method="taskStore.deleteContent"
            />
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { Modal } from 'bootstrap';
    // import { storeToRefs } from 'pinia';
    import { useTaskStore } from '@/stores/task';
    import { useGeneralStore } from '@/stores/general';

    // onCreated equivalent
    const taskStore = useTaskStore();
    const generalStore = useGeneralStore();

    // importing state-variables with ref()
    // const { createOrEditModal, deleteConfirmationModal } = storeToRefs(taskStore)

    taskStore.fetchIndexContents();

    generalStore.currentEntityName = 'task';    // has to be lowercase

    onMounted(async () => {
        // console.log('Task List mounted.')
        generalStore.currentEntityShowableFieldObjects = [
            {
                name:'title',
                type:'text'
            },

            {
                name:'description',
                type:'long-text'
            },

            {
                name:'status',
                type:'boolean'
            },
        ];

        generalStore.currentEntityRequiredFields = ['title', 'description', 'status'];
        generalStore.createOrEditModal = new Modal('#dynamic-form-modal', {});
        generalStore.deleteConfirmationModal = new Modal('#delete-confirmation-modal', {});
    })
</script>
