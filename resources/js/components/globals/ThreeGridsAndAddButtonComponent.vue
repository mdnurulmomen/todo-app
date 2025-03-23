<template>
    <div class="row">
        <div class="col-xs-4 col-md-4">
            Available {{ generalStore.currentEntityName.slice(-1)=='y' ? ($helpers.capitalizeEachWord(generalStore.currentEntityName.replace(/.$/,"ies"))) : ($helpers.capitalizeEachWord(generalStore.currentEntityName) + "'s") }}
        </div>
        <div class="col-xs-4 col-md-4 text-center"></div>
        <div class="col-xs-4 col-md-4 text-end">
            <button type="button" class="btn btn-success" @click="showStoreForm" v-if="props.hasAddButton">
                Add {{ $helpers.capitalizeEachWord(generalStore.currentEntityName) }}
            </button>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, defineEmits, onMounted } from 'vue';
    import { useGeneralStore } from '@/stores/general';

    const generalStore = useGeneralStore()

    const props = defineProps({
        hasAddButton: {
            type: Boolean,
            default: true
        }
    })

    const emit = defineEmits([
        'showStoreForm'
    ])

    onMounted(() => {
        // console.log('Three Grids With Add Button Component mounted.')
    })

    function showStoreForm() {
        emit('showStoreForm');
    }
</script>
