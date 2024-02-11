import React from 'react';
import { Radio, Row, Col } from 'antd';

function SeatNumber() {
  const numRows = 8;
  const numCols = 5;

  const renderRadioButtons = () => {
    const radioButtons = [];
    
    for (let row = numRows - 1; row >= 0; row--) { 
      const rowButtons = [];
      for (let col = 0; col < numCols; col++) {
        const seatNumber = `${String.fromCharCode(65 + row)}${col + 1}`;
        rowButtons.push(
          <Col key={`${seatNumber}`} span={4}>
            <Radio.Button value={seatNumber} style={{ width: '80px', marginBottom: '2em',marginLeft: '2em',textAlign: 'center'}}>{seatNumber}</Radio.Button>
          </Col>
        );
      }
      radioButtons.push(
        <Row key={`row-${row}`} gutter={[8, 8]} justify="center">
          {rowButtons}
        </Row>
      );
    }
    return radioButtons;
  };

  return (
    <Radio.Group size="large">
      {renderRadioButtons()}
    </Radio.Group>
  );
}

export default SeatNumber;
