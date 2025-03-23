import { defineStore } from 'pinia'
import { useGeneralStore } from '@/stores/general';

export const useHomeStore = defineStore('home', () => {
    /* state */
    const generalStore = useGeneralStore()

    /* getters */
    // const doubleCount = computed(() => count.value * 2)

    /* actions */
    function fetchIndexContents() {

        generalStore.loading = true;
        generalStore.currentIndexContents = [];

        axios
            .get('/api/v1/users/')
            .then(response => {
                // console.log(response);
                if (response.status == 200) {
                    // console.log(response);
                    generalStore.currentIndexContents = response.data.data;
                }
            })
            .catch(error => {
                error = error.toString();
                // Request made and server responded
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    console.log(error.response.data.errors[x]);
                }
                // The request was made but no response was received
                else if (error.request) {
                    console.log(error.request);
                }
                // Something happened in setting up the request that triggered an Error
                else {
                    console.log('Error', error.message);
                }

            })
            .finally(response => {
                generalStore.loading = false;
            });

    }

    return {
        fetchIndexContents
    }
})
