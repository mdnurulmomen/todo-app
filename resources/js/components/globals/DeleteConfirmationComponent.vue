<template>
	<!-- Delete Modal -->
	<div class="modal fade" id="delete-confirmation-modal" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<form
					class="form-horizontal"
					v-on:submit.prevent="$emit('emitDeleteMethod', generalStore.currentEntity)"
					autocomplete="off"
				>
					<div class="modal-header bg-danger">
						<h5 class="modal-title" id="exampleModalLongTitle">Delete Confirmation</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
						    <span aria-hidden="true">&times;</span>
						</button>
					</div>

					<div class="modal-body text-center">
						<h4 class="text-danger">
                            Want to delete {{ generalStore.currentEntity.name ? ("'" + $helpers.capitalizeEachWord(generalStore.currentEntity.name) + "'") : '' }} ?
                        </h4>
						<h6 class="sub-heading text-secondary">
                            {{ generalStore.deletionWarningMessage }}
                        </h6>
					</div>

					<div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

						<button
							type="submit"
							class="btn btn-danger"
							:disabled="generalStore.isSubmitted"
						>
							Delete
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>

    import { onMounted } from 'vue';
    import { useGeneralStore } from '@/stores/general';

    const generalStore = useGeneralStore()

    onMounted(() => {
        // console.log('Delete Confirmation mounted.')
    })

</script>
