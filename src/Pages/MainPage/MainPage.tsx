import { useState } from 'react';
import { Burger } from '../../Components/Burger';
import { Button } from '../../Components/Button';
import { Calculator } from '../../Components/Calculator';
import { Picker } from '../../Components/Picker';
import { Title } from '../../Components/Title';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import style from './MainPage.module.scss';

export default function MainPage() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const { width } = useWindowDimensions();
  const handleMouseOver = () => {
    if (!isOpened) {
      setShowCalculator(!showCalculator);
    }
  };
  const handleClick = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className={`${style.root} animate__animated animate__fadeInDownBig`}>
      <div className={style.container}>
        <Title>
          Make <br /> Your <br /> Burger
        </Title>
        <Burger />
        {width < 950 && width > 520 && (
          <Button
            type="summary"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOver}
            onClick={handleClick}>
            Summary &#8656;
          </Button>
        )}
        <Calculator showCalculator={showCalculator} />
      </div>
      <Picker />
    </div>
  );
}
