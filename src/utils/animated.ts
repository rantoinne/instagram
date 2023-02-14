import { ComponentClass } from 'react';
import Animated from 'react-native-reanimated';

/**
 * @param component A React Native component.
 * @returns Passed component with Animation capabilities
 */
export const createAnimatedComponent = (component: ComponentClass) => {
  return Animated.createAnimatedComponent(component);
}

export const parallelizeAnimation = async (
  animations: Animated.BackwardCompatibleWrapper[],
  cb?: { onStart?: () => void; onDone?: () => void },
): Promise<void> => {
  cb?.onStart && cb.onStart();
  const promises = animations.map(a => {
    return new Promise<void>(resolve => {
      a.start(() => {
        resolve();
      });
    });
  });
  return Promise.all(promises).then(() => {
    cb?.onDone && cb.onDone();
  });
};
