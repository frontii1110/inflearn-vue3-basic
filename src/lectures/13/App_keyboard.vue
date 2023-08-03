<template>
	<div>
		<div id="modifiers">
			<h3>1. prevent: 이벤트 버블링 막기 = e.stopPropagation()</h3>
			<h3>2. stop: 자기 자신의 기본 기능 막기 = e.preventDefault</h3>
			<h3>3. capture: 캡처모드 사용, 이벤트 실행 순서 바꾸기</h3>
			<h4>- span 클릭시 버블링? span -> p -> div 순으로 실행됨</h4>
			<h4>- 여기서 capture을 하게 되면? 이벤트 실행되는 순서가 바뀌게 된다</h4>
			<h4>
				- 만약에 div 태그를 먼저 실행 하고 싶으면 div에 capture를 넣어주면 된다
			</h4>
			<h3>4. self: 자기 자신만 이벤트를 호출 할 수 있다</h3>
			<h3>5. once: 한번만 실행</h3>
			<div @click.capture="clickDiv">
				DIV 영역
				<p @click.self="clickP">
					P 영역
					<!-- <span @click.stop="clickSpan"> SPAN 영역 버블링 </span> -->
					<span @click="clickSpan"> SPAN 영역 </span>
					<a href="https://naver.com" @click.prevent.stop="clickA">a 영역</a>
				</p>
			</div>
		</div>
		<button @click.once="clickDiv">once</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			// location.href = 'https://naver.com';
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = () => {
			console.log('clickSpan');
			// alert('좋아요');
		};
		const clickA = e => {
			// e.preventDefault();
			alert('어떤기능~');
		};
		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA,
		};
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: #ccc;
}
#modifiers p {
	background-color: #999;
}
#modifiers span {
	background-color: #666;
	display: block;
}
</style>
