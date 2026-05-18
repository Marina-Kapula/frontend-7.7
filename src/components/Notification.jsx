import useNotificationStore from '../store/notificationStore'

function Notification() {
  const message = useNotificationStore((state) => state.message)

  if (!message) return null

  return <div>{message}</div>
}

export default Notification