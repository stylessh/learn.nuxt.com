<script setup lang="ts">
const editor = useEditorState()
</script>

<template>
  <div h-full grid="~ rows-[min-content_1fr]">
    <div
      flex="~ gap-2 items-center"
      border="b base dashed"
      bg-faded px4 py2
    >
      <div i-ph-text-t-duotone />
      <span text-sm>Editor</span>
    </div>

    <div grid="~ cols-[1fr_2fr]">
      <FileTree />

      <!-- TheCodeEditor -->
      <textarea
        v-model="editor.input"
        border="l base"
        h-full w-full resize-none bg-transparent p4 font-mono
        @input="editor.onTextInput"
      />
    </div>
  </div>
</template>
