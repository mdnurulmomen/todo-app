<template>
    <div class="modal fade" id="dynamic-form-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form
                    v-on:submit.prevent="submitForm()"
                    autocomplete="off"
                >
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                            {{ (generalStore.isCreateMode ? 'Add New' : 'Edit') }} {{ $helpers.capitalizeEachWord(generalStore.currentEntityName) }}
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div
                            class="mb-3"
                            v-for="showableFieldObject in generalStore.currentEntityShowableFieldObjects"
                            :key="'field-key-name-'+ showableFieldObject['name']"
                        >
                            <!-- Status Checkbox -->
                            <div v-if="showableFieldObject['name']=='status' && showableFieldObject['type']=='boolean'">
                                <label class="form-label">
                                    {{ $helpers.capitalizeEachWord(generalStore.currentEntityName) }} {{ $helpers.capitalizeEachWord(showableFieldObject['name']) }}
                                </label>

                                <div class="form-check">
                                    <input
                                        type="checkbox"
                                        value="1"
                                        class="form-check-input position-static"
                                        v-model="generalStore.currentEntity[showableFieldObject['name']]"
                                    />

                                    <label class="form-check-label" for="gridCheck1">
                                        Completed
                                    </label>
                                </div>
                            </div>

                            <!-- Description Field -->
                            <div v-else-if="showableFieldObject['name']=='description' && showableFieldObject['type']=='long-text'">
                                <label class="form-label">
                                    {{ $helpers.capitalizeEachWord(generalStore.currentEntityName) }} {{ $helpers.capitalizeEachWord(showableFieldObject['name']) }}
                                </label>

                                <textarea
                                    v-model="generalStore.currentEntity[showableFieldObject['name']]"
                                    class="form-control"
                                    rows="3"
                                    placeholder="Task Description"
                                >
                                </textarea>
                            </div>

                            <!-- Other Fields -->
                            <custom-objective-input-field-component
                                :field="showableFieldObject"
                                @input="validateFormInput(showableFieldObject['name'])"
                                v-else
                            />
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button
                            type="submit"
                            :class="['btn', generalStore.isCreateMode ? 'btn-success' : 'btn-primary']"
                            :disabled="! isSubmittable || generalStore.isSubmitted || Object.keys(generalStore.errors).some(key => generalStore.errors[key])"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { defineEmits, onMounted, ref } from 'vue';
    import { useGeneralStore } from '@/stores/general';

    const generalStore = useGeneralStore()

    const emit = defineEmits(['storeContent', 'updateContent'])

    onMounted(() => {
        // console.log('Add Button Component mounted.')
    })

    const isSubmittable = ref(true)

    function submitForm() {

        if (isVerifiedInput()) {

            if (generalStore.isCreateMode) {
                emit('storeContent', generalStore.currentEntity);
            }

            else {
                emit('updateContent', generalStore.currentEntity)
            }

        }

    }

    function isVerifiedInput() {

        generalStore.currentEntityRequiredFields.forEach(function(field) {
            validateFormInput(field['name']);
        });

        if (Object.keys(generalStore.errors).some(key => generalStore.errors[key])) {
            return false;
        }
        else {
            return true;
        }

    }

    function validateFormInput(formInputName) {

        isSubmittable.value = false;

        switch(formInputName) {

            case formInputName :

                if (generalStore.currentEntityRequiredFields.includes(formInputName) && ! generalStore.currentEntity[formInputName]) {
                    generalStore.errors[formInputName] = 'This is required';
                }
                else{
                    isSubmittable.value = true;
                    generalStore.errors[formInputName] = null;
                }

                break;

        }

    }
</script>
