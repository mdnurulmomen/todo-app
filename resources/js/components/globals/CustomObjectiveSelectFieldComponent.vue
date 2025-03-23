<template>
    <div>
        <label class="form-label">
            Choose {{ $helpers.capitalizeEachWord(generalStore.currentEntityName) }}
        </label>

        <select
            v-model="generalStore.currentEntity[field['name']]"
            :class="['form-control', generalStore.errors[field['name']] ? 'is-invalid' : 'is-valid']"
            :disabled="generalStore.isSubmitted"
            :required="generalStore.currentEntityRequiredFields.includes(field['name'])"
            @change="$emit('input', field['name'])"
        >
            <option disabled value="">
                Please Select {{ $helpers.capitalizeEachWord(generalStore.currentEntityName) }}
            </option>

            <option
                v-for="asset in generalStore.assetSelectOptions"
                :value="asset.id"
            >
                {{ $helpers.capitalizeEachWord(asset.name) }}
            </option>
        </select>

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
