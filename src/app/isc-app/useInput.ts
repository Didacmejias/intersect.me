import { type Ref, ref, watch } from 'vue'

enum ERRORS {
  required = 'The nickname is required',
  regex = 'The nickname only support letters',
  length = 'The nickname must have between 3 and 15 letters'
}

export const useInput = () => {
  const nickname: Ref<string> = ref('')
  const error: Ref<string> = ref('')

  const validateInput = (value: string) => {
    if (!value) error.value = ERRORS.required
    else if(!value.match('^[a-zA-Z]+(?:s+[a-zA-Z]+)*$')) error.value = ERRORS.regex
    else if (value.length < 3 || value.length > 15) error.value = ERRORS.length
    else error.value = ''
  }

  watch(nickname, validateInput)

  return {
    nickname,
    error,
    validateInput
  }
}
