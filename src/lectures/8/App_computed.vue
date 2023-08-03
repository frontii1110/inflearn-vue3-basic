<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>
		<!-- <p>{{ teacher.lectures.length > 0 ? '있음 🙂' : '없음 🥲' }}</p> -->
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<button v-on:click="counter++">Counter: {{ counter }}</button>
		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});

		// arrow 함수는 명령어가 하나일 때 중괄호, return 생략 가능

		// #1. computed를 쓸 때와 쓰지 않을 떄의 차이
		// 1. computed: 한번 계산된 결과를 캐싱한다. 보관하고 있다가 다음에 요청이 오면 그 보관한 결과값을 보여준다. 계산하는 시점은 반응형 데이터가 변경될 때임. 성능면에서 유리함
		// 2.method: 실행될 때마다 찍힌다.
		const hasLecture = computed(() => {
			// 3. console: computed
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음 🙂' : '없음 🥲';
		});

		const existLecture = () => {
			// 4. console: method 2번 찍힘
			console.log('method');
			return teacher.lectures.length > 0 ? '있음 🙂' : '없음 🥲';
		};

		// 5. counter를 실행할 때마다 'method'가 같이 실행됨
		const counter = ref(0);

		// #2. computed의 getter, setter
		// - computed는 읽기 전용
		// -
		const firstName = ref('홍');
		const lastName = ref('길동');
		// 1. computed만 사용 한 경우
		//const fullName = computed(() => firstName.value + '' + lastName.value);

		// 3. getter/setter 사용한 경우
		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				console.log('value: ', value);
				// 단어 단위로 짜를때는 꼭 '  ' 사이에 빈칸 만들기!!!
				console.log('split', value.split(' '));

				const [first, last] = value.split(' ');
				console.log('first: ', first);
				console.log('last: ', last);

				// 		//[firstName.value, lastName.value] = value.split(' ');
			},
		});
		console.log('Console 출력: ', fullName.value);
		// 2. computed만 사용한 후 해당 value값을 수정하려고 하면 콘솔에 readonly 경고가 뜬다
		fullName.value = 'apple banana';

		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
