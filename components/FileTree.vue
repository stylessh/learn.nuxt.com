<script setup lang="ts">
const editor = useEditorState()

// Select the first file by default.
watchEffect(() => {
  if (editor.selectedFile == null && editor.whitelistedFiles.length > 0)
    editor.selectFile(editor.whitelistedFiles[0])
})
</script>

<template>
  <div flex="~ col" h-full of-auto>
    <button
      v-for="file in editor.whitelistedFiles" :key="file.filepath"
      px2 py1 hover="bg-active" text-left
      flex="~ items-center gap-2"
      :class="{
        'text-primary': file.filepath === editor.selectedFile?.filepath,
      }"
      @click="editor.selectFile(file)"
    >
      <span
        :style="{
          background: getFileExtensionColor(file.filepath.split('.').pop()!),
        }"
        mt1 inline-block h-2 w-2 rounded-full
      /> {{ file.filepath }}
    </button>
  </div>
</template>
