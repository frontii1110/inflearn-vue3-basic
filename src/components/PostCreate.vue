<template>
	<div>
		emit1:
		<button
			class="btn btn-primary"
			@click="$emit('createPost', 1, 2, 3, '김길동')"
		>
			button1
		</button>
		<br />
		<br />
		emit2:
		<button class="btn btn-primary" @click="createPost2">button2</button>
	</div>
</template>

<script>
export default {
	// 1-1. 구조분해할당: 코드를 간결하게, context대신 {emit}
	setup(props, { emit }) {
		const createPost2 = () => {
			// 1-2. 구조분해할당: context.emit 대신 emit만 쓰기
			emit('createPost', 1, 2, 3, '김길동');
		};
		return { createPost2 };
	},
};
</script>

<style lang="scss" scoped></style>
