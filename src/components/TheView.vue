<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>
			<br />
			<div class="row g-3">
				<!-- <div class="col col-4">
					<AppCard title="제목1" contents="내용"></AppCard>
				</div>
				<div class="col col-4">
					<AppCard :title="post.title" :contents="post.contents"> </AppCard>
				</div> -->
				<div v-for="item in posts" :key="item.id" class="col col-4">
					<AppCard
						:title="item.title"
						:contents="item.contents"
						:type="item.type"
						:is-Like="item.isLike"
						@toggle-Like="item.isLike = !item.isLike"
						:obj="obj"
					></AppCard>
					<button type="button" @click="item.isLike = !item.isLike">
						toggle
					</button>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import PostCreate from '@/components/PostCreate.vue';
import { reactive } from 'vue';

export default {
	components: { AppCard, PostCreate },
	setup() {
		// object타입 속성 전달하기
		const obj = reactive({
			title: '제목obj',
			contents: '내용obj',
		});

		const post = reactive({
			title: '제목2',
			contents: '내용2',
		});

		const posts = reactive([
			{
				id: 1,
				title: 'title1',
				contents: 'contents1',
				type: 'news',
				isLike: true,
			},
			{
				id: 2,
				title: 'title2',
				contents: 'contents2',
				type: 'news',
				isLike: true,
			},
			{
				id: 3,
				title: 'title3',
				contents: 'contents3',
				type: 'notice',
				isLike: false,
			},
			{
				id: 4,
				title: 'title4',
				contents: 'contents4',
				type: 'notice',
				isLike: false,
			},
		]);
		const createPost = (a, b, c, d) => {
			console.log('createPost', a, b, c, d);
		};
		return { post, posts, obj, createPost };
	},
};
</script>

<style lang="scss" scoped></style>
