<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
		<br />
		<h2>computed</h2>
		<p>
			vue 인스턴스의 상태(ref, reactive 변수)의 종속 관계를 자동으로 세팅하고자
			할 때는 computed로 구현하는 것이 좋다.
		</p>
		<p>reverseMessage는 message값에 따라 결정되어지는 종속관계에 있다.</p>

		<h2>watch</h2>
		<p>
			vue 인스턴스의 상태(ref, reactive 변수)의 변경 시점에 특정 액션(call api,
			push route등)을 취하고자 할때 적합하다
		</p>
		<p>
			대게의 경우 computed로 구현 가능한 것이라면 watch가 아니라 computed로
			구현하는 것이 옳다.
		</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('Hello Vue3');
		const reverseMessage = ref('');

		// 2. 함수로 설정
		const reverseFunction = () => {
			console.log('즉시실행!!');
			reverseMessage.value = message.value.split('').reverse().join('');
		};

		watch(message, reverseFunction);
		reverseFunction();
		/////////////////////////////////////////////////////

		// 1. message에서 변경이 한번 일어나야 reverseMessage가 출력된다.(콘솔에서 변경 해보기)
		// watch(
		// 	message,
		// 	newValue => {
		// 		console.log('즉시실행!!');
		// 		reverseMessage.value = newValue.split('').reverse().join('');
		// 	},
		// 	// 1-2. 객체로 넣기: 최초에 즉시 실행
		// 	{ immediate: true },
		// );
		return { message, reverseMessage };
	},
};
</script>

<style lang="scss" scoped></style>
