import * as C from './style'
import { useState, useEffect } from 'react'

import Bronze from '../../assets/img/bronze.png'
import Prata from '../../assets/img/prata.png'
import Ouro from '../../assets/img/ouro.png'
import Esmeralda from '../../assets/img/esmeralda.png'
import Rubi from '../../assets/img/rubi.png'
import Diamante from '../../assets/img/diamante.png'
import Mestre from '../../assets/img/mestre.png'
import { useTaskContext } from '../../context/TaskContext'

export default function Dashboard() {
  const { sentTasks } = useTaskContext()
  const [totalScore, setTotalScore] = useState(sentTasks.length * 10)
  const [rank, setRank] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    const newRank = () => {
      if (totalScore <= 50) {
        setRank('Bronze')
        setImage(Bronze)
      } else if (totalScore <= 100) {
        setRank('Prata')
        setImage(Prata)
      } else if (totalScore <= 150) {
        setRank('Ouro')
        setImage(Ouro)
      } else if (totalScore <= 200) {
        setRank('Rubi')
        setImage(Rubi)
      } else if (totalScore <= 250) {
        setRank('Esmeralda')
        setImage(Esmeralda)
      } else if (totalScore <= 300) {
        setRank('Diamante')
        setImage(Diamante)
      } else {
        setRank('Mestre')
        setImage(Mestre)
      }
    }

    newRank()
  }, [])
  return (
    <C.Container>
      <h3>Atualmente você possui</h3>
      <h1>{totalScore} pontos</h1>
      {sentTasks.length > 0 ? (
        <C.Level>
          <h2>Sua patente é : </h2>
          <img src={image} alt="Patente" />
          <h2 className="levelName">{rank}</h2>
        </C.Level>
      ) : (
        <span>Nenhuma tarefa concluida ainda</span>
      )}
    </C.Container>
  )
}
