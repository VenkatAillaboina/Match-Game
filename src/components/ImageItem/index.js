import './index.css'

const ImageItemm = props => {
  const {imageItemDetails, changeCurrentImageID} = props
  const {id, thumbnailUrl} = imageItemDetails
  const onClickImageItem = () => {
    changeCurrentImageID(id)
  }
  return (
    <li>
      <button
        type="button"
        className="image-item-button"
        onClick={onClickImageItem}
      >
        <img alt="thumbnail" src={thumbnailUrl} className="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItemm
