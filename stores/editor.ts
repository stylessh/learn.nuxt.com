import type { Raw } from 'vue'
import type { VirtualFile } from '~/structures/VirtualFile'

export const useEditorState = defineStore('editor', () => {
  const files = shallowRef<Raw<VirtualFile[]>>([])

  const selectedFile = ref<VirtualFile>()
  const input = ref<string>()

  // Removing ignored files from the list.
  const whitelistedFiles = computed(() => files.value.filter(file => !isFileIgnored(file.filepath)))

  function selectFile(file: VirtualFile) {
    selectedFile.value = file
    input.value = file.read()
  }

  function onTextInput() {
    // TODO: add throttle
    if (input.value != null)
      selectedFile?.value?.write(input.value)
  }

  return {
    files,
    whitelistedFiles,
    selectedFile,
    input,
    selectFile,
    onTextInput,
  }
})

export type EditorStore = ReturnType<typeof useEditorState>
