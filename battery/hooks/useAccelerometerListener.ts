
import { useState, useEffect, useRef } from "react";
import { Subscription } from "expo-battery";
import { Accelerometer } from "expo-sensors";

export const useAccelerometerListener = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const subscription = useRef<null | Subscription>(null);

  const _subscribe = () => {
		subscription.current = Accelerometer.addListener(setData);
	};

  const _unsubscribe = () => {
    subscription.current && subscription.current.remove();
    subscription.current = null;
  };

	useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

	return data;
};
