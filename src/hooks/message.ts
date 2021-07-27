import { ElMessage } from 'element-plus'
interface message {
  success: Function,
  error: Function,
  info: Function,
  warning: Function
}
export function useMessage (message: string ):message {
  return {
    success: () => {
      ElMessage.success(message)
    },
    error: () => {
      ElMessage.error(message)
    },
    info: () => {
      ElMessage.info(message)
    },
    warning: () => {
      ElMessage.warning(message)
    }
  }
}

export function useInfoMessage (message: string) {
  const messageHook:message = useMessage(message)
  messageHook.info()
}

export function useErrorMessage (message: string) {
  const messageHook:message = useMessage(message)
  messageHook.error()
}

export function useWarnMessage (message: string) {
  const messageHook:message = useMessage(message)
  messageHook.warning()
}