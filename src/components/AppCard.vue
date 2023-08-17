<template>
	<!-- $ 사용해서 props 직접 바인딩 -->
	{{ $props }}
	<div class="card">
		<div class="card-body">
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title red mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
			<br />
			{{ obj }}
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
console.log('AppCard');
export default {
	props: {
		type: {
			type: String,
			default: 'news',
			//유효하지 않을 경우 콘솔에 경고 찍힘
			validator: value => {
				return ['news', 'notice'].includes(value);
			},
		},
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},
		// 객체나 배열같이 래퍼런스타입의 default 값을 설정 할때는 기본값을 반환하는 factory 함수(return)를 설정해줘야 함
		obj: {
			type: Object,
			default: () => ({}),
		},
	},

	emits: ['toggleLike'],

	// emit-1. 이벤트 올리는 방법: 자식컴포넌트에서 부모 컴포넌트로 이벤트 올리기
	// emit-2. setup함수의 두번째 파라미터로 context 객체 추가
	// emit-3. context 파라미터에 emit 객체 사용
	setup(props, context) {
		// 컴포넌트는 사용할 때마다 해당 컴포넌트의 새 인스턴스가 생성된다. 즉 사용할 때마다 setup() 함수가 실행 된다.
		console.log('AppCard setup()');

		console.log('props.title: ', props.title);

		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-primary',
		);

		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);

		const toggleLike = () => {
			//props.isLike = !props.isLike;

			// obj 속성 변경하기(eslint 에러 생김)
			//props.obj.title = '김길동';

			context.emit('toggleLike');
		};

		return { isLikeClass, toggleLike, typeName };
	},
};
</script>

<style lang="scss" scoped></style>
