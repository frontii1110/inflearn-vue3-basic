<template>
	<div>
		<h2>watch</h2>
		<h3>- watch ( source type, (newValue, oldValue) => {});</h3>
		<h3>
			- watch의 첫번째 매개변수는 다양한 타입이 될 수 있음: ref, reactive,
			computed, getter함수, array
		</h3>
	</div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			count: 0,
		});

		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		// 1. 반응형 변경값 감시
		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log('sum: ', sum);
		// 		console.log('oldValue: ', oldValue);
		// 	},
		// );

		// 2. 매개변수로 array를 넘겨서 따로 감시하기
		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// });

		// 3. object타입의 반응형 객체 감시
		//console.log(typeof obj.count);
		// 3-1 현재 obj는 반응형이 아니라 number 형식, watch로 감지가 안된다
		// watch(
		// 	// 3-2 object의 속성('obj.count')을  감지하기 위해서는 getter함수('() => obj.count')를 넣어줘야 함
		// 	() => obj.count,
		// 	(newValue, oldValue) => {
		// 		console.log('newValue: ', newValue);
		// 		console.log('oldValue: ', oldValue);
		// 	},
		// );

		// 4. obj를 감시할때는 newValue, oldValue가 같은 객체를 가리킨다
		// watch(obj, (newValue, oldValue) => {
		// 	// 4-1 콘솔에 같은 값이 찍힌다
		// 	console.log('newValue: ', newValue);
		// 	console.log('oldValue: ', oldValue);
		// });

		// 5. 반응형 객체를 watch하게 되면 깊은 감시가 생성, 객체의 속성뿐 아니라 모든 중첩된 속성(속성의 속성)도 감지 할 수 있다
		// watch(person, newValue => {
		// 	console.log('newValue: ', newValue);
		// });

		// 6. object의 값이 변할때만 반응
		// 6-1 object의 속성의 속성만 감시 하려면 getter함수를 써준다 *****
		watch(
			// 6-2 person.obj의 데이터가 변경 되었을 때만 감시한다
			() => person.obj,
			newValue => {
				console.log('newValue: ', newValue);
			},
		);
		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>
