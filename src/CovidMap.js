import React, {useEffect, useState} from "react";
import {
  Seoul,
  Gyeonggi,
  Incheon,
  Gangwon,
  Chungnam,
  Chungbuk,
  Sejong,
  Daejeon,
  Gyeongnam,
  Gyeongbuk,
  Jeonbuk,
  Jeonnam,
  Ulsan,
  Busan,
  Daegu,
  Gwangju,
  Jeju,
} from "./area/all_area";
import axios from "axios";

const levelColor = ['#fff5f5', '#ffc9c9', '#ff8787', '#fa5252', '#c92a2a']

function CovidMap() {
  const [covidData, setCovidData] = useState(null)
  const [selectedArea, setSelectedArea] = useState('')

  useEffect(() => {
    axios.get('https://elice-covid.herokuapp.com/covidData')
        .then((res) => {
          setCovidData(res.data.data)
        })
  }, [])

    if(covidData === null) {
      return <p>Loading...</p>
    }
  return (
    <>
      <div>
        {selectedArea === null ? (
        <p>선택 지역 없음</p>
        ) : (
        <>
          <p>선택한 지역 : {selectedArea.name}</p>
          <p>거리두기 단계 : {selectedArea.level}</p>
          <p>확진자 수 : {selectedArea.num}</p>
        </>
        )}
      </div>
      <svg width="700px" height="1000px" viewBox="0 0 800 1200">
        <Seoul
        fill={levelColor[covidData['서울'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })} />

        <Gyeonggi fill={levelColor[covidData['경기'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />

        <Gangwon
        fill={levelColor[covidData['강원'].level - 1]}
        onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })} 
        />

        <Incheon fill={levelColor[covidData['인천'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />

        <Chungnam
        fill={levelColor[covidData['충남'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />

        <Chungbuk
        fill={levelColor[covidData['충북'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />

        <Sejong
        fill={levelColor[covidData['세종'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />

        <Daejeon
        fill={levelColor[covidData['대전'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />

        <Gyeongnam
        fill={levelColor[covidData['경남'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />

        <Gyeongbuk
        fill={levelColor[covidData['경북'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />

        <Jeonbuk
        fill={levelColor[covidData['전북'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />

        <Jeonnam
        fill={levelColor[covidData['전남'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />

        <Ulsan
        fill={levelColor[covidData['울산'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />

        <Busan
        fill={levelColor[covidData['부산'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />
        
        <Daegu
        fill={levelColor[covidData['대구'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />

        <Gwangju
        fill={levelColor[covidData['광주'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />
        
        <Jeju
        fill={levelColor[covidData['제주'].level - 1]} onClick={(evt) => setSelectedArea({
          ...covidData[evt.target.id],
          name: evt.target.id,
        })}
        />
      </svg>
    </>
  );
}
export default CovidMap;
