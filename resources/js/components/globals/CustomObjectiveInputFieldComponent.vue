<template>
    <div>
        <label class="form-label">
            {{ $helpers.capitalizeEachWord(generalStore.currentEntityName) }} {{ $helpers.capitalizeEachWord(field['name']) }}
        </label>

        <input
            v-model="generalStore.currentEntity[field['name']]"
            :type="field['type']"
            :class="['form-control', generalStore.errors[field['name']] ? 'is-invalid' : 'is-valid']"
            :placeholder="`Please input ${field['name']}`"
            @input="$emit('input', field['name'])"
            :disabled="generalStore.isSubmitted"
            :required="generalStore.currentEntityRequiredFields.includes(field['name'])"
            :step="field['type']=='number' ? (field['step'] || 1) : null"
        >

        <div
            class="text-danger"
            v-show="generalStore.errors[field['name']]"
        >
            {{ generalStore.errors[field['name']] }}
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { useGeneralStore } from '@/stores/general';

    const generalStore = useGeneralStore()

    const props = defineProps({
        field: {
            type: Object,
            required: true
        }
    })
</script>

<style scoped>

</style>
