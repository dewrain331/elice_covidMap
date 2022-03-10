import {useRecoilState} from 'recoil'
import areaState from '../atom/areaState'

const Area = () => {
    const [selectedArea, setSelectedArea] = useRecoilState(areaState)

    return (
        <div>
        {selectedArea === null ? (
        <p>선택 지역 없음</p>
        ) : (
        <AreaInfo name={selectedArea.name} level={selectedArea.level} num={selectedArea.num} />
        )}
      </div>
    )
}

const AreaInfo = ({name, level, num}) => {
    return (
      <>
        <p>선택한 지역 : {name}</p>
        <p>거리두기 단계 : {level}</p>
        <p>확진자 수 : {num}</p>
      </>
    )
  }

export default Area