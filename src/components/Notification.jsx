import useNotificationStore from '../store/notificationStore'

function Notification() {
  const message = useNotificationStore(s => s.message)

  if (!message) return null

  return (
    <div style={{ padding: 10, background: '#ddd' }}>
      {message}
    </div>
  )
}

export default Notification