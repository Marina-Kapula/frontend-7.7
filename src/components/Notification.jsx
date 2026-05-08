import useNotificationStore from '../store/notificationStore'

const Notification = () => {
  const notification = useNotificationStore(
    (state) => state.notification
  )

  if (!notification) return null

  return (
    <div>
      {notification}
    </div>
  )
}

export default Notification