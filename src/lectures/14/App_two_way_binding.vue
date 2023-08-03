<template>
	<div>
		<h2 style="background-color: #ccc; padding: 10px">1. input value</h2>
		<h4>
			- input type="text" , textarea : value라는 속성과 @input 이벤트를 결합
		</h4>
		<div>inputValue: {{ inputValue }}</div>
		<h3>1-1 단방향 바인딩: 콘솔에서 변경 가능</h3>
		<input type="text" :value="inputValue" />
		<h3>1-2 양방향 바인딩: input 이벤트</h3>
		<input
			type="text"
			:value="inputValue"
			@input="event => (inputValue = event.target.value)"
		/>
		<h3>1-3 양방향 바인딩: v-model</h3>
		<input type="text" v-model="inputValue" />

		<h2 style="background-color: #ccc; padding: 10px">2. textarea value</h2>
		<h4>
			- input type="text" , textarea : value라는 속성과 @input 이벤트를 결합
		</h4>
		<div>textAreaValue: {{ textAreaValue }}</div>
		<h3>2-1 단방향 바인딩: 콘솔에서 변경 가능</h3>
		<textarea cols="30" rows="5" :value="textAreaValue"></textarea>
		<h3>2-2 양방향 바인딩: input 이벤트</h3>
		<textarea
			cols="30"
			rows="5"
			:value="textAreaValue"
			@input="event => (textAreaValue = event.target.value)"
		></textarea>
		<h3>2-3 양방향 바인딩: v-model</h3>
		<h4>- select : value라는 속성과 change 이벤트를 결합</h4>
		<textarea cols="30" rows="5" v-model="textAreaValue"></textarea>

		<h2 style="background-color: #ccc; padding: 10px">3. checkbox value</h2>
		<h4>- checkbox, radio : checked 속성과 change 이벤트를 결합</h4>
		<h3>3-1 단방향 바인딩: 콘솔에서 변경 가능</h3>
		<label for="checkbox1">{{ checkboxValue1 }}</label>
		<input type="checkbox" id="checkbox1" :checked="checkboxValue1" />
		<br />
		<h3>3-2 양방향 바인딩: input 이벤트</h3>
		<label for="checkbox2">{{ checkboxValue2 }}</label>
		<input
			type="checkbox"
			id="checkbox2"
			true-value="yes"
			false-value="no"
			:checked="checkboxValue2"
			@change="event => (checkboxValue2 = event.target.checked)"
		/>
		<h3>3-3 양방향 바인딩: v-model</h3>
		<label for="checkbox3">{{ checkboxValue3 }}</label>
		<input type="checkbox" id="checkbox3" v-model="checkboxValue3" />

		<h2 style="background-color: #ccc; padding: 10px">4. radio value</h2>
		<h4>- checkbox, radio : checked 속성과 change 이벤트를 결합</h4>

		<h3>4-1 단방향 바인딩: 콘솔에서 변경 가능</h3>
		<div>radioValue: {{ radioValue }}</div>
		<label for="radio"
			>o형
			<input type="radio" name="type" value="o" :checked="radioValue === '0'" />
		</label>
		<label for="radio"
			>b형
			<input type="radio" name="type" value="b" :checked="radioValue === 'b'" />
		</label>
		<h3>4-2 양방향 바인딩: input 이벤트</h3>
		<div>radioValue: {{ radioValue }}</div>
		<label for="radio"
			>o형
			<input
				type="radio"
				name="type"
				value="o"
				:checked="radioValue === 'o'"
				@change="event => (radioValue = event.target.value)"
			/>
		</label>
		<label for="radio"
			>b형
			<input
				type="radio"
				name="type"
				value="b"
				:checked="radioValue === 'b'"
				@change="event => (radioValue = event.target.value)"
			/>
		</label>
		<h3>4-3 양방향 바인딩: v-model</h3>
		<div>radioValue: {{ radioValue }}</div>
		<label for="radio"
			>o형
			<input type="radio" name="type" value="o" v-model="radioValue" />
		</label>
		<label for="radio"
			>b형
			<input type="radio" name="type" value="b" v-model="radioValue" />
		</label>

		<h2 style="background-color: #ccc; padding: 10px">5. select value</h2>
		<h4>- select 태그는 value 속성과 change 이벤트를 결합</h4>
		<div>selectValue: {{ selectValue }}</div>
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>

		<h2 style="background-color: #ccc; padding: 10px">6. checkbox values</h2>
		<h4>- checkbox, radio : checked 속성과 change 이벤트를 결합</h4>
		<div>checkboxValues: {{ checkboxValues }}</div>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			html
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			css
		</label>
		<label>
			<input type="checkbox" value="javascript" v-model="checkboxValues" />
			javascript
		</label>

		<h2 style="background-color: #ccc; padding: 10px">7. v-model 수식어</h2>
		<h4>- lazy : 입력값이 동기화가 안되다가 포커스가 떨어지믄 동기화 됨</h4>
		<div>lazy: {{ inputValue }}</div>
		<input type="text" v-model.lazy="inputValue" />
		<h4>- number : 숫자를 string을 number로 형태 변환</h4>
		<div>number: {{ typeof inputValue }}</div>
		<input type="text" v-model.number="inputValue" />
		<h4>- trim : 포커스가 떨어지믄 입력값의 여백 없애기</h4>
		<div>trim: {{ inputValue }}</div>
		<input type="text" v-model.trim="inputValue" />
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const inputValue = ref(null);
		const textAreaValue = ref('');
		const checkboxValue1 = ref(true);
		const checkboxValue2 = ref('yes');
		const checkboxValue3 = ref(true);
		const radioValue = ref('o');
		const selectValue = ref('html');
		const checkboxValues = ref([]);
		return {
			inputValue,
			textAreaValue,
			checkboxValue1,
			checkboxValue2,
			checkboxValue3,
			radioValue,
			selectValue,
			checkboxValues,
		};
	},
};
</script>

<style lang="scss" scoped></style>
