import { ItemTypes, knightImage } from './Constants'
import { DragPreviewImage, useDrag } from 'react-dnd'

export default function Knight() {
  const [{isDragging}, drag, preview] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div 
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 35,
          fontWeight: 'bold',
          cursor: 'move',
        }}
      >
        ♘
      </div>
    </>
  );
}