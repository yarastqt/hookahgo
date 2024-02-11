import { Button } from '@app/shared/ui'
import { useUnit } from 'effector-react'
import { FC } from 'react'
import { mainScreenModel } from './model'

export const MainScreen: FC = () => {
  const { createdRoomId, isRoomCreating, onCreateRoomPress } = useUnit({
    createdRoomId: mainScreenModel.$createdRoomId,
    isRoomCreating: mainScreenModel.$isRoomCreating,
    onCreateRoomPress: mainScreenModel.createRoomPressed,
  })

  return (
    <div>
      <Button onPress={() => onCreateRoomPress()}>
        {isRoomCreating ? 'Создаем ссылку...' : 'Пригласить друга'}
      </Button>

      {createdRoomId && (
        <div
          style={{
            backgroundColor: '#fff',
            padding: 4,
          }}
        >
          {createdRoomId}
        </div>
      )}
    </div>
  )
}
