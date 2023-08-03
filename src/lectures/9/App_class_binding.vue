<template>
	<div>
		<div class="text" :class="{ active: isActive, 'text-danger': hasError }">
			클래스 인라인 바인딩
		</div>
		<button v-on:click="toggle">toggle</button>
		<br />
		<button v-on:click="hasError = !hasError">toggleError</button>
		<div class="text" :class="classObject">클래스 Object</div>
		<div class="text" :class="classComputed">클래스 Computed</div>
		<div class="text" :class="[activeClass, errorClass]">
			클래스 배열 바인딩
		</div>
		<div
			class="text"
			:class="[
				activeTernary ? 'ternary' : 'text-blue',
				ternaryError,
				classObject,
			]"
		>
			클래스 3항 연산자 + 텍스트 + 배열
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { reactive, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(false);
		const hasError = ref(true);

		// 1. 여러개의 class를 객체로 선언
		const classObject = reactive({
			active: true,
			'text-danger': hasError,
		});

		// 2. 클래스가 active 되는 조건이 여러개일 경우 computed를 사용
		const classComputed = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
				'text-blue': true,
			};
		});

		// 3. 클래스를 배열로 바인딩할때
		const activeClass = ref('active');
		const errorClass = ref('error');

		// 4. 3항 연산자 사용 + 텍스트 + 배열
		const activeTernary = ref(true);
		const ternaryError = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value;
		};

		return {
			isActive,
			toggle,
			hasError,
			classObject,
			activeClass,
			errorClass,
			classComputed,
			activeTernary,
			ternaryError,
		};
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
.text-blue {
	color: blue;
}
</style>
