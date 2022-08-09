import classNames from 'classnames'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from '../styles/Designer.module.scss'

const FIXED_COLORS = [
  '#ffc231',
  '#ff6c31',
  '#ff1c1c',
  '#35c161',
  '#3552c1',
  '#7935c1'
]

const WHITELISTED_FILETYPES = [
  'image/png',
  'image/jpg',
  'image/jpeg'
]

const Pixel = ({ paint, row, column, backgroundColor, mouseDown, setMouseDown }) => {
  const onMouseDown = () => {
    setMouseDown(true)
    paint(row, column)
  }

  const onMouseUp = () => {
    setMouseDown(false)
  }

  const onMouseOver = () => {
    if (mouseDown) {
      paint(row, column)
    }
  }

  return (
    <div 
      style={{ backgroundColor: backgroundColor || '#191f2b' }}
      className={styles.pixel}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseOver={onMouseOver}
    />
  )
}

const Designer = ({ size }) => {
  const [paintMatrix, setPaintMatrix] = useState([])
  const [selectedColor, setSelectedColor] = useState(FIXED_COLORS[0])
  const [mouseDown, setMouseDown] = useState(false)
  const canvasRef = useRef()

  const rows = useMemo(() => {
    return [...Array(size).keys()]
  }, [size])

  const columns = useMemo(() => {
    return [...Array(size).keys()]
  }, [size])

  const getCleanMatrix = (matrixSize) => {
    let rows = []

    for (let r = 0; r < matrixSize; r++) {
      let columns = []
      for (let c = 0; c < matrixSize; c++) {
        columns.push(undefined)
      }
      rows.push(columns)
    }

    return rows
  }

  useEffect(() => {
    setPaintMatrix(getCleanMatrix(size))
  }, [size])

  const reset = useCallback(() => {
    setPaintMatrix(getCleanMatrix(size))
  }, [size])

  const paintPixel = (row, column) => {
    setPaintMatrix(old => {
      let copy = [...old]
      copy[row][column] = selectedColor
      return copy
    })
  }

  const onFileSelected = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = (async (file) => {
      if (!WHITELISTED_FILETYPES.includes(file?.type)) return

      const bitmap = await createImageBitmap(file);
      const canvas = canvasRef.current;

      console.log(bitmap)

      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, 9999, 9999);

      ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      let constructPixelData = getCleanMatrix(size)

      for(let i = 0; i < size; ++i) {
        for(let j = 0; j < size; ++j) {
            let pixelData = canvas.getContext('2d').getImageData(i, j, 1, 1).data;
            if(pixelData[3] !== 0) {
              constructPixelData[i][j] = `rgb(${pixelData[0]} ${pixelData[1]} ${pixelData[2]})`
            }
        }
      }

      setPaintMatrix(constructPixelData)
    })(file)
  }

  const renderToolbar = () => (
    <div className={styles.toolbar}>
      <div className={`bg-indigo-600 rounded-lg shadow-sm py-2 px-2 ${selectedColor === undefined && 'bg-neutral-600'}`}onClick={() => setSelectedColor(undefined)}>Eraser</div>
      <div className='bg-indigo-600 rounded-lg shadow-sm py-2 px-2 ml-5' onClick={reset}>Reset</div>
      <div className={classNames(styles.importHolder, 'bg-indigo-600 rounded-lg shadow-sm py-2 px-2 ml-2')}>
        <input type="file" className={styles.selectFile} onChange={onFileSelected}/>
      </div>
    </div>
  )

  const renderColorPicker = () => (
    <div className={styles.colorRow}>
      {FIXED_COLORS.map(color => (
        <div style={{ backgroundColor: color }} className={classNames(styles.colorVariant, { [styles.selectedColor]: selectedColor === color })} onClick={() => setSelectedColor(color)}></div>
      ))}

      <div className={styles.manualColorSelect}>
        <p className={styles.selectColorLabel}>Select color:</p>
        <input type="color" onChange={({ target }) => setSelectedColor(target.value)}/>
      </div>
    </div>
  )

  return (
    <div>
      <canvas ref={canvasRef} className={styles.imageCanvas}/>
      {renderToolbar()}
      {renderColorPicker()}
      <div className={styles.pixelBoard}>
        {rows.map(row => {
          return (
            <div className={styles.row}>
              {columns.map(col => <Pixel row={row} column={col} paint={paintPixel} backgroundColor={paintMatrix[row]?.[col]} mouseDown={mouseDown} setMouseDown={setMouseDown}/>)}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Designer
