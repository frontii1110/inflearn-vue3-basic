<template>
	<div>
		<h3>1. keyup.enter</h3>
		<input type="text" @keyup.enter="addTodo" />
		<br />
		<h3>2. keyup.ctrl.enter: enter + ctrl을 같이 눌러야 이벤트 실행</h3>
		<input type="text" @keyup.ctrl.enter="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">
				{{ todo }}
			</li>
		</ul>
	</div>
</template>
<script>
import { reactive } from 'vue';

export default {
	setup() {
		const todos = reactive([]);

		const addTodo = event => {
			console.log('event.key: ', event.key);
			// 1. 엔터 입력후 리스트에 푸시
			todos.push(event.target.value);
			// 2. 리스트에 푸시 후 인풋창 초기화
			event.target.value = '';
			// 3. 초기화 후 포커스 주기
			event.target.focus();
		};
		return { todos, addTodo };
	},
};
</script>
<style lang="scss" scoped></style>
