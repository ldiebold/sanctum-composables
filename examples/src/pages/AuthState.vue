<script setup lang="ts">
import { useAuthState } from 'sanctum-composables'

const authState = useAuthState()
</script>

<template>
  <pre>{{ authState }}</pre>
</template>
