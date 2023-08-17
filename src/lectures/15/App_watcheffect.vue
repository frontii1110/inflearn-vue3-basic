<template>
	<div>
		<h2>watchEffect</h2>
		<p>watch와는 다르게 최초 1번 즉시 실행</p>
		<p>watch 보다 덜 명시적, watchEffect안에 모든 반응 속성을 자동으로 추적</p>
		<form @submit.prevent>
			<!-- lazy: 포커스가 떨어졌을때 실행 -->
			<input v-model.lazy="title" type="text" placeholder="타이틀" />
			<br />
			<textarea v-model.lazy="contents" placeholder="컨텐츠"></textarea>
			<hr />
			<button @click="save(title, contents)">저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
		};

		watchEffect(() => {
			console.log('watchEffect');
			save(title.value, contents.value);
		});
		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
