import {useState, useEffect, useMemo} from 'react';
import {Dimensions, PixelRatio} from 'react-native';

const useDimensions = () => {
  const [fontSize, setFontSize] = useState<number>(0);
  const [screenSize, setScreenSize] = useState<{width: number; height: number}>(
    {
      width: 0,
      height: 0,
    },
  );

  useEffect(() => {
    const calculateFontSize = () => {
      const pixelDensity = PixelRatio.get();
      const baseFontSize = 16; // Set your base font size here

      const calculatedFontSize = baseFontSize * pixelDensity;
      setFontSize(calculatedFontSize);
    };

    const calculateScreenSize = () => {
      const {width, height} = Dimensions.get('window');
      setScreenSize({width, height});
    };

    calculateFontSize();
    calculateScreenSize();

    const listener = Dimensions.addEventListener('change', calculateScreenSize);

    return () => {
      listener?.remove();
    };
  }, []);

  return useMemo(() => ({fontSize, screenSize}), [fontSize, screenSize]);
};

export default useDimensions;
