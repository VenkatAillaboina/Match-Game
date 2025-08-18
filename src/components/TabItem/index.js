import './index.css'

const TabItem = props => {
  const {isTabItemActive, tabItemDetails, changeActiveTabItemId} = props
  const {tabId, displayText} = tabItemDetails

  const onClickTabItem = () => {
    changeActiveTabItemId(tabId)
  }

  const activeTabItemButtonClassName = isTabItemActive
    ? 'active-tab-item-button'
    : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-item-button ${activeTabItemButtonClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
