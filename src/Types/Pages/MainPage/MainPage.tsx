import { Burger } from '../../../Components/Burger';
import { Calculator } from '../../../Components/Calculator';
import { Picker } from '../../../Components/Picker';
import { Title } from '../../../Components/Title';
import style from './MainPage.module.scss';

export default function MainPage() {
  return (
    <div className={`${style.root} animate__animated animate__fadeInDownBig`}>
      <div className={style.container}>
        <Title />
        <Burger />
        <Calculator />
      </div>
      <Picker />
    </div>
  );
}
