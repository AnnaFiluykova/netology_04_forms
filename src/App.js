import { Fragment } from 'react';
import ColorConverter from './lesson_04_forms/hex2rgb/components/ColorConverter';
import StepsCalculator from './lesson_04_forms/steps/components/StepsCalculator';

const Root = () => {
  return (
    <Fragment>
      <ColorConverter />
      <StepsCalculator />
    </Fragment>
  );
}

export default Root;

