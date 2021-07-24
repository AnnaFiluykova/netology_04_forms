import React, {useState} from 'react';
import './style.css';

const compareNumeric = (a, b) => {
  const formattedDateA = a.date.split('.');
  const formattedDateB = b.date.split('.');

  formattedDateA.reverse().join('');
  formattedDateB.reverse().join('');

  if (formattedDateA < formattedDateB) return 1;
  if (formattedDateA === formattedDateB) return 0;
  if (formattedDateA > formattedDateB) return -1;
}

const Calendar = () => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');
  const [list, setList] = useState([]);

  const handleChangeDate = (e) => {
    const { value } = e.target;
    setDate(value);
  }

  const handleChangeDistance  = (e) => {
    const { value } = e.target;
    setDistance(value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();

    const newArray = [...list];
    const findDayIndex = list.findIndex((item) => item.date === date);

    if (findDayIndex > -1) {
      newArray[findDayIndex].distance += Number(distance);
    } else {
      newArray.push({ date, distance: Number(distance) });
      newArray.sort(compareNumeric);
      setDate('');
      setDistance('');
    }

    setList(newArray);
  }

  const onClickButtonEdit = (e) => {
    const elem = list[Number(e.target.dataset.index)];

    setDate(elem.date);
    setDistance(elem.distance);
    onClickButtonDelete(e);
  }

  const onClickButtonDelete = (e) => {
    const newArray = [...list];
    newArray.splice(Number(e.target.dataset.index), 1);
    setList(newArray);
  }

  return (
    <div className='main_1'>
      <div className='main'>
        <div className='table-row '>
          <div>Дата</div>
          <div>Пройдено км</div>
        </div>

        <form className='table-row' onSubmit={onSubmitForm}>
          <div>
            <input onChange={handleChangeDate} value={date} className='input' name='date' placeholder='напиши дату, тварь' />
          </div>
          <div>
            <input onChange={handleChangeDistance} value={distance} className='input' name='distance' />
          </div>
          <div>
            <button type='submit' className='input'>ОК</button>
          </div>
        </form>

        <div>
          <div className='table-row'>
            <div>дата</div>
            <div>пройдено км</div>
            <div>действие</div>
          </div>

          {list.map((item, index) => {
            return (
              <div key={`item-${index}`} className='table-row'>
                <div>{item.date}</div>
                <div>{item.distance}</div>
                <div>
                  <button onClick={onClickButtonEdit} data-index={index}>Редактировать</button>
                  <button onClick={onClickButtonDelete} data-index={index}>Удалить</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Calendar;
