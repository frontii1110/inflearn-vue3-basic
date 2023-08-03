<template>
	<div>
		<p>{{ msg }}</p>
		<p v-text="msg"></p>
		<br />
		<p v-html="htmlStr"></p>
		<br />
		<h2>v-text : 문자열로 받음</h2>
		<p v-text="htmlStr"></p>
		<br />
		<h2>v-pre : 문자열로 받음</h2>
		<p v-pre>{{ msg 안녕하세요 }}</p>
		<br />
		<h2>
			v-once : 한번만 랜더링함, 이후에 재랜더링시 정적 컨텐츠로 처리하고 건너
			뜀, 업데이트 성능 최적화
		</h2>
		<p v-once>{{ msg }} !!!!</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요');
		const htmlStr = ref('<strong>안녕!!!</strong>');

		return { msg, htmlStr };
	},
};
</script>

<style lang="scss" scoped></style>
