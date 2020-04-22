
export default function toggleDrawer(isOpen = false, action) {
    switch (action.type) {
      case 'toggle':
        return !isOpen
      default:
        return false
    }
  }