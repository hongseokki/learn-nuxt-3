<template>
  <div class="q-pa-xl">
    <AppCard>
      <template #header>
        <div class="text-h5 text-weight-medium">{{ course?.title }}</div>
        <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
          <span class="flex items-center">
            <q-icon name="star" size="16px" color="orange" />
            <span>{{ course?.rating }}</span>
          </span>
          <span> {{ course?.reviewsCount }}개의 수강평 </span>
          <span>&middot;</span>
          <span>{{ course?.studentCount }}명의 수강생</span>
          <q-space />
          <a class="text-bold" :href="course?.reviewsUrl" target="_blank">
            수강평 보기
          </a>
        </div>
      </template>
      <div class="q-mb-md">
        <VideoPlayer :src="course?.video" />
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <q-btn
            label="인프런에서 수강하기"
            unelevated
            class="full-width"
            color="primary"
            :href="course?.inflearnUrl"
            target="_blank"
          />
        </div>
        <div class="col-6">
          <q-btn
            label="짐코딩 클럽에서 수강하기"
            unelevated
            class="full-width"
            color="red"
            :href="course?.gymcodingUrl"
            target="_blank"
          />
        </div>
      </div>
      <p class="q-mt-lg text-grey-8">
        {{ course?.content }}
      </p>
      <template #footer>
        <q-btn
          v-if="prevCourse"
          label="이전 강의"
          color="primary"
          unelevated
          :to="prevCourse.path"
        />
        <q-space />
        <q-btn
          v-if="nextCourse"
          label="다음 강의"
          color="primary"
          unelevated
          :to="nextCourse.path"
        />
      </template>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
import AppCard from '~/componets/AppCard.vue'
import VideoPlayer from '~/componets/VideoPlayer.vue'
import { useCourse } from '~/composables/useCourse'
const route = useRoute()
const courseSlug = route.params.courseSlug as string
const { course, prevCourse, nextCourse } = useCourse(courseSlug)
definePageMeta({
  key: (route) => route.fullPath,
  title: 'My Homepage',
  pageType: '',
})

console.log('[courseSlug].vue 컨포넌트 setup hook')
console.log('route.meta', route.meta)
</script>

<style scoped></style>
