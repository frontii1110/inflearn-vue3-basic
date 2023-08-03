<template>
	<div>
		<ul>
			<li v-for="(item, index) in items" :key="item.id">
				인덱스: {{ index }}, {{ item.message }}
			</li>
		</ul>

		<!-- v-for, v-if를 같이 쓰려면 template로 만들어 준다 -->
		<!-- 1. id가 짝수인 item만 추출 -->
		<ul>
			<template v-for="(item, index) in items" :key="item.id">
				<li v-if="item.id % 2 === 0">
					ID: {{ item.id }}, 인덱스: {{ index }}, {{ item.message }}
				</li>
			</template>
		</ul>

		<!-- 2. computed 활용하기 -->
		<!-- *** index 결과값이 차이나는 이유 = items 에서 filter를 해서 추출된 결과값에 index번호를 메기기 때문 -->
		<ul>
			<template v-for="(item, index) in evenItems" :key="item.id">
				<li v-if="item.id % 2 === 0">
					ID: {{ item.id }}, 인덱스: {{ index }}, {{ item.message }}
				</li>
			</template>
		</ul>
		<hr />

		<!-- 3. 객체 속성 반복하기 -->
		<ul>
			<li v-for="(value, key, index) in myObject" :key="key">
				{{ index }}-{{ key }}-{{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'Java' },
			{ id: 2, message: 'HTML' },
			{ id: 3, message: 'CSS' },
			{ id: 4, message: 'JavaScript' },
		]);

		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: '제목',
			author: '홍길동',
			publishedAt: '2016-01-01',
		});

		// ***myObject 객체의 키값만 출력
		console.log('key', Object.keys(myObject));

		return { items, evenItems, myObject };
	},
};
</script>

<style lang="scss" scoped></style>
