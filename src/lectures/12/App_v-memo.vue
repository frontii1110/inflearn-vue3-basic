<template>
	<div>
		<h2>v-memo?</h2>
		<p>1. 성능과 관련된 디렉티브</p>
		<p>2. v-memo 배열안에 반응형 데이터가 변경 되었을 때만 업데이트됨</p>
		<h3>v-memo 있을때</h3>
		<div v-memo="[views, likes]">
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>
		<button @click="subscribers++">Subs++</button>
		<button @click="views++">Views++</button>
		<button @click="likes++">Likes++</button>
		<br />
		<h3>v-memo 없을때</h3>
		<div>
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const subscribers = ref(4000);
		const views = ref(400);
		const likes = ref(20);
		return { subscribers, views, likes };
	},
};
</script>

<style lang="scss" scoped></style>
