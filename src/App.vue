<template>
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		// 1. 반응형 변경값 감시
		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log('sum: ', sum);
		// 		console.log('oldValue: ', oldValue);
		// 	},
		// );

		// 2. 매개변수로 array를 넘겨서 따로 감시하기
		watch([x, y], ([newX, newY]) => {
			console.log(newX, newY);
		});
		return { x, y };
	},
};
</script>

<style lang="scss" scoped></style>
